import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import axios from './api/axios'
import FastClick from 'fastclick'
import './assets/css/app.css'

const app = createApp(App)
app.use(axios).use(router)
app.mount('#app')

if ('addEventListener' in document) {
  document.addEventListener(
    'DOMContentLoaded',
    function () {
      FastClick.attach(document.body)
    },
    false
  )
}
