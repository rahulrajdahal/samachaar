import './assets/main.css'

import { createApp } from 'vue'

import { VueQueryPlugin } from '@tanstack/vue-query'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(VueQueryPlugin, { enableDevtoolsV6Plugin: true })
app.use(router)

app.mount('#app')

