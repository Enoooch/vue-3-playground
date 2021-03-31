import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

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
  .use(Oruga)
  .use(router)
  .use(PrimeVue, { ripple: true })
  .mount('#app')

app.component('Calendar', Calendar)