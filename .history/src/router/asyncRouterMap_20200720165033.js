import Home from '../views/Home/Home'
export const asyncRouterMap = [{
  path: '/system',
  name: 'system',
  component: Home,
  meta: { title: '系统管理', icon: 'el-icon-user-solid el' },
  menu: ['system'],
  children: [{
    path: 'username',
    name: 'username',
    component: () => import("../views/system/username"),
    meta: { title: '账号管理', icon: 'el-icon-guide el'},
    menu: 'user'
  },
  {
    path: 'role',
    name: 'role',
    component: () => import("../views/system/role"),
    meta: { title: '角色管理', icon: 'el-icon-edit el'},
    menu: 'role'
  },
  {
    path: 'log',
    name: 'log',
    component: () => import("../views/system/log"),
    meta: { title: '日志管理', icon: 'el-icon-document el'},
    menu: 'log'
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
  component: Home,
  meta: { title: '公司管理', icon: 'el-icon-menu el'},
  children: [{
    path: 'manage',
    name: 'manage',
    meta: { title: '公司管理', icon: 'el-icon-s-flag el'},
    component: () => import('../views/corporation/manage'),
    menu: 'corporation'
  },
  {
    path: 'department',
    name: 'department',
    meta: { title: '部门管理', icon: 'el-icon-s-help el'},
    component: () => import('../views/corporation/department'),
    menu: 'department'
  },
  {
    path: 'leader',
    name: 'leader',
    meta: { title: '领导管理', icon: 'el-icon-s-custom el'},
    component: () => import('../views/corporation/leader'),
    menu: 'leader'
  },
  {
    path: 'staff',
    name: 'staff',
    meta: { title: '员工管理', icon: 'el-icon-user-solid el'},
    component: () => import('../views/corporation/staff'),
    menu: 'staff'
  },
  {
    path: 'attendance',
    name: 'attendance',
    meta: { title: '考勤管理', icon: 'el-icon-date el'},
    component: () => import('../views/corporation/attendance'),
    menu: 'attendance'
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
  path: '/device',
  name: 'device',
  component: Home,
  meta: { title: '设备管理', icon: 'el-icon-set-up  el' },
  children: [{
    path: 'device',
    name: 'device',
    component: () => import('../views/device/device'),
    meta: { title: '设备管理', icon: 'el-icon-s-promotion'},
    menu: 'device'
  }]
}]