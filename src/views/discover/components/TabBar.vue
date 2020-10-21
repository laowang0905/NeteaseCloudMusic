<template>
  <div class="container">
    <slot name="title"></slot>
    <div class="tabbar" @touchmove="handleTouchMove" @touchend="handleTouchEnd" ref="tabbar">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "tabbar",
  methods: {
    handleTouchMove() {
      const tabbar = this.$refs.tabbar;
      const x = tabbar.scrollWidth - tabbar.offsetWidth;
      if (tabbar.scrollLeft > 0 && tabbar.scrollLeft < x) {
        this.$bus.$emit("isSwiper", false);
      } else {
        this.$bus.$emit("isSwiper", true);
      }
    },
    handleTouchEnd() {
      this.$bus.$emit("isSwiper", true);
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