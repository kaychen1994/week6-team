import Vue from 'vue'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.component('Loading', Loading)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
