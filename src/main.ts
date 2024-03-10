import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/reset.css'
import 'uno.css'
import 'haze-md/themes/vitepress'
import '@/assets/styles/index.less'

const app = createApp(App)
app.use(router)
app.mount('#app')
