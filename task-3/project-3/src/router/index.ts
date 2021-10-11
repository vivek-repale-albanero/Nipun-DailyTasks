import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/letter',
    name: 'Letter',
    component: () => import('../views/Letter.vue')
  },
  {
    path: '/cv',
    name: 'Cv',
    component: () => import('../views/Cv.vue')
  },
  {
    path: '/invoice',
    name: 'Invoice',
    component: () => import('../views/Invoice.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
