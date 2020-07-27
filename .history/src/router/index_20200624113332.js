import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import store from '../store/index'
import {asyncRouterMap} from './asyncRouterMap'
import anime from 'vue-animejs';
Vue.prototype.$anime = anime;
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
Vue.use(anime)
const whiteList = ['/admin_login']
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect:'/nav',
    children: [{
      path: 'nav',
      name: 'nav',
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
    component: () => import('../views/login/admin_login')
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

// router.addRoutes(asyncRouterMap)
router.beforeEach((to, from, next ) => {
  console.log(asyncRouterMap)
  console.log('next')
  if (localStorage.getItem('token')){
    if(!store.getters.getUser.role) {
      store.dispatch('addRouter').then(() =>{
        next({path: to.path});
      })
    } else {
      next();
    }
  } else if(whiteList.includes(to.path)) {
    next();
  } else {
    console.log('else')
    next({path: '/admin_login'})
  }
  
})
export default router
