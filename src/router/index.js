import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Lozy from '../views/Lozy.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/lozy', name: 'Lozy', component: Lozy }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router