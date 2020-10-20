<template>
  <div class="item-container">
    <div class="wrap">
      <img :src="require(`@/assets/img/discover/${item.icon}`)" />
    </div>
    <p>{{item.text}}</p>
  </div>
</template>
<script>
export default {
  name: 'tabbar-item',
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  }
};
</script>

<style lang="less" scoped>
.item-container {
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
</style>