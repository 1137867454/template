import Home from '../views/Home/Home'
import eg1 from '../views/user/eg1'
export const asyncRouterMap = [{
  path: '/example',
  name: 'example',
  component: Home,
  meta: { title: '系统管理', icon: 'el-icon-user-solid el' },
  menu: ['user'],
  children: [{
    path: 'eg1',
    name: 'eg1',
    component: eg1,
    meta: { title: '示例1', icon: 'el-icon-guide el'},
    menu: ['user']
  },
  {
    path: 'eg2',
    name: 'eg2',
    component: () => import("../views/user/eg2"),
    meta: { title: '示例2', icon: 'el-icon-edit el'},
    menu: ['user']
  },
  {
    path: 'star',
    name: 'star',
    component: () => import("../views/user/star"),
    meta: { title: '星星', icon: 'el-icon-set-up el'},
    menu: ['user']
  }]
},
  {
    path: '/admin',
    name: 'admin',
    component: Home,
    meta: { title: '用户管理', icon: 'el-icon-s-tools el' },
    menu: ['admin'],
    children: [{
      path: 'eg1',
      name: 'ad1',
      component: () => import('../views/admin/eg1'),
      meta: { title: '示例1', icon: 'el-icon-loading el'},
      menu: ['admin']
    },
    {
      path: 'eg2',
      name: 'ad2',
      component: () => import("../views/admin/eg2"),
      meta: { title: '示例2', icon: 'el-icon-paperclip el'},
      menu: ['admin']
    },
    {
      path: 'star2',
      name: 'star',
      component: () => import("../views/admin/star"),
      meta: { title: '星星', icon: 'el-icon-bangzhu el'},
      menu: ['admin']
    }
  ]
},
{
  path: '/visitor',
  name: 'visitor',
  component: Home,
  meta: { title: '设备管理', icon: 'el-icon-bangzhu  el' },
  menu: ['visitor'],
  children: [{
    path: 'visitor1',
    name: 'visitor1',
    component: () => import('../views/visitor/visitor1'),
    meta: { title: '访问1', icon: 'el-icon-set-up'},
    menu: ['visitor']
  }]
}]