import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/BackstageManager/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()
  // console.log(to)
  // set page title
  document.title = getPageTitle(to.meta.title)
  // console.log(to)
  // console.log(/(BackstageManager)/.test(to.fullPath))
  // determine whether the user has logged in
  // 后台校验管理员状态
  // if (/(BackstageManager)/.test(to.fullPath)) {
  if (/(BackstageManager)/.test(to.fullPath)) {
    const hasToken = getToken()
    if (hasToken) {
      // console.log(hasToken)
      if (to.path === '/login') {
        // if is logged in, redirect to the home page
        next({ path: '/' })
        NProgress.done()
      } else {
        const hasGetUserInfo = store.getters.name
        // const isAdmin = store.getters.roles
        if (hasGetUserInfo) {
          next()
        } else {
          try {
            // get user info
            await store.dispatch('admin/getInfo')
            next()
          } catch (error) {
            // remove token and go to login page to re-login
            await store.dispatch('admin/resetToken')
            Message.error(error || 'Has Error')
            next(`/login?redirect=${to.path}`)
            NProgress.done()
          }
        }
      }
    } else {
      /* has no token*/

      if (whiteList.indexOf(to.path) !== -1) {
        // console.log(to.path)
        // console.log(whiteList)
        // in the free login whitelist, go directly
        next()
      } else {
        // other pages that do not have permission to access are redirected to the login page.
        // next(`/BackstageManager/login?redirect=${to.path}`)
        // next(`/BackstageManager/login?redirect=${to.path}`)
        next(`/login?redirect=${to.path}`)
        NProgress.done()
      }
    }
  } else {
    const hasToken = getToken()
    if (hasToken) {
      await store.dispatch('admin/getInfo')
    }
    next()
    NProgress.done()
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
