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
    display: inline-block;
    width: 100px;
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
      font-size: 14px;
      position: relative;
      left: -21px;
      top: -20px;
      width: 145px;
      white-space: normal;
      line-height: 1.5;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      transform: scale(.7);
    }
  }
</style>