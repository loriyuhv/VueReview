// 创建一个路由器，并暴露出去

// 第一步：引入createRouter
import {createRouter, createWebHistory} from 'vue-router'

// 引入组件
import HomeVue from '../views/HomeVue.vue'
import NewsVue from '../views/NewsVue.vue'
import AboutVue from '../views/AboutVue.vue'
import DetailVue from '@/views/DetailVue.vue'

// 第二步：创建路由器
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeVue,
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
          // 适应第一种写法
          // path: 'detail/:id/:title/:content?',
          path: 'detail',
          component: DetailVue,
          // 第一种写法：将路由收到的所有params参数作为props传给路由组件
          // props: true,

          // 第二种写法：可以自己决定将什么作为props传给路由组件
          // 注意：这种写法非常适合query
          props(route) {
            return route.query
          },

          // 第三种写法：对象写法，可以自己决定将什么作为props给路由组件
          // 很少用
          // props: {
          //   id: '001',
          //   title: 'Login',
          //   content: 'Hello World',
          // }
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
