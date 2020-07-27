import fx from '../../utils/fx'
import api from '../../utils/api'
import { setItem, getItem, removeItem } from '../../utils/token'

const system = {
  state: {
    page: {},     //分页对象
    userList: [], //用户列表
    roleList: [], //角色列表
  },
  getters: {
    // getRouter: state => state.asyncRouterMap_,
    get_Userlist: state => state.userList,
    get_RoleList: state => state.roleList,
  },
  mutations: {
    set_UserList: (state, data) => state.userList = data,
    set_RoleList: (state, data) => state.roleList = data,
    treeMenu() {
      let branch = JSON.parse(getItem('branch'));
      let tree = JSON.parse(getItem('catalogue'));
      let bottomArr = []; //底层菜单（3级）
      branch.forEach( (v, i) => {
        // v.label = v.permissionName;
        if(v.nodeId){ //分支与外部树干的关联ID,二级菜单
          tree.find((t, i) => {
            t.label = t.name;
            t.menu = true;
            if(t.id == v.nodeId) {
              if(!t.children) {
                t.children = [];
              }
              t.children.push({
                id: v.permissionId,
                label: v.permissionName,
                parentId: v.permissionId
              });
            }
          })
        }else{   //三级菜单
          bottomArr.push({
            id: v.permissionId,
            parentId: v.parentId,
            label: v.permissionName
          })
        }
      })
      bottomArr.forEach(a => {
        var flag = false;
        tree.find(tr => {
          if(tr.children) {
            flag = tr.children.find( mid => {
              if(mid.parentId == a.parentId) {
                if(!mid.children) {
                  mid.children = []
                }
                mid.children.push(a)
                return true;
              }
            })
            if(flag){ return ;}
          }
        })
      })
      console.log(tree);
      console.log(bottomArr);
      setItem('tree', JSON.stringify(tree));
    },
  },
  actions: {
    // 添加角色以及对应的权限 post /system/addRole
    addRole({state, dispatch}, data) {
      return new Promise( (resolve, reject) => {
        let url = `/system/addRole`;
        let methods = 'post';
        fx.setConnect({url, methods, data})
        .then(res => {
          resolve(1)
          dispatch('getRoleList');
        }).catch(err => {

        })
      })
    },
    // 删除角色信息 post /system/delRoleById
    deleteRole({state, dispatch}, id) {
      return new Promise( (resolve, reject) => {
        let url = `/system/delRoleById?id=${id}`;
        let methods = 'post';
        fx.setConnect({url, methods})
        .then(res => {
          dispatch('getRoleList');
        }).catch(err => {

        })
      })
    },
    // 根据角色ID查询角色所对应的权限 get /system/getRoleById
    getRoleById({state}, roleId) {
      return new Promise( (resolve, reject) => {
        let url = `/system/getRoleById?roleId=${roleId}`;
        fx.setConnect({url})
        .then(res => {
          resolve(res.data.data)
        }).catch(err => {

        })
      })
    },
    // 修改角色以及对应的权限 post /system/updRole
    updateRole({state, dispatch}, data) {
      return new Promise( (resolve, reject) => {
        let url = `/system/updRole`;
        let methods = 'post';
        fx.setConnect({url, methods, data})
        .then(res => {
          resolve(1);
          dispatch('getRoleList');
        }).catch(err => {

        })
      })
    },
    // 查询角色列表 get /system/getRoleListPage
    getRoleList({state, commit}, page) {
      let url = `/system/getRoleListPage?pageSize=20&pageNum=1`;
      fx.setConnect({url})
      .then(res => {
        page.total = res.data.data.total *1;
        commit('set_RoleList', res.data.data);
      }).catch(err => {

      })
    },
    // 添加新用户(租户) post /system/addUser
    addUser({state, dispatch}, data) {
      return new Promise( (resolve, reject) => {
        let url = `/system/addUser`;
        let methods = 'post';
        fx.setConnect({url, methods, data})
        .then(res => {
          console.log('......adduER')
          resolve(1)
          dispatch('getUserListPage');
        }).catch(err => {

        })
      })
    },
    
    // 删除用户信息 post  /system/removeUser
    deleteUser({state, dispatch}, id) {
      return new Promise( (resolve, reject) => {
        let url = `/system/removeUser?id=${id}`;
        let methods = 'post';
        fx.setConnect({url, methods})
        .then(res => {
          dispatch('getUserListPage');
        }).catch(err => {

        })
      })
    },
    // 修改用户信息 post /system/updUser
    updateUser({state, dispatch}, data) {
      return new Promise( (resolve, reject) => {
        let url = `/system/updUser`;
        let methods = 'post';
        fx.setConnect({url, methods, data})
        .then(res => {
          resolve(1);
          dispatch('getUserListPage');
        }).catch(err => {

        })
      })
    },
    // 获取用户信息 get /system/getUserListPage
    getUserListPage({state, commit}, page) {
      if(!page) {
        page = state.page;

      }else{
        state.page = page;
      }
      let url = `/system/getUserListPage?pageSize=${page.pageSize}&pageNum=${page.currentPage}&userName=${page.userName}` ;
      fx.setConnect({url})
      .then(res => {
        commit('set_UserList', res.data.data);
        page.total = res.data.data.total * 1;
      }).catch(err => {

      })
    },
    // 加载目录 get /system/getCatalogue
    
    
    // 修改租户信息(基本信息,权限等) post /system/updUser



  }
}
export default system
