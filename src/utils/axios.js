/**
 * axios封装请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios'
import { Toast } from 'vant'
// 创建axios实例
var instance = axios.create({ timeout: 1000 * 15 })
// 可以根据apicloud api.debug判断
instance.defaults.baseURL = VUE_APP_API
// 设置post请求头
instance.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'
/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
instance.interceptors.request.use(
  (config) => {
    // 登录流程控制中，根据本地是否存在token判断用户的登录情况
    // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
    // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
    // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。
    // 自行配置
    const token = '123'
    token && (config.headers.token = token)
    return config
  },
  (error) => Promise.error(error)
)

// 响应拦截器
instance.interceptors.response.use(
  // 请求成功
  (res) => {
    if (!res.data.data) {
      Toast(res.data.message)
      return Promise.reject()
    }
    return res.data
  },
  // 请求失败
  (error) => {
    const { response, message } = error
    Toast(message)
    if (response) {
      // 请求已发出，但是不在2xx的范围
      return Promise.reject(response)
    } else {
      if (!window.navigator.onLine) {
      } else {
        return Promise.reject(error)
      }
    }
  }
)

export default instance
