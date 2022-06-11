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
    path: '/sort',
    name: 'sort',
    component: () => import('../views/sort/index.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/cart/index.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/user/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
