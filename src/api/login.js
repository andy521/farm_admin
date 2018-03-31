import request from '@/utils/request'

export function loginByUsername (data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function logout () {
  return request({
    url: '/logout',
    method: 'post'
  })
}

export function getUserInfo () {
  return request({
    url: '/info',
    method: 'get'
  })
}
