import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import bus from '@/utils/bus.js'

import 'amfe-flexible/index'
import './assets/css/base.less'
import 'normalize.css'

import {
  Lazyload
} from 'vant';

Vue.use(Lazyload);

Vue.prototype.$bus = bus

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
