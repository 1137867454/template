import fx from '../../utils/fx'
import api from '../../utils/api'
import { setItem, getItem, removeItem } from '../../utils/token'

const corporation = {
  state: {
    page: {},            //分页对象
    // userList: [], //用户列表
    // roleList: [], //角色列表
    corporationList: [], //公司列表
    departmentList: {},  //部门列表
    leaderList: {},      //领导列表
    staffList: {}        //员工列表
  },
  getters: {
    // getRouter: state => state.asyncRouterMap_,
    // get_Userlist: state => state.userList,
    // get_RoleList: state => state.roleList,
    get_CorporationList: state => state.corporationList,
    get_DepartmentList: state => state.departmentList,
    get_LeaderList: state => state.leaderList,
    get_StaffList: state => state.staffList,

  },
  mutations: {
    // set_UserList: (state, data) => state.userList = data,
    // set_RoleList: (state, data) => state.roleList = data,
    set_CorporationList: (state, data) => state.corporationList = data,
    set_DepartmentList: (state, data) => state.departmentList = data,
    set_LeaderList: (state, data) => state.leaderList = data,
    set_StaffList: (state, data) => state.staffList = data,
    // treeMenu() {
    //   let branch = JSON.parse(getItem('branch'));
    //   let tree = JSON.parse(getItem('catalogue'));
    //   let bottomArr = []; //底层菜单（3级）
    //   branch.forEach( (v, i) => {
    //     // v.label = v.permissionName;
    //     if(v.nodeId){ //分支与外部树干的关联ID,二级菜单
    //       tree.find((t, i) => {
    //         t.label = t.name;
    //         t.menu = true;
    //         if(t.id == v.nodeId) {
    //           if(!t.children) {
    //             t.children = [];
    //           }
    //           t.children.push({
    //             id: v.permissionId,
    //             label: v.permissionName,
    //             parentId: v.permissionId
    //           });
    //         }
    //       })
    //     }else{   //三级菜单
    //       bottomArr.push({
    //         id: v.permissionId,
    //         parentId: v.parentId,
    //         label: v.permissionName
    //       })
    //     }
    //   })
    //   bottomArr.forEach(a => {
    //     var flag = false;
    //     tree.find(tr => {
    //       if(tr.children) {
    //         flag = tr.children.find( mid => {
    //           if(mid.parentId == a.parentId) {
    //             if(!mid.children) {
    //               mid.children = []
    //             }
    //             mid.children.push(a)
    //             return true;
    //           }
    //         })
    //         if(flag){ return ;}
    //       }
    //     })
    //   })
    //   console.log(tree);
    //   console.log(bottomArr);
    //   setItem('tree', JSON.stringify(tree));
    // },
  },
  actions: {
  /**
   * 公司业务
   *  
   * 
   */
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
    deleteCorporation({state, dispatch}, data) {
      return new Promise( (resolve, reject) => {
        // console.log(id)
        let url = `/corporation/delCorporation`;
        let methods = 'post';
        fx.setConnect({url, methods, data})
        .then(res => {
          dispatch('getCorporationList');
        }).catch(err => {

        })
      })
    },
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
    /**
     * 部门业务
     * 
     */
    // 添加部门 /corporation/addDepartment
    addDepartment({state, dispatch}, data) {
      return new Promise( (resolve, reject) => {
        let url = `/corporation/addDepartment`;
        let methods = 'post';
        fx.setConnect({url, methods, data})
        .then(res => {
          console.log('......adduER')
          resolve(1)
          dispatch('getDepartmentList');
        }).catch(err => {

        })
      })
    },
    
    //删除部门 post /corporation/delDepartment
    deleteDepartment({state, dispatch}, data) {
      return new Promise( (resolve, reject) => {
        let url = `/corporation/delDepartment`;
        let methods = 'post';
        fx.setConnect({url, methods, data})
        .then(res => {
          dispatch('getDepartmentList');
        }).catch(err => {

        })
      })
    },
    // 修改部门 post /corporation/updDepartment

    updateDepartment({state, dispatch}, data) {
      return new Promise( (resolve, reject) => {
        let url = `/corporation/updDepartment`;
        let methods = 'post';
        fx.setConnect({url, methods, data})
        .then(res => {
          resolve(1);
          dispatch('getDepartmentList');
        }).catch(err => {

        })
      })
    },
    // 部门查询 get /corporation/getDepartmentPageList

    getDepartmentList({state, commit}, page) {
      if(!page) {
        page = state.page;
      }else{
        state.page = page;
      }
      let url = `/corporation/getDepartmentPageList?corpId=${page.corpId}&pageSize=${page.pageSize}&pageNum=${page.currentPage}&name=${page.name}` ;
      fx.setConnect({url})
      .then(res => {
        commit('set_DepartmentList', res.data.data);
        page.total = res.data.data.total * 1;
      }).catch(err => {

      })
    },
    /**
     * 领导业务
     *  
     * 
     */
    // 领导信息增加 post /corporation/addLeadPersonal

    addLeader({state, dispatch}, data) {
      return new Promise( (resolve, reject) => {
        let url = `/corporation/addLeadPersonal`;
        let methods = 'post';
        fx.setConnect({url, methods, data})
        .then(res => {
          resolve(1)
          dispatch('getLeaderList');
        }).catch(err => {

        })
      })
    },
    
    //领导信息删除 post /corporation/delLeadPersonal

    deleteLeader({state, dispatch}, data) {
      return new Promise( (resolve, reject) => {
        let url = `/corporation/delLeadPersonal`;
        let methods = 'post';
        fx.setConnect({url, methods, data})
        .then(res => {
          dispatch('getLeaderList');
        }).catch(err => {

        })
      })
    },
    // 修改部门 post /corporation/updLeadPersonal
    updateLeader({state, dispatch}, data) {
      return new Promise( (resolve, reject) => {
        let url = `/corporation/updLeadPersonal`;
        let methods = 'post';
        fx.setConnect({url, methods, data})
        .then(res => {
          resolve(1);
          dispatch('getLeaderList');
        }).catch(err => {

        })
      })
    },
    // 领导信息查询/corporation/getLeadPersonalPage


    getLeaderList({state, commit}, page) {
      if(!page) {
        page = state.page;
      }else{
        state.page = page;
      }
      let url = `/corporation/getLeadPersonalPage?corpId=${page.corpId}`
      +`departmentId=${departmentId}&pageSize=${page.pageSize}`
      +`&pageNum=${page.currentPage}&nameOrPhone=${page.nameOrPhone}` ;
      fx.setConnect({url})
      .then(res => {
        commit('set_LeaderList', res.data.data);
        page.total = res.data.data.total * 1;
      }).catch(err => {

      })
    },
  }
}
export default corporation
