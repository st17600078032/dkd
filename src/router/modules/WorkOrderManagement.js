import Layout from '@/layout'

export default {
  path: '/WorkOrderManagement',
  component: Layout,
  meta: {
    title: '工单管理',
    icon: 'el-icon-tickets'
  },
  children: [
    {
      path: '/WorkOrderManagement/yunying.vue',
      name: 'yunying',
      component: () => import('@/views/WorkOrderManagement/yunying.vue'),
      meta: {
        title: '运营工单'
      }
    },
    {
      path: '/WorkOrderManagement/yunwei.vue',
      name: 'yunwei',
      component: () => import('@/views/WorkOrderManagement/yunwei.vue'),
      meta: {
        title: '运维工单'
      }
    }
  ]
}
