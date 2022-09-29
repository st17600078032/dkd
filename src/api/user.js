import request from '@/utils/request'

export function getUserInfo(id) {
  return request({
    url: `user-service/user/${id}`,
    method: 'GET'
  })
}
