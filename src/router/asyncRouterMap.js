// import account from '../views/system/account'
// let h = () => import('../views/Home/Home');
// let Home = h();
// console.log(h)
// console.log(Home)
// import homes from '../views/Home/Home'
// let Home = require.context('../views/Home/Home')
// import Home from '../views/Home/Home'
// title项命名为Vue-$i8n lang 中的键值, 为路由语言切换提供支持。
// console.log(homes);
import home from '@/views/Home/Home'
console.log(home)
// import {router} from './index'
// console.log(router)
export const asyncRouterMap = [{
  path: '/system',
  name: 'system', 
  // 路由懒加载
  component: () => import('@/views/Home/Home'),
  meta: { title: 'm.router.systemManage', icon: 'el-icon-user-solid el' },
  menu: ['system'],
  children: [{
    path: 'account',
    name: 'account',
    component: () => import("../views/system/account"),
    meta: { title: 'm.router.account', icon: 'el-icon-guide el'},
    menu: 'user'
  },
  {
    path: 'role',
    name: 'role',
    component: () => import("../views/system/role"),
    meta: { title: 'm.router.role', icon: 'el-icon-edit el'},
    menu: 'role'
  },
  {
    path: 'log',
    name: 'log',
    component: () => import("../views/system/log"),
    meta: { title: 'm.router.log', icon: 'el-icon-document el'},
    menu: 'log'
  },
  {
    path: 'manage',
    name: 'manage',
    component: () => import("../views/system/manage"),
    meta: { title: 'm.router.manage', icon: 'el-icon-document el'},
    menu: 'manage'
  },
  {
    path: 'star',
    name: 'star1',
    component: () => import("../views/system/star"),
    meta: { title: '星星', icon: 'el-icon-set-up el'},
    menu: ''
  }]
},
{
  path: '/corporation',
  name: 'corporation',
  component: () => import('@/views/Home/Home'),
  meta: { title: 'm.router.school', icon: 'el-icon-menu el'},
  children: [{
    path: 'manage',
    name: 'manage',
    meta: { title: 'm.router.school', icon: 'el-icon-s-flag el'},
    component: () => import('../views/corporation/manage'),
    menu: 'corporation'
  },
  {
    path: 'department',
    name: 'department',
    meta: { title: 'm.router.class', icon: 'el-icon-s-help el'},
    component: () => import('../views/corporation/department'),
    menu: 'department'
  },
  {
    path: 'leader',
    name: 'leader',
    meta: { title: 'm.router.teacher', icon: 'el-icon-s-custom el'},
    component: () => import('../views/corporation/leader'),
    menu: 'leader'
  },
  {
    path: 'staff',
    name: 'staff',
    meta: { title: 'm.router.student', icon: 'el-icon-user-solid el'},
    component: () => import('../views/corporation/staff'),
    menu: 'staff'
  }
  // {
  //   path: 'attendance',
  //   name: 'attendance',
  //   meta: { title: '考勤管理', icon: 'el-icon-date el'},
  //   component: () => import('../views/corporation/attendance'),
  //   menu: 'attendance'
  // }
]
},
  {
    path: '/check',
    name: 'check',
    component: () => import('@/views/Home/Home'),
    meta: { title: 'm.router.attendanceManage', icon: 'el-icon-s-tools el' },
    // menu: ['admin'],
    children: [{
      path: 'attendance',
      name: 'ad1',
      component: () => import('../views/check/attendance'),
      meta: { title: 'm.router.attendance', icon: 'el-icon-date el'},
      menu: 'attendance'
    },{
      path: 'eg1',
      name: 'ad1',
      component: () => import('../views/check/eg1'),
      meta: { title: '示例1', icon: 'el-icon-loading el'},
      menu: ['admin']
    },
    {
      path: 'eg2',
      name: 'ad2',
      component: () => import("../views/check/eg2"),
      meta: { title: '示例2', icon: 'el-icon-paperclip el'},
      menu: ['admin']
    },
    {
      path: 'star2',
      name: 'star',
      component: () => import("../views/check/star"),
      meta: { title: '星星', icon: 'el-icon-bangzhu el'},
      menu: ['admin']
    }
  ]
},
{
  path: '/deviceManage',
  name: 'deviceManage',
  component: () => import('@/views/Home/Home'),
  meta: { title: 'm.router.deviceManage', icon: 'el-icon-set-up  el' },
  children: [{
    path: 'device',
    name: 'device',
    component: () => import('../views/device/device'),
    meta: { title: 'm.router.device', icon: 'el-icon-s-operation'},
    menu: 'device'
  }]
}]
