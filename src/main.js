// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js'
import VueLazyload from 'vue-lazyload' // 图片懒加载
var mydefault = require("@/assets/imgaes/default.png"); // 默认图片
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: mydefault,
  loading: mydefault,
  attempt: 1
})
// 所有通过 createAPI 实现的通过 API 的形式调用的自定义组件（cube-ui 内置的组件）都需要通过 Vue.use 注册才可以。
import {
  // 基础样式
  Style,
  // basic
  Button,
  Loading,
  Tip,
  Toolbar,
  TabBar,
  TabPanels,
  // form
  Checkbox,
  CheckboxGroup,
  Radio,
  Checker,
  Input,
  Textarea,
  Select,
  Switch,
  Rate,
  Validator,
  Upload,
  Form,
  // popup
  Popup,
  Toast,
  Picker,
  CascadePicker,
  DatePicker,
  TimePicker,
  SegmentPicker,
  Dialog,
  ActionSheet,
  Drawer,
  ImagePreview,
  // scroll
  Scroll,
  Slide,
  IndexList,
  Swipe,
  ScrollNavBar,
} from 'cube-ui'
// basic
Vue.use(Button);
Vue.use(Loading);
Vue.use(Tip);
Vue.use(Toolbar);
Vue.use(TabBar);
Vue.use(TabPanels);

//form
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Radio);
Vue.use(Checker);
Vue.use(Input);
Vue.use(Textarea);
Vue.use(Select);
Vue.use(Switch);
Vue.use(Rate);
Vue.use(Validator);
Vue.use(Upload);
Vue.use(Form);
//popup
Vue.use(Popup);
Vue.use(Toast);
Vue.use(Picker);
Vue.use(CascadePicker);
Vue.use(DatePicker);
Vue.use(TimePicker);
Vue.use(SegmentPicker);
Vue.use(Dialog);
Vue.use(ActionSheet);
Vue.use(Drawer);
//scroll
Vue.use(Scroll);
Vue.use(Slide);
Vue.use(IndexList);
Vue.use(Swipe);
Vue.use(ScrollNavBar);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
