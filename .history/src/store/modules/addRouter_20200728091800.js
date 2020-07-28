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
    set_router ({ state, rootstate }) {
      // console.log('addRouter')
      router.addRoutes(asyncRouterMap_)
    },
    set_activeIndex({ state },route) {
      state.user = 'route';
    },
    set_user(state, user) {
      state.user.role = user;
    },
  },
  actions: {
    // 添加路由
    addRouter({state, dispatch, commit}) {
      return new Promise( (resolve, reject) => {
        // console.log('addRouter')
        state.user.role = 'user';
        // console.log(router)
        // console.log(asyncRouterMap);
        
        let branch = JSON.parse(getItem('branch'));
        console.log(branch)
        let roleArr = [];
        let permissionArr = [];

        branch = branch.filter(v => {
          // console.log(v )
          if(v.nodeId) {
            roleArr.push(v.permission)
            return v.nodeId;
          }else{
            permissionArr.push(v.permission)
          }
        })
        setItem('permissionArr',JSON.stringify(permissionArr))
        // console.log('permissionArr');
        // console.log(permissionArr);
        console.log(asyncRouterMap)
        state.asyncRouterMap.filter(r => {
          r.children = r.children.filter(v => {
            if(roleArr.includes(v.menu)){
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
        commit('set_user', 'user')
        // console.log(router)
        resolve(1);
      })
    }
  }
}
export default addRouter
