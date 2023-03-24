<template>
  <van-row type="flex" justify="center" align="center" class="page_null">
    <div class="text">您的购物车还没有商品</div>
    <van-button
      type="default"
      round
      size="small"
      text="去逛逛"
      color="#f32d2e"
      @click="goHomePage()"
    ></van-button>
  </van-row>
</template>
<script setup>
</script>
<style lang="less" scoped>
.page_null{
    height: 100vh;
    flex-direction: column;
  }
  .page_null .text{
     font-size: 18px;
     margin-bottom: 16px;
  }
</style>
