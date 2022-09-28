import Layout from '@/layout'

export default {
  path: '/Reconciliation',
  component: Layout,
  children: [
    {
      path: '/Reconciliation/index.vue',
      name: 'Reconciliation',
      component: () => import('@/views/Reconciliation/index.vue'),
      meta: {
        title: '对账系统',
        icon: 'el-icon-coin'
      }
    }
  ]
}
