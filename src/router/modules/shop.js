import Layout from '@/layout'

export default {
  path: '/shop',
  component: Layout,
  meta: {
    title: '商品管理',
    icon: 'el-icon-shopping-cart-full'
  },
  children: [
    {
      path: '/shop/shangpinleixing.vue',
      name: 'shangpinleixing',
      component: () => import('@/views/shop/shopType.vue'),
      meta: {
        title: '商品类型'
      }
    },
    {
      path: '/shop/shangpinguanli.vue',
      name: 'shangpinguanli',
      component: () => import('@/views/shop/shopManage.vue'),
      meta: {
        title: '商品管理'
      }
    }
  ]
}
