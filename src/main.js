import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './firebase'

//Vue.config.productionTip = false
//Vue.config.silent = true
//Vue.config.devtools = false

import jQuery from 'jquery'
window.$ = jQuery

import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

new Vue({ router, render: h => h(App) }).$mount('#app')
