/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios'
import router from '../router/index'
// 创建axios实例
const instance = axios.create({
  // baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 15 * 1000
})
instance.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8'

/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.token
    token && (config.headers.token = token)
    return config
  },
  (error) => Promise.error(error)
)

// 响应拦截器
instance.interceptors.response.use(
  // 请求成功
  (response) => {
    return response.status === 200
      ? Promise.resolve(response)
      : Promise.reject(response)
  },
  // 请求失败
  (error) => {
    const { response } = error
    if (response) {
      return Promise.reject(response)
    } else {
      //   store.commit('changeNetwork', false);
    }
  }
)

export default {
  install(app) {
    app.config.globalProperties.$http = instance
  }
}
