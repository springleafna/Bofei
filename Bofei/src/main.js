import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
//全局设置axios的默认请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

app.mount('#app')
