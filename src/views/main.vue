<template>
  <div class="main-container">
    <van-tabs v-model="activeTabs" lazy-render swipeable sticky>
      <template v-slot:nav-left>
        <van-icon name="apps-o"/>
      </template>
      <van-tab title="我的">1</van-tab>
      <van-tab title="发现">2</van-tab>
      <van-tab title="云村">3</van-tab>
      <van-tab title="视频">4</van-tab>
      <template v-slot:nav-right>
        <van-icon name="search" />
      </template>
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
  .van-icon {
    width: 1rem;
    margin: 0 .3rem;
  }
  .van-icon::before {
    position: absolute;
    top: 10px;
    // left: 0.3rem;
    color: #666;
  }
}
</style>