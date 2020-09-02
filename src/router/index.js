import Router from 'vue-router'
import Vue from 'vue'
import login from './login/login'

Vue.use(Router)

const routes = [...login]
const router = new Router({
  routes
})
export default router