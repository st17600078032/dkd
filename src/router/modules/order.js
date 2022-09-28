import Layout from '@/layout'

export default {
  path: '/order',
  component: Layout,
  children: [
    {
      path: '/order/index.vue',
      name: 'order',
      component: () => import('@/views/order/index.vue'),
      meta: {
        title: '订单管理',
        icon: 'el-icon-document-copy'
      }
    }
  ]
}
