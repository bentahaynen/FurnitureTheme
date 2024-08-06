import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Bootstrap ve Bootstrap-Vue-Next stillerini import edin
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Bootstrap-Vue-Next bileşenlerini import edin
import { BButton, BCard, BCol, BRow, BContainer } from 'bootstrap-vue-next'

const app = createApp(App)

// Bileşenleri global olarak kaydedin
app.component('BButton', BButton)
app.component('BCard', BCard)
app.component('BCol', BCol)
app.component('BRow', BRow)
app.component('BContainer', BContainer)

// Router'ı kullanarak uygulamayı başlatın
app.use(router)
app.mount('#app')
