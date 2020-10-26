<template>
  <div class="discover-container">
    <van-swipe class="my-swipe" :autoplay="5000" indicator-color="#0097dd">
      <van-swipe-item v-for="(item, index) in swipeLists" :key="index">
        <img class="banner" v-lazy="item.pic" />
      </van-swipe-item>
    </van-swipe>
    <TabBar>
      <template v-slot:content>
        <template v-for="(item, index) in tabBarList">
          <TabBarItem :key="index" :item="item"></TabBarItem>
        </template>
      </template>
    </TabBar>
    <TabBar>
      <template v-slot:title>
        <SubTitle :leftText="plSubTitle"></SubTitle>
      </template>
      <template v-slot:content>
        <template v-for="(item, index) in plRecommendList">
          <PlayListRecommend :key="index" :item="item.uiElement" :playCount='item.resources[0].resourceExtInfo.playCount'></PlayListRecommend>
        </template>
      </template>
    </TabBar>
    <TabBar>
      <template v-slot:title>
        <SubTitle :leftText="styleRecommendTitle"></SubTitle>
      </template>
      <template v-slot:content>
        
      </template>
    </TabBar>
  </div>
</template>
<script>
import { Swipe, SwipeItem, Tabs, Tab } from "vant";
import TabBar from "./components/TabBar";
import TabBarItem from "./components/TabBarItem.vue";
import PlayListRecommend from "./components/PlayListRecommend.vue";
import SubTitle from "@/components/common/SubTitle";

import { reqSwipeLists, reqHomePage } from "@/network/discoverApi";
export default {
  name: "discover",
  data() {
    return {
      swipeLists: [],
      tabBarList: [
        { icon: "day.png", text: "每日推荐" },
        { icon: "fm.png", text: "私人FM" },
        { icon: "playlist.png", text: "歌单" },
        { icon: "paihangbang.png", text: "排行榜" },
        { icon: "liaotian.png", text: "唱聊" },
        { icon: "zhibo.png", text: "直播" },
        { icon: "diantai.png", text: "电台" },
        { icon: "zhuanji.png", text: "数字专辑" }
      ],
      plRecommendList: [],
      plSubTitle: '',
      styleRecommendTitle: '',
      styleRecommend: []
    };
  },
  methods: {
    async getSwipeLists() {
      const { banners } = await reqSwipeLists({ type: 2 });
      this.swipeLists = banners;
    },
    async getHomePage() {
      const { data } = await reqHomePage();
      this.plSubTitle = data.blocks[0].uiElement.subTitle.title
      this.plRecommendList = data.blocks[0].creatives;
      this.styleRecommendTitle = data.blocks[1].uiElement.subTitle.title
      this.styleRecommend = data.blocks[1].creatives
    },
    initData() {
      this.getSwipeLists();
      this.getHomePage();
    }
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    TabBar,
    TabBarItem,
    PlayListRecommend,
    SubTitle
  },
  mounted() {
    this.initData();
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