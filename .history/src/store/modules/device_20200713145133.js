import fx from '../../utils/fx'
import api from '../../utils/api'
import { setItem, getItem, removeItem } from '../../utils/token'

const device = {
  state: {
    page: {},     //分页对象
    deviceList: [], //用户列表
    // roleList: [], //角色列表
  },
  getters: {
    // getRouter: state => state.asyncRouterMap_,
    // get_Userlist: state => state.userList,
    get_DeviceList: state => state.deviceList,
  },
  mutations: {
    // set_UserList: (state, data) => state.userList = data,
    set_DeviceList: (state, data) => state.deviceList = data,
  },
  actions: {
    // 添加设备 post /equipment/addEquipment

    addDevice({state, dispatch}, data) {
      return new Promise( (resolve, reject) => {
        let url = `/equipment/addEquipment`;
        let methods = 'post';
        fx.setConnect({url, methods, data})
        .then(res => {
          resolve(1)
          dispatch('getEquipmentList');
        }).catch(err => {

        })
      })
    },
    // 删除设备 post /equipment/delEquipment
    deleteDevice({state, dispatch}, id) {
      return new Promise( (resolve, reject) => {
        let url = `/equipment/delEquipment?id=${id}`;
        let methods = 'post';
        fx.setConnect({url, methods})
        .then(res => {
          dispatch('getEquipmentList');
        }).catch(err => {

        })
      })
    },
    // // 查询设备列表 get /equipment/getEquipmentPage
    // getDevice({state}) {
    //   return new Promise( (resolve, reject) => {
    //     let url = `/equipment/getEquipmentPage`;
    //     fx.setConnect({url})
    //     .then(res => {
    //       resolve(res.data.data)
    //     }).catch(err => {

    //     })
    //   })
    // },
    // 修改设备 post /equipment/updEquipment
    updateDevice({state, dispatch}, data) {
      return new Promise( (resolve, reject) => {
        let url = `/equipment/updEquipment`;
        let methods = 'post';
        fx.setConnect({url, methods, data})
        .then(res => {
          resolve(1);
          dispatch('getRoleList');
        }).catch(err => {

        })
      })
    },
    // 查询设备列表 get /system/getRoleListPage
    getDeviceList({state, commit}, page) {
      let url = `/equipment/getEquipmentPage?pageSize=${page.pageSize}&pageNum=${page.currentPage}&nameOrMacId=${page.nameOrMacId}&roleName=${page.roleName}`;
      fx.setConnect({url})
      .then(res => {
        page.total = res.data.data.total;
        commit('set_DeviceList', res.data.data);
      }).catch(err => {

      })
    },
    // // 添加新用户(租户) post /system/addUser
    // addUser({state, dispatch}, data) {
    //   return new Promise( (resolve, reject) => {
    //     let url = `/system/addUser`;
    //     let methods = 'post';
    //     fx.setConnect({url, methods, data})
    //     .then(res => {
    //       console.log('......adduER')
    //       resolve(1)
    //       dispatch('getUserListPage');
    //     }).catch(err => {

    //     })
    //   })
    // },
    
    // // 删除用户信息 post  /system/removeUser
    // deleteUser({state, dispatch}, id) {
    //   return new Promise( (resolve, reject) => {
    //     let url = `/system/removeUser?id=${id}`;
    //     let methods = 'post';
    //     fx.setConnect({url, methods})
    //     .then(res => {
    //       dispatch('getUserListPage');
    //     }).catch(err => {

    //     })
    //   })
    // },
    // // 修改用户信息 post /system/updUser
    // updateUser({state, dispatch}, data) {
    //   return new Promise( (resolve, reject) => {
    //     let url = `/system/updUser`;
    //     let methods = 'post';
    //     fx.setConnect({url, methods, data})
    //     .then(res => {
    //       resolve(1);
    //       dispatch('getUserListPage');
    //     }).catch(err => {

    //     })
    //   })
    // },
    // // 获取用户信息 get /system/getUserListPage
    // getUserListPage({state, commit}, page) {
    //   if(!page) {
    //     page = state.page;

    //   }else{
    //     state.page = page;
    //   }
    //   let url = `/system/getUserListPage?pageSize=${page.pageSize}&pageNum=${page.currentPage}&userName=${page.userName}` ;
    //   fx.setConnect({url})
    //   .then(res => {
    //     commit('set_UserList', res.data.data);
    //     page.total = res.data.data.total;
    //   }).catch(err => {

    //   })
    // },
    // // 加载目录 get /system/getCatalogue
    
    
    // // 修改租户信息(基本信息,权限等) post /system/updUser



  }
}
export default device
