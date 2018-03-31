import request from '@/utils/request'

export function getAsyncRouter () {
  return request({
    url: '/resources/menu',
    method: 'get'
  })
}
