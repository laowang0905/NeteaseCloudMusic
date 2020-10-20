<template>
  <div class="discover-container">
    <van-swipe class="my-swipe" :autoplay="5000" indicator-color="#0097dd">
      <van-swipe-item v-for="(item, index) in swipeLists" :key="index">
        <img :src="item.pic" class="banner" />
      </van-swipe-item>
    </van-swipe>
    <TabBar :tabBarList="tabBarList" ref="tabbar" @scroll.native="tabBarScroll"></TabBar>
  </div>
</template>
<script>
import { Swipe, SwipeItem, Tabs, Tab } from "vant";
import TabBar from "./components/TabBar";

import { reqSwipeLists } from "@/network/discoverApi";
export default {
  name: "discover",
  data() {
    return {
      swipeLists: [],
      // 临界值
      criticality: "",
      tabBarList: [{ icon: "day.png", text: "每日精选" }]
    };
  },
  methods: {
    async getSwipeLists() {
      const { banners } = await reqSwipeLists({ type: 2 });
      this.swipeLists = banners;
    },
    initData() {
      this.getSwipeLists();
    },
    tabBarScroll(e) {
      // console.log(e.target, e.target.offsetWidth)
      const x = e.target.scrollLeft;
      let flag = x > 0 && x < this.criticality ? false : true;
      this.$emit("isSwiper", flag);
    }
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    TabBar
  },
  mounted() {
    this.initData();
    const tabbar = this.$refs.tabbar.$el;
    this.criticality = tabbar.scrollWidth - tabbar.offsetWidth;
  }
};
</script>
<style lang="less" scoped>
.discover-container {
  padding: 0 12px;
  .my-swipe {
    width: 100%;
    margin: 0 auto;
    height: 136.5px;
    .van-swipe-item {
      .banner {
        width: 100%;
        border-radius: 8px;
        overflow: hidden;
      }
    }
  }
}
</style>