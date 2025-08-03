import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Main from '@/views/Main.vue'
import Hero from '@/components/main/Hero.vue'
import Upcoming from '@/components/main/Upcoming.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '',
        name: 'Hero',
        component: Hero
      },
      {
        path: '/upcoming',
        name: 'Upcoming',
        component: Upcoming
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
