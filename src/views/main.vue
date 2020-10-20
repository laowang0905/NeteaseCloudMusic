<template>
  <div class="main-container">
    <van-tabs v-model="activeTabs" lazy-render :swipeable="swipeable" sticky line-height="0" animated>
      <template v-slot:nav-left>
        <van-icon name="apps-o" />
      </template>
      <van-tab v-for="(item, index) in tabsList" :key="index" :title="item.name">
        <component :is="item.component"></component>
      </van-tab>
      <template v-slot:nav-right>
        <van-icon name="search" />
      </template>
    </van-tabs>
  </div>
</template>
<script>
import Discover from "@/views/discover/Discover";
import Profile from "@/views/profile/Profile";
import Video from "@/views/video/Video";
import Yuncun from "@/views/yuncun/Yuncun";
import Title from "@/components/common/Title.vue";
import { Tab, Tabs, Icon } from "vant";

export default {
  name: "mainCpn",
  data() {
    return {
      swipeable: true,
      activeTabs: 1,
      tabsList: [
        { name: "我的", component: "Profile" },
        { name: "发现", component: "Discover" },
        { name: "云村", component: "Yuncun" },
        { name: "视频", component: "Video" }
      ]
    };
  },
  components: {
    Title,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Icon.name]: Icon,
    Discover,
    Profile,
    Video,
    Yuncun
  },
  methods: {
    isSwiper(flag) {
      this.swipeable = flag
    }
  },
  mounted() {
    this.$bus.$on('isSwiper', this.isSwiper)
  },
  destroyed() {
    this.$bus.$off('isSwiper')
  }
};
</script>
<style lang="less" scoped>
.main-container {
  .van-icon {
    width: 1rem;
    margin: 0 0.3rem;
    position: relative;
  }
  .van-icon::before {
    font-size: 20px;
    // vertical-align: middle;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>