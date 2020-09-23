<template>
  <div class="login-container">
    <Title :titleText="titleText">
      <template v-slot:left>
        <van-icon name="arrow-left" size="25" class="icon-center" />
      </template>
    </Title>
    <div class="login-body">
      <div class="center">
        <h1 class="logo">EIHEI</h1>
        <transition name="van-slide-left" mode="out-in">
          <van-form @submit="login" class="login-form" v-if="isRegister" key="login">
            <van-field v-model="loginForm.phone" name="手机号" label="帐号" placeholder="请输入手机号" />
            <van-field
              v-model="loginForm.password"
              type="password"
              name="密码"
              label="密码"
              placeholder="密码"
            />
            <div style="margin: 16px;">
              <van-button round block type="info" native-type="submit" class="login-button">登录</van-button>
            </div>
            <p
              class="no-register"
              @click="isRegister=!isRegister"
            >{{isRegister?'还没账号？去注册':'已有账号，去登陆'}}</p>
          </van-form>
          <van-form @submit="register" class="register-form" v-else key="register">
            <van-field v-model="registerForm.phone" label="手机号" placeholder="请输入手机号" />
            <van-field v-model="registerForm.email" label="邮箱" placeholder="请输入邮箱" />
            <van-field
              v-model="registerForm.password"
              type="password"
              name="密码"
              label="密码"
              placeholder="密码"
            />
            <div style="margin: 16px;">
              <van-button round block type="info" native-type="submit" class="login-button">注册</van-button>
            </div>
            <p
              class="no-register"
              @click="isRegister=!isRegister"
            >{{isRegister?'还没账号？去注册':'已有账号，去登陆'}}</p>
          </van-form>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import { reqRegister, reqLogin } from "@/network/loginApi.js";
import Title from "@/components/common/Title.vue";
import { Icon, Form, Field, Button } from "vant";
export default {
  data() {
    return {
      loginForm: {
        phone: "15738519818",
        password: "aizhy1314"
      },
      registerForm: {
        phone: "",
        password: "",
        captcha: "",
        nickname: ""
      },
      isRegister: true
    };
  },
  components: {
    Title,
    [Icon.name]: Icon,
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button
  },
  methods: {
    async login() {
      const res = await reqLogin(this.loginForm);
      console.log(res);
      this.$store.commit("login/login", res.token);
      localStorage.uid = res.account.id;
      // this.$store.dispatch('')
      this.$router.push("/cloud/home");
    },
    async register() {
      const res = await reqRegister(this.registerForm);
    }
  },
  computed: {
    titleText() {
      return this.isRegister ? "登录" : "注册";
    }
  }
};
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
      .logo {
        color: #fff;
        font-size: 40px;
        font-style: italic;
        text-shadow: 3px 3px 0 #ccc;
      }
      .no-register {
        color: #fff;
        font-size: 14px;
        font-weight: 600;
      }
      .login-button {
        background-color: @theme-color;
        font-weight: 600;
        border: none;
        box-shadow: 0 0 20px rgb(233, 220, 220);
        width: 200px;
        margin: 0 auto;
      }
    }
  }
}
</style>
<style lang="less">
.van-cell {
  background-color: rgba(255, 255, 255, 0.3);
  &:nth-child(1) {
    border-radius: 4px 4px 0 0;
  }
  &:nth-child(2) {
    border-radius: 0 0 4px 4px;
  }
  ::placeholder {
    color: #fff;
  }
  .van-field__label {
    color: #fff;
    font-weight: 600;
  }
  .van-field__control {
    color: #fff;
  }
}
</style>

