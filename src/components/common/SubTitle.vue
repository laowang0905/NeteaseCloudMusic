<template>
  <div class="sub-title-container">
    <van-row type="flex" justify="space-between">
      <van-col class="left">{{leftText}}</van-col>
      <van-col class="right">{{rightText}}</van-col>
    </van-row>
  </div>
</template>
<script>
import { Col, Row } from "vant";

export default {
  name: "sub-title",
  props: {
    leftText: '',
    rightText: {
      type: String,
      default() {
        return "查看更多"
      }
    }
  },
  components: {
    [Col.name]: Col,
    [Row.name]: Row
  }
};
</script>
<style lang="less" scoped>
.sub-title-container {
  font-size: 0;
  .left {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
  }
  .right {
    font-size: 12px;
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
}
</style>