import { createApp } from 'vue'
// import vuetify from './plugins/vuetify'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import router from './router'



createApp(App).use(router).mount('#app')
