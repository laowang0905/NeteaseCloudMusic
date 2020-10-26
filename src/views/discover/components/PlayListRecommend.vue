<template>
  <div class="item-container">
    <img :src="item.image.imageUrl" />
    <p>{{item.mainTitle.title}}</p>
    <span class="count">{{playCountFormat}}</span>
  </div>
</template>
<script>
import { numFormat } from "@/utils/commonFunUtils.js";
export default {
  name: "play-list-item",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    },
    playCount: ""
  },
  computed: {
    playCountFormat() {
      return numFormat(this.playCount)
    }
  }
};
</script>
<style lang="less" scoped>
.item-container {
  // font-size: 0;
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 100px;
  // height: 174px;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
  img {
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
  }
  p {
    font-size: 16px;
    margin: 0;
    position: relative;
    left: -21px;
    top: -5px;
    width: 140px;
    height: 45px;
    white-space: normal;
    line-height: 1.4;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    transform: scale(0.7);
  }
  .count {
    position: absolute;
    top: 3px;
    right: 3px;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 2px 3px;
    border-radius: 5px
  }
}
</style>