import Layout from '@/layout'

const BackstageManager = [
  {
    path: '/BackstageManager/login',
    component: () => import('@/views/BackstageManager/login/index'),
    hidden: true
  },

  {
    path: '/BackstageManager',
    component: Layout,
    redirect: '/BackstageManager/dashboard',
    children: [
      {
        path: 'dashboard',
        name: '首页',
        component: () => import('@/views/BackstageManager/dashboard/index'),
        meta: { title: '首页', icon: 'dashboard' }
      }
    ]
  },
  // 包裹管理
  {
    path: '/BackstageManager/pack',
    component: Layout,
    redirect: '/BackstageManager/pack/example',
    name: 'pack',
    meta: { title: '包裹管理', icon: 'el-icon-box' },
    children: [
      {
        path: 'example',
        name: 'example',
        component: () =>
          import('@/views/BackstageManager/packageManagement/index'),
        meta: { title: '样例', icon: 'el-icon-star-on' }
      },
      {
        path: 'pickup',
        name: 'Pickup',
        component: () =>
          import('@/views/BackstageManager/packageManagement/pickup'),
        meta: { title: '取件服务管理', icon: 'table' }
      },
      {
        path: 'warehousing',
        name: 'Warehousing',
        component: () => import('@/views/BackstageManager/tree/index'),
        meta: { title: '入库管理', icon: 'el-icon-s-home' }
      },
      {
        path: 'stock',
        name: 'Stock',
        component: () => import('@/views/BackstageManager/tree/index'),
        meta: { title: '库存管理', icon: 'el-icon-receiving' }
      },
      {
        path: 'customs',
        name: 'Customs',
        component: () => import('@/views/BackstageManager/tree/index'),
        meta: { title: '海关报备单', icon: 'skill' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/BackstageManager/tree/index'),
        meta: { title: '出库管理', icon: 'el-icon-truck' }
      },
      {
        path: 'outstock',
        name: 'Outstock',
        component: () => import('@/views/BackstageManager/tree/index'),
        meta: { title: '机场入库管理', icon: 'international' }
      },
      {
        path: 'clearance',
        name: 'Clearance',
        component: () => import('@/views/BackstageManager/tree/index'),
        meta: { title: '清关管理', icon: 'tab' }
      }
    ]
  },
  // 收件人管理
  {
    path: '/BackstageManager/recipients',
    component: Layout,
    redirect: '/BackstageManager/recipients/import',
    name: '收件人管理',
    meta: { title: '客户管理', icon: 'peoples' },
    children: [
      {
        path: 'import',
        name: 'Import',
        component: () =>
          import('@/views/BackstageManager/recipientManagement/customInfo'),
        meta: { title: '客户信息', icon: 'el-icon-user-solid' }
      },
      {
        path: 'export',
        name: 'Export',
        component: () =>
          import('@/views/BackstageManager/recipientManagement/index'),
        meta: { title: '导出信息', icon: 'link' }
      }
    ]
  },
  // 留言管理
  {
    path: '/BackstageManager/message',
    component: Layout,
    redirect: '/BackstageManager/message/category',
    name: '留言管理',
    meta: { title: '留言管理', icon: 'el-icon-chat-dot-square' },
    children: [
      {
        path: 'category',
        name: 'Category',
        component: () =>
          import('@/views/BackstageManager/recipientManagement/index'),
        meta: { title: '留言分类', icon: 'el-icon-menu' }
      },
      {
        path: 'manage',
        name: 'Manage',
        component: () =>
          import('@/views/BackstageManager/recipientManagement/index'),
        meta: { title: '留言管理', icon: 'el-icon-chat-dot-square' }
      }
    ]
  }, // 网站管理
  {
    path: '/BackstageManager/webapp',
    component: Layout,
    redirect: '/BackstageManager/webapp/index',
    name: '网站管理',
    meta: { title: '网站管理', icon: 'website' },
    children: [
      {
        path: 'index',
        name: 'index',
        // component: () => import('@/views/BackstageManager/recipientManagement/index'),
        meta: { title: '首页管理', icon: 'websiteback' },
        children: [
          {
            path: 'carousel',
            component: () =>
              import('@/views/BackstageManager/nested/menu1/menu1-1'),
            name: 'carousel',
            meta: { title: '轮播图', icon: 'websitecarousel' }
          },
          {
            path: 'specialservice',
            component: () =>
              import('@/views/BackstageManager/nested/menu1/menu1-1'),
            name: 'specialservice',
            meta: { title: '特色服务', icon: 'websitespecialservice' }
          },
          {
            path: 'directmail',
            component: () =>
              import('@/views/BackstageManager/nested/menu1/menu1-1'),
            name: 'directmail',
            meta: { title: '直邮服务', icon: 'websitedirectmail' }
          },
          {
            path: 'helpcenter',
            name: 'helpcenter',
            meta: { title: '帮助中心', icon: 'websitehelp' },
            children: [
              {
                path: 'about',
                component: () =>
                  import('@/views/BackstageManager/nested/menu1/menu1-1'),
                name: 'about',
                meta: { title: '关于我们', icon: 'websiteabout' }
              },
              {
                path: 'problem',
                component: () =>
                  import('@/views/BackstageManager/nested/menu1/menu1-1'),
                name: 'problem',
                meta: { title: '常见问题', icon: 'el-icon-warning-outline' }
              },
              {
                path: 'announce',
                component: () =>
                  import('@/views/BackstageManager/nested/menu1/menu1-1'),
                name: 'announce',
                meta: { title: '最新公告', icon: 'websiteannounce' }
              },
              {
                path: 'activity',
                component: () =>
                  import('@/views/BackstageManager/nested/menu1/menu1-1'),
                name: 'activity',
                meta: { title: '最新活动', icon: 'websiteactivity' }
              },
              {
                path: 'cooperate',
                component: () =>
                  import('@/views/BackstageManager/nested/menu1/menu1-1'),
                name: 'cooperate',
                meta: { title: '加盟合作', icon: 'websitecoop' }
              },
              {
                path: 'contact',
                component: () =>
                  import('@/views/BackstageManager/nested/menu1/menu1-1'),
                name: 'contact',
                meta: { title: '联系我们', icon: 'websitecontact' }
              }
            ]
          }
        ]
      },
      {
        path: 'service',
        name: 'service',
        // component: () => import('@/views/BackstageManager/recipientManagement/index'),
        meta: { title: '服务与产品管理', icon: 'el-icon-shopping-bag-1' }
      },
      {
        path: 'mall',
        name: 'mall',
        // component: () => import('@/views/BackstageManager/recipientManagement/index'),
        meta: { title: '商城管理', icon: 'el-icon-shopping-cart-full' }
      },
      {
        path: 'about',
        name: 'about',
        // component: () => import('@/views/BackstageManager/recipientManagement/index'),
        meta: { title: '关于我们', icon: 'websiteabout' }
      },
      {
        path: 'news',
        name: 'news',
        // component: () => import('@/views/BackstageManager/recipientManagement/index'),
        meta: { title: '新闻中心', icon: 'websiteannounce' }
      },
      {
        path: 'freight',
        name: 'freight',
        // component: () => import('@/views/BackstageManager/recipientManagement/index'),
        meta: { title: '运费报价', icon: 'el-icon-coin' }
      }
    ]
  },
  // 折叠菜单
  {
    path: '/BackstageManager/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: { title: '多级菜单样例', icon: 'nested' },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/BackstageManager/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () =>
              import('@/views/BackstageManager/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () =>
              import('@/views/BackstageManager/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () =>
                  import(
                    '@/views/BackstageManager/nested/menu1/menu1-2/menu1-2-1'
                  ),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () =>
                  import(
                    '@/views/BackstageManager/nested/menu1/menu1-2/menu1-2-2'
                  ),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () =>
              import('@/views/BackstageManager/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/BackstageManager/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: 'menu2' }
      }
    ]
  }
]

export default BackstageManager
