import { createApp } from 'vue'
import './style.css'
import router from './router'
import PrimeVue from 'primevue/config';
import App from './App.vue'

createApp(App).mount('#app')

const app = createApp(App)

app.use(router)
app.mount('#app')