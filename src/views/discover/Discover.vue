<template>
  <div class="discover-container">
    <van-swipe class="my-swipe" :autoplay="5000" indicator-color="#0097dd">
      <van-swipe-item v-for="(item, index) in swipeLists" :key="index">
        <img :src="item.pic" class="banner" />
      </van-swipe-item>
    </van-swipe>
    <div>aaaa</div>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from "vant";
import { reqSwipeLists } from "@/network/discoverApi";
export default {
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
    [SwipeItem.name]: SwipeItem
  },
  mounted() {
    this.initData();
  }
};
</script>
<style lang="less" scoped>
.discover-container {
  .my-swipe {
    width: 95vw;
    margin: 0 auto;
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