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
import { resolve } from 'core-js/fn/promise'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    asyncRouterMap: asyncRouterMap, //动态路由列表
    authorization: '',   //登录后获取的token信息，请求凭证
    user: {
      role: ''           //登录者的角色，即管理权限
    },
    breadList: [],       //面包屑列表
    theme: ''            //主题
  },
  getters,
  mutations: {
    // set_user(state, user) {
    //   state.user.role = user;
    // },
    // addRouter(state) {
    //   state.asyncRouterMap = asyncRouterMap;
    //   router.addRoutes(state.asyncRouterMap)
    // },
    set_breadList(state, bread) { //同步请求设置面包屑
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
    async login({ state, dispatch }, user) {
      let url = '/login',
          methods = 'post',
          data = user;
      if(!getItem('theme')) {
        setItem('theme', '#0E80F7');
      }
      await fx.setConnect({url, methods, data})
      .then(res => {
        let data  = res.data.data;
          setItem('token', data.token);
          setItem('name', data.name);
          setItem('username', data.userName);
      })
      console.log('login.....');
      url = '/system/getCatalogue';
      await fx.setConnect({url})
      .then(res => {
        setItem('catalogue', JSON.stringify(res.data.data));
      })
      url = '/getUserRole';
      await fx.setConnect({url})
      .then(res => {
        console.log(res);
        localStorage.setItem('branch', JSON.stringify(res.data.data))
      })
      // await dispatch('getCatalogue')
      // await dispatch('getUserRole')
      // return new Promise((resolve, reject) => {
      //   // setItem('token', '11123133');
      //   if(!getItem('theme')) {
      //     setItem('theme', '#5ab3ff');
      //   }
      //   // resolve(1);
      //   await api({
      //     url: '/login',
      //     method: 'post',
      //     data: user
      //   }).then(res => {
      //     console.log(res)
      //     let data  = res.data.data;
      //     setItem('token', data.token);
      //     setItem('name', data.name);
      //     setItem('username', data.userName);
      //     dispatch('getUserRole')
      //     // data中还有用户名， 账户使用状态。
      //     dispatch('getCatalogue');
      //     resolve(1);
      //   }).catch(err => {
      //     console.log(err)
      //   })
      // })
    },
    // 加载目录 get /system/getCatalogue
    getCatalogue({}) {
      let url = '/system/getCatalogue';
      fx.setConnect({url})
      .then(res => {
        setItem('catalogue', JSON.stringify(res.data.data));
      })
    },
    // 权限列表获取
    getUserRole({state}) {
      let url = '/getUserRole';
      let method = 'post';
      fx.setConnect({url, method})
      .then(res => {
        console.log(res);
        localStorage.setItem('branch', JSON.stringify(res.data.data))
      })
    },
    // 添加面包屑
    addBreadCrumb({ state, commit }, bread) {
      console.log('breadCrumb');
      commit('set_breadList', bread)
      
    },
    // 修改当前登录用户密码 post /userPasswordUpd

    updatePassword({state}, data) {
      return new Promise((resolve, reject) => {
        let url = `/userPasswordUpd`;
        let methods = 'post';
        // fx.setConnect({url, methods, data})
        // .then(res => {
        //   console.log(res)
        //   resolve();
        // }).catch(err => {
        //   console.log(err)
        // })
      })
    },
    removeLogin({state}) {
      removeItem('token');
      removeItem('name')
      removeItem('username')
      removeItem('branch')
      removeItem('tree')
      removeItem('catalogue')
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
