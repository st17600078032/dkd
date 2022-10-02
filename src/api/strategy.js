import request from '@/utils/request'

export function getVms() {
  return request({
    url: '/vm-service/policy'
  })
}

// 新增策略
export function addVms(data) {
  return request({
    url: '/vm-service/policy',
    method: 'POST',
    data
  })
}
