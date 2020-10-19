import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible/index'
import './assets/css/base.less'
import 'normalize.css'
import store from './store'

// import VueAwesomeSwiper from 'vue-awesome-swiper'

// // import style (>= Swiper 6.x)
// import 'swiper/swiper-bundle.css'

// Vue.use(VueAwesomeSwiper, {})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
