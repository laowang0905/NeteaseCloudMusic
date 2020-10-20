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
  width: 70px;
  display: inline-block;
  .wrap {
    width: 30px;
    height: 30px;
    background-color: rgb(241, 68, 68);
    padding: 6px;
    border-radius: 50%;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
  p {
    font-size: 14px;
    text-align: center;
    margin: 8px;
  }
}
</style>