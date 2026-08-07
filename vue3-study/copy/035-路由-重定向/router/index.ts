// 创建一个路由器，并暴露出去
// 第一步：引入createRouter
import {createRouter, createWebHistory} from 'vue-router'

// 引入组件
import HomeVue from '../views/HomeVue.vue'
import NewsVue from '../views/NewsVue.vue'
import AboutVue from '../views/AboutVue.vue'
import DetailVue from '../views/DetailVue.vue'

// 第二步：创建路由器
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: 'main',
      path: '/home',
      component: HomeVue,
    },
    {
      name: 'information',
      path: '/news',
      component: NewsVue,
      children: [
        {
          name: 'detail-news',
          path: 'detail',
          component: DetailVue,
          props(route) {
            return route.query
          },
        },
      ],
    },
    {
      name: 'data',
      path: '/about',
      component: AboutVue,
    },
  ],
})

// 暴露出去router
export default router
