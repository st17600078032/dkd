import Layout from '@/layout'

export default {
  path: '/strategy',
  component: Layout,
  children: [
    {
      path: '/strategy/index.vue',
      name: 'strategy',
      component: () => import('@/views/strategy/index.vue'),
      meta: {
        title: '策略管理',
        icon: 'el-icon-s-opportunity'
      }
    }
  ]
}
