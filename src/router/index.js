import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    // 内容
    {
      path: '/index',
      name: 'ContentIndex',
      component: () => import('@/view/content/index.vue'),
      children: [
        // 美学
        {
          path: '/index',
          name: 'ContentEstheticsIndex',
          component: () => import('@/view/content/esthetics/index.vue'),
        },
        //发现
        {
          path: '/index/find',
          name: 'ContentFindIndex',
          component: () => import('@/view/content/find/index.vue')
        },
        // 好物
        {
          path: '/index/good',
          name: 'ContentGoodThingIndex',
          component: () => import('@/view/content/goodthing/index.vue'),
          children: [
            // 好物-首页
            {
              path: '/index/good/home',
              name: 'ContentgoodthingreCommend',
              component: () => import('@/components/goodthing/home/home.vue'),
            },
            // 好物-列表页
            {
              path: '/index/good/list',
              name: 'ContentgoodthingreList',
              component: () => import('@/components/goodthing/list/list.vue'),
            },
            // 消息
            {
              path: '/index/good/news',
              name: 'ContentgoodthingreNews',
              component: () => import('@/components/goodthing/news/news.vue'),
            }
          ]
        },
        // 我的
        {
          path: '/index/my',
          name: 'ContentMyIndex',
          component: () => import('@/view/content/my/index.vue'),
          children: [
            // home首页
            {
              path: '/index/my',
              name: 'ContentMyIndexHome',
              component: () => import('@/components/my/home/home.vue')
            },
           // 我的订单
            {
              path: '/index/my/order',
              name: 'ContentMyIndexOrder',
              component: () => import('@/components/my/order/order.vue')
            }
          ]
        }
      ]
    },
    //个人中心
    {
      path: '/personal',
      name: 'PersonalIndex',
      component: () => import('@/view/personal/index.vue'),
      children: [
        // 首页
        {
          path: '/personal',
          name: 'PersonalCore',
          component: () => import('@/components/personal/core/core.vue')
        },
        // 我的发布/喜欢
        {
          path: '/personal/pictures',
          name: 'PersonalPictures',
          component: () => import('@/components/personal/pictures/pictures.vue')
        },
        // 我的活动
        {
          path: '/personal/activity',
          name: 'PersonalActivity',
          component: () => import('@/components/personal/activity/activity.vue')
        },
        // 浏览历史
        {
          path: '/personal/history',
          name: 'PersonalHistory',
          component: () => import('@/components/personal/history/history.vue')
        },
        // 积分中心
        {
          path: '/personal/integral',
          name: 'PersonalIntegral',
          component: () => import('@/components/personal/integral/integral.vue')
        },
        // 优惠券
        {
          path: '/personal/coupon',
          name: 'PersonalCoupon',
          component: () => import('@/components/personal/coupon/coupon.vue')
        },
        // 地址管理
        {
          path: '/personal/address',
          name: 'PersonalAddress',
          component: () => import('@/components/personal/address/address.vue')
        },
        // 地址管理
        {
          path: '/personal/service',
          name: 'PersonalService',
          component: () => import('@/components/personal/service/service.vue')
        },
        // 添加地址
        {
          path: '/personal/createaddress',
          name: 'PersonalCreateAddress',
          component: () => import('@/components/personal/create-address/create-address.vue')
        }
      ]
    },

    // 详情
    {
      path: '/details',
      name: 'DetailsIndex',
      component: () => import('@/view/details/index.vue'),
      children: [
        {
          path: '/shopDetails',
          name: 'ShopDetails',
          component: () => import('@/view/details/shop/details')
        }
      ]
    },
    // 登录
    {
      path: '/login',
      name: 'LoginIndex',
      component: () => import('@/view/login/index.vue')
    },
    // 注册
    {
      path: '/register',
      name: 'RegisterIndex',
      component: () => import('@/view/register/index.vue')
    }
  ]
})
