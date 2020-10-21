<template>
  <div class="sub-title-container">
    <van-row type="flex" justify="space-between">
      <van-col class="left">人气歌单推荐</van-col>
      <van-col class="right">查看更多</van-col>
    </van-row>
  </div>
</template>
<script>
import { Col, Row } from "vant";

export default {
  name: "sub-title",
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