import request from '@/utils/request'

export function getVms() {
  return request({
    url: '/vm-service/policy'
  })
}
