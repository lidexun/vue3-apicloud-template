import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: 'main'
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/main/index.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
