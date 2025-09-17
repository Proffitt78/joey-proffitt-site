// import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css' 
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'aos/dist/aos.css'
import AOS from 'aos'


import App from './App.vue'
import router from './router'

const pinia = createPinia()
const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        }
    }
})

app.use(pinia)
app.use(router)
app.use(vuetify)
app.mount('#app')

AOS.init({
  once: false,   // default true
  duration: 800, // animation duration (ms)
  easing: 'ease-in-out',
})
