import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Main from '@/views/Main.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/main',
    name: 'Main',
    component: Main
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
