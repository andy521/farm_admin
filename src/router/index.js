import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)

/* Layout */
import Layout from '@/views/layout/Layout'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    component: Layout
  },
  {
    path: '/index',
    component: _import('info/index')
  },
  {
    path: '/login',
    component: _import('login/index')
  },
  {
    path: '/users',
    component: _import('users/index')
  },
  {
    path: '*',
    component: _import('404/index')
  }
]

export default new Router({
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})
