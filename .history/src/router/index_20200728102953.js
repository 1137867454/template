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
  // 设置页面title，使之根据路由跳转而改变
  document.title = i18n.t(to.meta.title);
  // console.log(asyncRouterMap)
  // console.log('next')
  // 是否含有Token凭证
  if (localStorage.getItem('token')){
    // 是否加载权限路由
    if(!store.getters.getUser.role) {
      // 未加载时的路由加载异步请求
      store.dispatch('addRouter').then(() =>{
        // 加载成功后的路由跳转
        next({path: to.path});
      })
    } else {
      // 已加载路由，即处于登录状态
      if(to.path == '/login') {
        // 强制跳转主页，避免重复登录，路由重复
        next('/')
      }else{
        console.log(to)
        next();
      }
    }
  } else if(whiteList.includes(to.path)) {
    // 路由是否属于白名单
    next();
  } else {
    console.log('else')
    next({path: '/login'})
  }
})
export default router
