import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import LetterTemplate from '../views/Modules/LetterTemplate.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/Letter',
    name:'LetterTemplate',
    component:LetterTemplate
  },
  
]

const router = new VueRouter({
  routes
})

export default router
