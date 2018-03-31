import axios from 'axios'
import { getToken } from '@/utils/auth'

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000
})

service.interceptors.request.use(config => {
  config.headers['authorization'] = getToken()
  return config
}, error => {
  Promise.reject(error)
})

service.interceptors.response.use(response => {
  if (process.env.NODE_ENV === 'development') {
    return response.data
  }
  return response
}, error => {
  return Promise.reject(error)
})

export default service
