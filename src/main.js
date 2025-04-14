import { createApp } from 'vue'
import './assets/style.css'
import '@/assets/iconfont/iconfont.css'
import App from './App.vue'
import router from '@/routers/index.js'
import pinia from '@/stores/index.js'
import registerVantComponents from '@/utils/vant-ui.js'

const app = createApp(App)
app.use(router)
app.use(pinia)
registerVantComponents(app)

app.mount('#app')

