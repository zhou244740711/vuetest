import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import axios from 'axios'
import router from './router'
axios.defaults.timeout = 100000
axios.defaults.withCredentials = true

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
