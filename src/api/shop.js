import request from '@/utils/request'

// 商品类型列表
export function getSkuClass() {
  return request({
    url: '/vm-service/skuClass/search',
    methods: 'GET',
    params: {
      pageIndex: 1,
      pageSize: 100
    }
  })
}

// 新增商品类型
export function addSkuClass(data) {
  return request({
    url: '/vm-service/skuClass',
    method: 'POST',
    data
  })
}

// 删除商品类型
export function delSkuClass(classId) {
  return request({
    url: `/vm-service/skuClass/${classId}`,
    method: 'DELETE'
  })
}

// 修改商品类型
export function reviseClass(data) {
  return request({
    url: `/vm-service/skuClass/${data.classId}`,
    method: 'PUT',
    data
  })
}

