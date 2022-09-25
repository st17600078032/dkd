import request from '@/utils/request'

export function imageCode(clientToken) {
  return request({
    url: `/user-service/user/imageCode/${clientToken}`,
    method: 'GET'
  })
}

export function login(data) {
  return request({
    url: '/user-service/user/login',
    method: 'POST',
    data
  })
}
