// 创建一个路由器，并暴露出去

// 第一步：引入createRouter
import {createRouter, createWebHistory} from 'vue-router'

// 引入组件
import HomeVue from '../views/HomeVue.vue'
import NewsVue from '../views/NewsVue.vue'
import AboutVue from '../views/AboutVue.vue'

// 第二步：创建路由器
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeVue,
    },
    {
      path: '/home',
      component: HomeVue,
    },
    {
      path: '/news',
      component: NewsVue,
    },
    {
      path: '/about',
      component: AboutVue,
    },
  ],
})

// 暴露出去router
export default router
