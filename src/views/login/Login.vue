<template>
  <div class="login-container">
    <Title titleText="登录">
      <template v-slot:left>
        <van-icon name="arrow-left" size="25" class="icon-center" />
      </template>
    </Title>
    <div class="login-body">
      <div class="center">
        <img src="@/assets/img/logo.png" alt="Netease">
        <van-form @submit="login" class="login-form">
          <van-field
            v-model="loginForm.username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="loginForm.password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">
            提交
            </van-button>
          </div>
        </van-form>
      </div>
    </div>
  </div>
</template>
<script>
import Title from '@/components/common/Title.vue'
import {Icon, Form, Field, Button} from 'vant'
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
   components:{
    Title,
    [Icon.name]: Icon,
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button,

  },
  methods: {
    login() {}
  },
}
</script>
<style lang='less' scoped>
  .login-container {
    height: 100%;
    .login-body {
      height: 100%;
      padding-top: 44px;
      padding-bottom: 47px;
      box-sizing: border-box;
      background-color: @theme-color;
      .center {
        width: 80%;
        margin: 100px auto;
        text-align: center;
        img {
          width: 70px;
          vertical-align: middle;
          margin-bottom: 10px;
        }
        .login-form {
        }
      }
    }
  }
</style>
