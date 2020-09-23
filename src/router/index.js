import Router from 'vue-router'
import Vue from 'vue'
import login from './login/login'

const Main = () => import('@/views/main.vue')
const Home = ()=>import('@/views/home/Home.vue')


Vue.use(Router)

const routes = [
  {
    name: 'main',
    path: '/cloud',
    component: Main,
    children: [
      {
        name: "home",
        path: "/home",
        component: Home
      }
    ]
  },
  {
    path: '/',
    redirect: '/login'
  },
  ...login
]
const router = new Router({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (localStorage.token) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})
export default router