import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

export const Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
