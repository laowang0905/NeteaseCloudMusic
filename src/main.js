import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible/index'
import './assets/css/base.less'
import 'normalize.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
