import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import addRouter from './modules/addRouter'
import { asyncRouterMap } from '../router/asyncRouterMap'
import router from '../router/index'
import { setItem, getItem, removeItem } from '../utils/token'
import api from '../utils'
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
    login({ state }, user) {
      return new Promise((resolve, reject) => {
        state.user.role = 'user';
        setItem('token', '11123133');
        if(!getItem('theme')) {
          setItem('theme', '#409eff');
        }
        

        resolve(1);
      })
    },
    // 添加路由
    addRouter({state, commit}) {
      return new Promise( (resolve, reject) => {
        console.log(router)
        console.log(asyncRouterMap)
        router.addRoutes(state.asyncRouterMap)
        commit('set_user', 'user')
        console.log(router)
        resolve(1);
      })
    },
    // 添加面包屑
    addBreadCrumb({ state, commit }, bread) {
      console.log('breadCrumb');
      commit('set_breadList', bread)
      
    },
    removeLogin({state}) {
      removeItem('token');
      this.breadList = [];
      console.log('removeLoginStatus')
    }
  },
  modules: {
    addRouter

  }
})
