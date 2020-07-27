import fx from '../../utils/fx'
import api from '../../utils/api'
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
  },
  actions: {
    // 添加角色以及对应的权限 post /system/addRole
    // 查询角色列表 get /system/getRoleListPage
    getRoleList({state, commit}, rule) {
      let url = `/system/getRoleListPage?pageSize=20&pageNum=1`;
      fx.setConnect({url})
      .then(res => {
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
        commit('set_UserList', res.data.data.records);
      }).catch(err => {

      })
    },
    // 加载目录 get /system/getCatalogue
    
    // 删除角色信息 post /system/delRoleById
    // 修改角色以及对应的权限 post /system/updRole
    // 修改租户信息(基本信息,权限等) post /system/updUser



  }
}
export default system
