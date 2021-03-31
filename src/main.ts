import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import Oruga from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga.css'
import '@oruga-ui/oruga-next/dist/oruga-full.css'

import PrimeVue from 'primevue/config'
import Calendar from 'primevue/calendar'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App)

app
  .use(router)
  .use(Oruga)
  .use(ElementPlus)
  .use(PrimeVue, { ripple: true })

app.component('Calendar', Calendar)

app.mount('#app')