import { createRouter, createWebHistory } from 'vue-router'
import Messages from '../views/Messages.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Messages
    }
  ]
})

export default router
