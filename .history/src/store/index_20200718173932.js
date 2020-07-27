import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import addRouter from './modules/addRouter'
import system from './modules/system'
import device from './modules/device'
import corporation from './modules/corporation'
import attendence from './modules/attendence'
import file from './modules/file'
import { asyncRouterMap } from '../router/asyncRouterMap'
import router from '../router/index'
import { setItem, getItem, removeItem } from '../utils/token'
import api from '../utils/api';
import fx from '../utils/fx';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    asyncRouterMap: asyncRouterMap, //动态路由列表
    authorization: '',   //登录后获取的token信息，请求凭证
    user: {
      role: ''           //登录者的角色，即管理权限
    },
    breadList: [],
    theme: ''
  },
  getters,
  mutations: {
    set_user(state, user) {
      state.user.role = user;
    },
    addRouter(state) {
      state.asyncRouterMap = asyncRouterMap;
      router.addRoutes(state.asyncRouterMap)
    },
    set_breadList(state, bread) {
      console.log(state.breadList)
      let flag = state.breadList.find(v => {
        console.log(v.path)
        console.log(bread.path);
        return v.path == bread.path;
      })
      console.log(flag);
      if(!flag){
        state.breadList.push(bread);
      }
    },
    delete_breadList(state, i) {
      console.log(i)
      state.breadList.splice(i, 1); 
      console.log(state.breadList);
    },
    themeChange(state, theme) {
      state.theme = theme;
      setItem('theme', theme);
    }
  },
  actions: {
    // 登录状态
    login({ state, dispatch }, user) {
      return new Promise((resolve, reject) => {
        // setItem('token', '11123133');
        if(!getItem('theme')) {
          setItem('theme', '#5ab3ff');
        }
        // resolve(1);
        api({
          url: '/login',
          method: 'post',
          data: user
        }).then(res => {
          console.log(res)
          let data  = res.data.data;
          setItem('token', data.token);
          setItem('name', data.name);
          setItem('username', data.userName);
          dispatch('getUserRole')
          // data中还有用户名， 账户使用状态。
          dispatch('getCatalogue');
          resolve(1);
        }).catch(err => {
          console.log(err)
        })
      })
    },
    // 加载目录 get /system/getCatalogue
    getCatalogue({}) {
      let url = '/system/getCatalogue';
      fx.setConnect({url})
      .then(res => {
        // res.data.data.forEach(v => {
        //   v.id = v.id * 100;
        // })
        setItem('catalogue', JSON.stringify(res.data.data));
      })
    },
    // 权限列表获取
    async getUserRole({state}) {
      let url = '/getUserRole';
      let method = 'post';
      fx.setConnect({url, method})
      .then(res => {
        console.log(res);
        localStorage.setItem('branch', JSON.stringify(res.data.data))
      })
    },
    // 添加路由
    // addRouter({state, commit}) {
    //   return new Promise( (resolve, reject) => {
    //     state.user.role = 'user';
    //     console.log(router)
    //     console.log(asyncRouterMap)
    //     router.addRoutes(state.asyncRouterMap)
    //     commit('set_user', 'user')
    //     console.log(router)
    //     resolve(1);
    //   })
    // },
    // 添加面包屑
    addBreadCrumb({ state, commit }, bread) {
      console.log('breadCrumb');
      commit('set_breadList', bread)
      
    },
    //密码修改
    updatePassword({state}, user) {
      api.post({
        
      })
    },
    removeLogin({state}) {
      removeItem('token');
      removeItem('token');
      removeItem('name')
      removeItem('username')
      removeItem('branch')
      removeItem('tree')
      removeItem('catalog')
      this.breadList = [];
      console.log('removeLoginStatus')
    }
  },
  modules: {
    file,
    system,
    device,
    addRouter,
    attendence,
    corporation
  }
})
