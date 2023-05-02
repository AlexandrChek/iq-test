import { createRouter, createWebHashHistory } from 'vue-router'
import StartView from '../views/StartView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: StartView
  },
  {
    path: '/test/:id',
    component: () => import('../views/TestView.vue')
  },
  {
    path: '/processing',
    name: 'processing',
    component: () => import('../views/ResultsProcessing.vue')
  },
  {
    path: '/result',
    name: 'result',
    component: () => import('../views/ResultView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.NODE_ENV),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if(to.hash) {
      return {selector: to.hash}
    } else {
      return {top: 0}
    }
  }
})

export default router
