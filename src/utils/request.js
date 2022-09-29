import axios from 'axios'
import store from '@/store'

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
request.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers.Authorization = `${store.getters.token}`
  }
  return config
}, error => {
  return Promise.reject(error)
})

// // 响应拦截器
// request.interceptors.response.use(response => {
//   const { message, data, success } = response.data
//   if (success) {
//     return data
//   }
//   Message.error(message)
//   return Promise.reject(new Error(message))
// }, error => {
//   if (error.response && error.response.status === 401) {
//     store.dispatch('user/logout')
//     router.push('/login')
//     Message.error('登录过期')
//   } else {
//     Message.error(error.message)
//   }
//   return Promise.reject(error)
// })

export default request

