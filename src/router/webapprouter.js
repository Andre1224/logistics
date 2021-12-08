import Layout from '@/views/webapp/layout'

const webapprouter = [
  {
    path: '/webapp',
    component: Layout,
    name: 'webapp',
    redirect: '/webapp/index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/webapp/index'),
        meta: { title: '首页', icon: 'el-icon-menu', color: 'info' }
      },
      {
        path: 'service',
        name: 'service',
        // component: () => import('@/views/webapp/service'),
        meta: { title: '服务与产品', icon: 'el-icon-menu', color: 'info' }
      },
      {
        path: 'mall',
        name: 'mall',
        // component: () => import('@/views/webapp/index'),
        meta: { title: '商城', icon: 'el-icon-menu', color: 'info' }
      },
      {
        path: 'about',
        name: 'about',
        // component: () => import('@/views/webapp/index'),
        meta: { title: '关于我们', icon: 'el-icon-menu', color: 'info' }
      },
      {
        path: 'news',
        name: 'news',
        // component: () => import('@/views/webapp/index'),
        meta: { title: '新闻中心', icon: 'el-icon-menu', color: 'info' }
      },
      {
        path: 'freight',
        name: 'freight',
        // component: () => import('@/views/webapp/index'),
        meta: { title: '运费报价', icon: 'el-icon-menu', type: 'red' }
      }
    ]
  }
]
export default webapprouter
