import Layout from '@/layout'

export default {
  path: '/PointManagement',
  component: Layout,
  meta: {
    title: '点位管理',
    icon: 'el-icon-location-information'
  },
  children: [
    {
      path: '/PointManagement/qvyu.vue',
      name: 'qvyu',
      component: () => import('@/views/PointManagement/qvyu.vue'),
      meta: {
        title: '区域管理'
      }
    },
    {
      path: '/PointManagement/dianwei.vue',
      name: 'dianwei',
      component: () => import('@/views/PointManagement/dianwei.vue'),
      meta: {
        title: '点位管理'
      }
    },
    {
      path: '/PointManagement/yunyingshang.vue',
      name: 'yunyingshang',
      component: () => import('@/views/PointManagement/yunyingshang.vue'),
      meta: {
        title: '运营商管理'
      }
    }
  ]
}

