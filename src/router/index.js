import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/firebase/config'

import Home from '@/views/Home.vue'
import Main from '@/views/Main.vue'
import Hero from '@/components/main/Hero.vue'
import Upcoming from '@/components/main/Upcoming.vue'
import Login from '@/views/auth/Login.vue'
import Signup from '@/views/auth/Signup.vue'
import Today from '@/components/main/Today.vue'
import Calendar from '@/components/main/Calendar.vue'
import NewTask from '@/components/main/NewTask.vue'

const requireAuth = (to, from, next) => {
  let user = auth.currentUser
  if(!user) next({name: 'Login'})
    else next()
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
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
      {
        path: '/today',
        name: 'Today',
        component: Today
      },
      {
        path: '/calendar',
        name: 'Calendar',
        component: Calendar
      },
      {
        path: '/new',
        name: 'NewTask',
        component: NewTask
      },
    ],
    beforeEnter: requireAuth
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
