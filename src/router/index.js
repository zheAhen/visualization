import { createRouter, createWebHashHistory } from 'vue-router'
import HHHH from '../views/home.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/about',
    name: 'about',
    component: HomeView
  },
  {
    path: '/',
    name: 'home',
    component: HHHH
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
