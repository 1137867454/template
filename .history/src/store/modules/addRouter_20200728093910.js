// 引入动态路由表
import { asyncRouterMap } from '../../router/asyncRouterMap'
// 引入router实例
import router from '../../router/index'
// 引入localStorage方法
import { setItem, getItem, removeItem } from '../../utils/token'
// import fx from '../../util/fx'
const addRouter = {
  state: {
    asyncRouterMap_: {},
    asyncRouterMap: asyncRouterMap,
    user: {
      role: '',
      type: '',
    },
    activeIndex: '1',
  },
  getters: {
    // getRouter: state => state.asyncRouterMap_,
    // getUser: state => state.user,
    getUser: (state) => state.user,
    // get_activeIndex: state => state.activeIndex
  },
  mutations: {
    set_activeIndex({ state },route) {
      state.user = 'route';
    },
    set_user(state, user) {
      state.user.role = user;
    },
  },
  actions: {
    // 添加路由（权限路由）
    addRouter({state, dispatch, commit}) {
      return new Promise( (resolve, reject) => {
        /**
         * Ps：按理说应该后台直接给一个完整的路由表
         * 
         **/
        
        // console.log('addRouter')
        state.user.role = 'user';
        // console.log(router)
        // console.log(asyncRouterMap);
        // 后台传递的所有的路由分支
        let branch = JSON.parse(getItem('branch'));
        console.log(branch)
        // 角色权限（该角色下所对应的路由）
        let roleArr = [];
        // 操作权限列表（eg：增、删、改、查）
        let permissionArr = [];
        branch = branch.filter(v => {
          // console.log(v)
          // 有nodeId 的是二级路由，借此为筛选条件
          if(v.nodeId) {
          // 二级路由列表['user', 'device']等
            roleArr.push(v.permission)
            return v.nodeId;
          }else{
            // 操作权限添加 eg：["user:add", "user:del", "role:upd",]
            permissionArr.push(v.permission)
          }
        })
        // 操作权限列表写入写入localStorage
        setItem('permissionArr',JSON.stringify(permissionArr))
        // console.log('permissionArr');
        // console.log(permissionArr);
        console.log(asyncRouterMap)
        // 路由整合过滤
        state.asyncRouterMap.filter(r => {
          // 通过filter循环过滤出符合权限的二级路由
          r.children = r.children.filter(v => {
            // menu包含所有的roleArr中数据
            // 筛选出包含的路由列表
            if(roleArr.includes(v.menu)){
              // 向$route中注入对应的权限
              v.meta.arr = []
              permissionArr.forEach(per => {
                // console.log(per)
                per.includes(v.menu)?v.meta.arr.push(per.slice(per.indexOf(':') + 1)): '';
              })
              // console.log(v)
              return v;
            }
          })
        })
        // console.log(branch)
        // console.log(roleArr)
        console.log(state.asyncRouterMap)
        router.addRoutes(state.asyncRouterMap)
        // commit('set_user', 'user')
        // console.log(router)
        resolve(1);
      })
    }
  }
}
export default addRouter
