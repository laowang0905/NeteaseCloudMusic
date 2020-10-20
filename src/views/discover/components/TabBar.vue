<template>
  <div class="tabbar">
    <template v-for="(item, index) in tabBarList">
        <TabBarItem :key="index" :item="item"></TabBarItem>
    </template>
  </div>
</template>
<script>
import TabBarItem from "./TabBarItem.vue";
export default {
  name: "tabbar",
  components: {
    TabBarItem
  },
  props: {
    tabBarList: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style lang="less" scoped>
.tabbar {
  white-space: nowrap;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>