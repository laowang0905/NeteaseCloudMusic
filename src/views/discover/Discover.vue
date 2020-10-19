<template>
  <div class="discover-container">
    <van-swipe class="my-swipe" :autoplay="5000" indicator-color="#0097dd">
      <van-swipe-item v-for="(item, index) in swipeLists" :key="index">
        <img :src="item.pic" class="banner" />
      </van-swipe-item>
    </van-swipe>
    <div ref="icons" class="icons" @scroll="scroll">
      <div class="item">
        <div class="wrap">
          <img :src="require('@/assets/img/discover/day.png')" />
        </div>
        <p>1</p>
      </div>
      <div class="item">
        <div class="wrap">
          <img :src="require('@/assets/img/discover/day.png')" />
        </div>
        <p>2</p>
      </div>
      <div class="item">
        <div class="wrap">
          <img :src="require('@/assets/img/discover/day.png')" />
        </div>
        <p>3</p>
      </div>
      <div class="item">
        <div class="wrap">
          <img :src="require('@/assets/img/discover/day.png')" />
        </div>
        <p>4</p>
      </div>
      <div class="item">
        <div class="wrap">
          <img :src="require('@/assets/img/discover/day.png')" />
        </div>
        <p>5</p>
      </div>
      <div class="item">
        <div class="wrap">
          <img :src="require('@/assets/img/discover/day.png')" />
        </div>
        <p>6</p>
      </div>
      <div class="item">
        <div class="wrap">
          <img :src="require('@/assets/img/discover/day.png')" />
        </div>
        <p>7</p>
      </div>
      <div class="item">
        <div class="wrap">
          <img :src="require('@/assets/img/discover/day.png')" />
        </div>
        <p>8</p>
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
      swipeLists: [],
      // 临界值
      criticality: ""
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
    scroll(e) {
      console.log(e.target, e.target.offsetWidth)
      const x = e.target.scrollLeft;
      let flag = x > 0 && x < this.criticality ? false : true;
      this.$emit("isSwiper", flag);
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
    const icons = this.$refs.icons;
    this.criticality = icons.scrollWidth - icons.offsetWidth
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