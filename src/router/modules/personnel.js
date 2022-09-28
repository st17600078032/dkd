import Layout from '@/layout'

export default {
  path: '/personnel',
  component: Layout,
  meta: {
    title: '人员管理',
    icon: 'el-icon-s-custom'
  },
  children: [
    {
      path: '/personnel/qvyu.vue',
      name: 'renyuanliebiao',
      component: () => import('@/views/personnel/renyuanliebiao.vue'),
      meta: {
        title: '人员列表'
      }
    },
    {
      path: '/personnel/renxiaotongji.vue',
      name: 'renxiaotongji',
      component: () => import('@/views/personnel/renxiaotongji.vue'),
      meta: {
        title: '人效统计'
      }
    },
    {
      path: '/personnel/gongzuoliang.vue',
      name: 'gongzuoliang',
      component: () => import('@/views/personnel/gongzuoliang.vue'),
      meta: {
        title: '工作量列表'
      }
    }
  ]
}

