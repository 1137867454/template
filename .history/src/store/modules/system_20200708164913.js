import fx from '../../utils/fx'
import api from '../../utils/api'
const system = {
  state: {
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
      let url = '/system/getRoleListPage';
      fx.setConnect(url)
      .then(res => {
        commit('set_RoleList', res.data.data);
      }).catch(err => {

      })
    },
    // 添加新用户(租户) post /system/addUser
    // 获取用户信息 get /system/getUserListPage
    getUserListPage({state, commit}) {
      let url = `/system/getUserListPage`;
      fx.setConnect({url})
      .then(res => {
        commit('set_UserList', res.data.data);
      }).catch(err => {

      })
    },
    // 删除角色信息 post /system/delRoleById
    // 加载目录 get /system/getCatalogue
    
    // 删除用户信息 post  /system/removeUser
    // 修改角色以及对应的权限 post /system/updRole
    // 修改租户信息(基本信息,权限等) post /system/updUser



  }
}
export default system
