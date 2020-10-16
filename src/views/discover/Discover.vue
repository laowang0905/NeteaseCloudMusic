<template>
  <div class="discover-container">
    <van-swipe class="my-swipe" :autoplay="5000" indicator-color="#0097dd">
      <van-swipe-item v-for="(item, index) in swipeLists" :key="index">
        <img :src="item.pic" class="banner" />
      </van-swipe-item>
    </van-swipe>
    <div class="icons">
      <div class="item">
        <div class="wrap">
          <img :src="require('@/assets/img/discover/day.png')" />
        </div>
        <p>每日推荐</p>
      </div>
      <div class="item">
        <div class="wrap">
          <img :src="require('@/assets/img/discover/day.png')" />
        </div>
        <p>每日推荐</p>
      </div>
      <div class="item">
        <div class="wrap">
          <img :src="require('@/assets/img/discover/day.png')" />
        </div>
        <p>每日推荐</p>
      </div>
      <div class="item">
        <div class="wrap">
          <img :src="require('@/assets/img/discover/day.png')" />
        </div>
        <p>每日推荐</p>
      </div>
      <div class="item">
        <div class="wrap">
          <img :src="require('@/assets/img/discover/day.png')" />
        </div>
        <p>每日推荐</p>
      </div>
      <div class="item">
        <div class="wrap">
          <img :src="require('@/assets/img/discover/day.png')" />
        </div>
        <p>每日推荐</p>
      </div>
      <div class="item">
        <div class="wrap">
          <img :src="require('@/assets/img/discover/day.png')" />
        </div>
        <p>每日推荐</p>
      </div>
    </div>
  </div>
</template>
<script>
import { Swipe, SwipeItem, Tabs, Tab } from "vant";
import { reqSwipeLists } from "@/network/discoverApi";
export default {
  name: "discover",
  data() {
    return {
      swipeLists: []
    };
  },
  methods: {
    async getSwipeLists() {
      const { banners } = await reqSwipeLists({ type: 2 });
      this.swipeLists = banners;
    },
    initData() {
      this.getSwipeLists();
    }
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
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
  .icons {
    // width: 100%;
    white-space: nowrap;
    overflow-x: scroll; 
    &::-webkit-scrollbar {
      display: none;
    }
    .item {
      width: 100px;
      display: inline-block;
      .wrap {
        width: 30px;
        height: 30px;
        background-color: red;
        padding: 6px;
        border-radius: 50%;
        img {
          width: 100%;
        }
      }
      p {
        font-size: 14px;
      }
    }
  }
}
</style>