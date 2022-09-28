import Layout from '@/layout'

export default {
  path: '/equipment',
  component: Layout,
  meta: {
    title: '设备管理',
    icon: 'el-icon-s-platform'
  },
  children: [
    {
      path: '/equipment/shebeiguanli.vue',
      name: 'shebeiguanli',
      component: () => import('@/views/equipment/shebeiguanli.vue'),
      meta: {
        title: '设备管理'
      }
    },
    {
      path: '/equipment/shebeizhuangtai.vue',
      name: 'shebeizhuangtai',
      component: () => import('@/views/equipment/shebeizhuangtai.vue'),
      meta: {
        title: '设备状态'
      }
    },
    {
      path: '/equipment/shebeileixing.vue',
      name: 'shebeileixing',
      component: () => import('@/views/equipment/shebeileixing.vue'),
      meta: {
        title: '设备类型管理'
      }
    }
  ]
}

