import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
import routes from './routes'
import 'font-awesome/css/font-awesome.min.css'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  mode: 'history',
  routes: routes.commRouter
})

router.beforeEach((to, from, next) => {
  //NProgress.start();
  if (to.path == '/admin/login') {
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  if(to.path == "/" || to.params.houseId) {
    next();
  } else if (!user && to.path != '/admin/login') {
    next({ path: '/admin/login' })
  } else {
    if (user && user.type != 1) {
      if (to.path == '/admin/userList') {
          next({path: '/admin/houseList'});
          next(false);
      }
    }
    next()
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

