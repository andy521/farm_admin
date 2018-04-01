import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)

/* Layout */
import Layout from '@/views/layout/Layout'
// import Layout from '@/views/layout/index'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/login',
    component: _import('login/index')
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: '/dashboard',
        component: _import('dashboard/index')
      },
      {
        path: '/users',
        component: _import('users/index')
      },
      {
        path: '/resources',
        component: _import('resources/index')
      },
      {
        path: '/roles',
        component: _import('roles/index')
      },
      {
        path: '*',
        component: _import('errorPage/404')
      }
    ]
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
