import Vue from 'vue'
import Router from 'vue-router'

/* Layout */
// import Layout from '@/components/HelloWorld'
import Layout from '@/views/layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Layout
    }
  ]
})
