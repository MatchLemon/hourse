
import Detail from './views/detail.vue'
import Home from './views/homeList.vue'

const routers = [
  {
    path: '/',
    name: '主页',
    component: Home
  },
  {
    path: '/detail',
    name: '详情',
    component: Detail
  },

]
export default routers