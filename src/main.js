// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 所有通过 createAPI 实现的通过 API 的形式调用的自定义组件（cube-ui 内置的组件）都需要通过 Vue.use 注册才可以。
import { Dialog } from 'cube-ui'
Vue.use(Dialog)

import data from './assets/data.json'

Vue.config.productionTip = false
Vue.prototype.json = data

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
