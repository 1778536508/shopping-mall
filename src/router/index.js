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
        {
          path: '/index',
          name: 'ContentEstheticsIndex',
          component: () => import('@/view/content/esthetics/index.vue')
        },
        {
          path: '/index/find',
          name: 'ContentFindIndex',
          component: () => import('@/view/content/find/index.vue')
        },
        {
          path: '/index/good',
          name: 'ContentGoodThingIndex',
          component: () => import('@/view/content/goodthing/index.vue')
        },
        {
          path: '/index/my',
          name: 'ContentMyIndex',
          component: () => import('@/view/content/my/index.vue')
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
