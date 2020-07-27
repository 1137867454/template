import fx from '../../utils/fx'
import api from '../../utils/api'
import { setItem, getItem, removeItem } from '../../utils/token'

const corporation = {
  state: {
    page: {},     //分页对象
    // userList: [], //用户列表
    // roleList: [], //角色列表
    corporationList: [] //公司列表
  },
  getters: {
    // getRouter: state => state.asyncRouterMap_,
    // get_Userlist: state => state.userList,
    // get_RoleList: state => state.roleList,
    get_CorporationList: state => state.corporationList
  },
  mutations: {
    set_UserList: (state, data) => state.userList = data,
    set_RoleList: (state, data) => state.roleList = data,
    set_CorporationList: (state, data) => state.corporationList = data,
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
    // 添加当前账户下的公司 post /corporation/addCorporation

    addCorporation({state, dispatch}, data) {
      return new Promise( (resolve, reject) => {
        let url = `/corporation/addCorporation`;
        let methods = 'post';
        fx.setConnect({url, methods, data})
        .then(res => {
          resolve(1)
          dispatch('getCorporationList');
        }).catch(err => {

        })
      })
    },
    // 删除公司信息 post /corporation/delCorporation
    deleteCorporation({state, dispatch}, id) {
      return new Promise( (resolve, reject) => {
        console.log(id)
        id = JSON.stringify(id);
        let url = `/corporation/delCorporation?id=${id}`;
        let methods = 'post';
        fx.setConnect({url, methods})
        .then(res => {
          dispatch('getCorporationList');
        }).catch(err => {

        })
      })
    },
    // 获取当前租户下的公司list get /corporation/getCorporationList

    // getRoleById({state}, roleId) {
    //   return new Promise( (resolve, reject) => {
    //     let url = `/system/getRoleById?roleId=${roleId}`;
    //     fx.setConnect({url})
    //     .then(res => {
    //       resolve(res.data.data)
    //     }).catch(err => {

    //     })
    //   })
    // },
    // 修改公司信息/corporation/updCorporation
    updateCorporation({state, dispatch}, data) {
      return new Promise( (resolve, reject) => {
        let url = `/corporation/updCorporation`;
        let methods = 'post';
        fx.setConnect({url, methods, data})
        .then(res => {
          dispatch('getCorporationList');
          resolve(1);
        }).catch(err => {

        })
      })
    },
    // 获取当前租户下的公司list get /corporation/getCorporationList
    getCorporationList({state, commit}, page) {
      if(page) {
        state.page = page;
      }else{
        page = state.page;
      }
      let url = `/corporation/getCorporationList?pageSize=${page.pageSize}&pageNum=${page.currentPage}`;
      fx.setConnect({url})
      .then(res => {
        page.total = res.data.data.total *1;
        commit('set_CorporationList', res.data.data);
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
    }
  }
}
export default corporation
