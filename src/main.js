import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible/index'
import './assets/css/base.less'
import 'normalize.css'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
