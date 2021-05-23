import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Vuejs 3 te
// npm install @vuelidate/core @vuelidate/validators çalıştırılmalı.
import Vuelidate from '@vuelidate/core'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

createApp(App).use(store).use(router).use(Vuelidate).mount('#app')
