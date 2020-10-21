<template>
  <div class="item-container">
    <img :src="item.image.imageUrl" />
    <p>{{item.mainTitle.title}}</p>
  </div>
</template>
<script>
export default {
  name: "play-list-item",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style lang="less" scoped>
.item-container {
  // font-size: 0;
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
}
</style>