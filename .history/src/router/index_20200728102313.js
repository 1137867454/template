import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home/Home.vue'
import Home from '../views/Home/Home'
import store from '../store/index'
import i18n from '../lang'
import {asyncRouterMap} from './asyncRouterMap'
import anime from 'vue-animejs';
Vue.prototype.$anime = anime;
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
// VueRouter.prototype.$addRoutes = (params) => {
//   VueRouter.matcher = new Router({mode: 'history'}).matcher;
//   VueRouter.addRoutes(params)
// };
Vue.use(anime)
// 设置路由白名单
const whiteList = ['/admin_login','/login']
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home/Home'),
    redirect:'/nav',
    children: [{
      path: 'nav',
      name: 'nav',
      meta: { title: 'm.router.home'},
      component: () => import('../views/Home/navigator')
    }]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/admin_login',
    name: 'admin_login',
    meta: { title: '登陆界面'},
    component: () => import('../views/login/admin_login')
  },
  {
    path: '/login',
    name: 'login',
    meta: { title: 'm.router.login'},
    component: () => import('../views/login/login')
  },
  {
    path: '/h',
    name: 'h',
    component: Home
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404/404')   
  }]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 在路由守卫启动前先对语言类型进行处理
let locale = localStorage.getItem('locale');
if(locale) {
  i18n.locale = locale;
}
// router.addRoutes(asyncRouterMap)
router.beforeEach((to, from, next ) => {
  // next();
  // console.log(i18n.t(to.meta.title))
  // console.log(to.meta.title)
  document.title = i18n.t(to.meta.title);
  // console.log(asyncRouterMap)
  // console.log('next')
  if (localStorage.getItem('token')){
    if(!store.getters.getUser.role) {
      store.dispatch('addRouter').then(() =>{
        next({path: to.path});
      })
    } else {
      if(to.path == '/login') {
        next('/')
      }else{
        console.log(to)
        next();
      }
    }
  } else if(whiteList.includes(to.path)) {
    next();
  } else {
    console.log('else')
    next({path: '/login'})
  }
  
})
export default router
