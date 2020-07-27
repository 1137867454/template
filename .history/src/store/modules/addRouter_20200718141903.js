import { asyncRouterMap } from '../../router/asyncRouterMap'
import router from '../../router/index'
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
    get_activeIndex: state => state.activeIndex
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
    set_router ({ state, rootState, dispatch }) {
      return new Promise( (resolve, reject) =>{
        console.log('addRouter')
        state.asyncRouterMap_ = asyncRouterMap;
        let addrouter = state.asyncRouterMap_;
        state.user.role = rootState.role;
        if(state.user.role == 'teacher' || state.user.role == 'student'){
          addrouter.forEach((v, i) => {
            if(v.menu.includes('teacher')){
              v.children = v.children.filter(vc => {
                return !vc.menu;
              })
            }
          })
        }
        
        state.asyncRouterMap_ = addrouter.filter(v => {
          return v.menu.includes(rootState.role);
        })
        router.addRoutes(state.asyncRouterMap_);
        resolve(1);
      })
    },
    // 添加路由
    addRouter({state, commit}) {
      return new Promise( (resolve, reject) => {
        console.log('addRouter')
        state.user.role = 'user';
        console.log(router)
        console.log(asyncRouterMap)
        console.log(getItem('branch'))
        router.addRoutes(state.asyncRouterMap)
        commit('set_user', 'user')
        console.log(router)
        resolve(1);
      })
    }
  }
}
export default addRouter
