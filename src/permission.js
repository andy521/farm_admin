import router from './router'
import NProgress from 'nprogress'
import store from './store'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login', '/404']

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      // 拉取 用户信息
      if (store.getters.userName.length === 0) {
        store.dispatch('GetUserInfo').then(() => {
        }).catch(() => {
        })
      }
      // 拉取 菜单信息
      if (store.getters.permission_routers.length === 0) {
        store.dispatch('GenerateRoutes').then(() => {
          // 判断权限
          if (store.getters.permission_routers.some(item => to.path === item.resourceUrl)) {
            next()
          } else {
            next('/404')
          }
        })
      } else {
        next()
        NProgress.done()
      }

      //   }).catch(() => {
      //   })
      // } else {
      //   // 判断权限
      //   if (store.getters.permission_routers.some(item => to.path === item.resourceUrl)) {
      //     next()
      //   } else {
      //     if (whiteList.indexOf(to.path) !== -1) {
      //       next()
      //     } else {
      //       next('/404')
      //     }
      //   }
      // }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
