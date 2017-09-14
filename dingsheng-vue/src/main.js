import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import routers from './routers'
// 引用API文件
import api from './api/api'
// 将API方法绑定到全局
Vue.prototype.$api = api

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);

const router = new VueRouter({
  mode: 'history',
  routes: routers
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})