// 引入createApp用于创建应用
import { createApp } from 'vue'
// 引入根组件
import App from './App.vue'
// 引入路由器
import router from './router'

// 创建并挂载应用
const app = createApp(App)

app.use(router)

app.mount('#app')
