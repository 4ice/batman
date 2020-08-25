import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a74227a6 = () => interopDefault(import('../pages/batteries/index.vue' /* webpackChunkName: "pages/batteries/index" */))
const _352415d5 = () => interopDefault(import('../pages/batteries/_id.vue' /* webpackChunkName: "pages/batteries/_id" */))
const _fb5a72de = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/batteries",
    component: _a74227a6,
    name: "batteries"
  }, {
    path: "/batteries/:id",
    component: _352415d5,
    name: "batteries-id"
  }, {
    path: "/",
    component: _fb5a72de,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
