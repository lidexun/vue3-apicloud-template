// 引入依赖
import { createRouter, createWebHashHistory } from 'vue-router'

import autoRouter from 'vue-router-auto'
// 根据文件系统生成路由地址
let routes = autoRouter({
  // 页面级的.vue存放位置，必传
  rc: require.context('@/pages', true, /\.vue$/),
  // '/'的重定向，可选，默认为''
  redirect: '/main',
  // 页面级的.vue存放的文件夹，可选，默认为:views
  rootFile: 'pages'
})
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
