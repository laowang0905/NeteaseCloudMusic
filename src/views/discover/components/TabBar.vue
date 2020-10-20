<template>
  <div class="tabbar" @scroll="tabBarScroll" ref="tabbar">
    <slot></slot>
    <!-- <template v-for="(item, index) in tabBarList">
      <TabBarItem :key="index" :item="item"></TabBarItem>
    </template> -->
  </div>
</template>
<script>
export default {
  name: "tabbar",
  // props: {
  //   tabBarList: {
  //     type: Array,
  //     default() {
  //       return [];
  //     }
  //   }
  // },
  data() {
    return {
      scrollLeft: ""
    };
  },
  methods: {
    tabBarScroll(e) {
      this.scrollLeft = e.target.scrollLeft;
    }
  },
  mounted() {
    const tabbar = this.$refs.tabbar;
    this.criticality = tabbar.scrollWidth - tabbar.offsetWidth;
  },
  watch: {
    // 监听滑动停止
    scrollLeft(newVal, oldVal) {
      clearTimeout(this.timer);
      this.$bus.$emit("isSwiper", false);
      this.timer = setTimeout(() => {
        this.$bus.$emit("isSwiper", true);
      }, 50);
    }
  }
};
</script>
<style lang="less" scoped>
.tabbar {
  white-space: nowrap;
  overflow-x: scroll;
  margin: 10px 0;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>