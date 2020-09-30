<template>
  <div class="main-container">
    <!-- <Title class="custom">
      <template v-slot:center>
        <van-tabs></van-tabs>
      </template>
    </Title>-->
    <van-tabs v-model="activeTabs" line-height="0" lazy-render swipeable sticky>
      <template v-slot:nav-left>
        <van-icon name="chat-o" color="#1989fa" />
      </template>
      <van-tab title="我的">1</van-tab>
      <van-tab title="发现">2</van-tab>
      <van-tab title="云村">3</van-tab>
      <van-tab title="视频">4</van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Title from "@/components/common/Title.vue";
import { Tab, Tabs, Icon } from "vant";
export default {
  name: "discover",
  data() {
    return {
      activeTabs: 1
    };
  },
  components: {
    Title,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Icon.name]: Icon
  }
};
</script>
<style lang="less" scoped>
.main-container {
  .custom {
    background-color: #fff;
    font-size: 14px;
    font-weight: normal;
    color: #bbb;
  }
}
</style>