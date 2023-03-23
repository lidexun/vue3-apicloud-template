import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import FastClick from 'fastclick'

const app = createApp(App)
app.use(router)
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
