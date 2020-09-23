<template>
  <div class="title-container">
    <van-row class="title-wrapper">
      <van-col span="4" class="left">
        <slot name="left"></slot>
      </van-col>
      <van-col span="16" class="center">
        <slot name="center">{{titleText}}</slot>
      </van-col>
      <van-col span="4" class="center">
        <slot name="right"></slot>
      </van-col>
    </van-row>
  </div>
</template>
<script>
import { Col, Row, Button } from "vant";
export default {
  props: {
    titleText: {
      type: String,
      default: "首页"
    }
  },
  components: {
    [Button.name]: Button,
    [Col.name]: Col,
    [Row.name]: Row
  }
};
</script>
<style lang="less" scope>
.title-container {
  background-color: @theme-color;
  height: 44px;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 -5px 10px #fff;
  .title-wrapper {
    height: 100%;
    text-align: center;
    line-height: 44px;
    .left {
      position: relative;
      .icon-center {
        position: absolute;
        top: 9px;
        left: 15px;
      }
    }
  }
}
</style>