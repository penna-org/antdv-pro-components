import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/reset.css'
import 'uno.css'
import 'haze-md/themes/vitepress'
import '@/assets/styles/index.less'
import DemoBlock from './components/demo-block/index.vue'
import DemoGroup from './components/demo-block/group.vue'

const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.component('demo', DemoBlock)
app.component('DemoGroup', DemoGroup)
app.use(pinia)
app.mount('#app')
