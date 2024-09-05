import { createApp } from 'vue'
import App from '@/App.vue'
import { createPinia } from 'pinia'
import '@/style.css'

import Loader from '@/components/ui/Loader.vue'

const app = createApp(App)
const pinia = createPinia()

app.component('Loader', Loader)
app.use(pinia)
app.mount('#app')
