import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import i18n from './plugins/i18n'
import store from './store'


const app = createApp(App).use(store).use(i18n).use(i18n)
app.use(router).mount('#app')