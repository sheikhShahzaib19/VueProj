import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
// import { all } from 'core-js/fn/promise'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#myapp')
