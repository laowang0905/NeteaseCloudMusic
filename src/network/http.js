import axios from 'axios'
import router from '../router'
import {
  Toast
} from 'vant'
import Vue from 'vue'

Vue.use(Toast)

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000,
  // headers: {
  //   post: {
  //     'Content-Type': 'application/x-www-form-urlencode;charset=UTF-8;multipart/form-data'
  //   } 
  // }
})

instance.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.error(error)
})

instance.interceptors.response.use(response => {
  if (response.status === 200) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(response)
  }
}, error => {
  if (error.response.status) {
    switch (error.response.status) {
      case 401:
        router.replace({
          path: '/login',
          query: {
            redirect: router.currentRoute.fullpath
          }
        })
        break
        // 登陆过期，重新登录
      case 403:
        Toast({
          message: '登陆过期，请重新登录',
          duration: 1000,
          forbidClick: true
        })
        break
        // 不存在
      case 404:
        Toast({
          message: '网络请求不存在',
          duration: 1000,
          forbidClick: true
        })
        break
      default:
        Toast({
          message: error.response.data.message,
          duration: 1500,
          forbidClick: true
        })
    }
    return Promise.reject(error.response)
  }
})

export const instanceGet = (url, params) => {
  return new Promise((resolve, reject) => {
    instance.get(url, {
      params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

export const instancePost = (url, params) => {
  return new Promise((resolve, reject) => {
    instance.post(url, params).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

