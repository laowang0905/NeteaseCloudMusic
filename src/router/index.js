import Router from 'vue-router'
import Vue from 'vue'
import login from './login/loginRouter'

const Main = () => import('@/views/main.vue')
const Profile = () => import('@/views/profile/Profile.vue')
const Discover = ()=>import('@/views/discover/Discover.vue')
const Yuncun = ()=>import('@/views/yuncun/Yuncun.vue')
const Video = ()=>import('@/views/video/Video.vue')

Vue.use(Router)

const routes = [
  {
    name: 'main',
    path: '/cloud',
    component: Main,
    // redirect: '/cloud/discover',
    // children: [
    //   {
    //     name: "profile",
    //     path: "profile",
    //     component: Profile
    //   },
    //   {
    //     name: "discover",
    //     path: "discover",
    //     component: Discover
    //   },
    //   {
    //     name: "yuncun",
    //     path: "yuncun",
    //     component: Yuncun
    //   },
    //   {
    //     name: "video",
    //     path: "video",
    //     component: Video
    //   },
    // ]
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
  if (localStorage.token && localStorage.token !== '') {
    
  }
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