<template>
  <div class="page_null">
    <van-empty description="您的购物车还没有商品">
      <!-- <template v-slot:image>
        <van-icon name="cart-o" size="160" />
      </template> -->
      <van-button round type="danger" class="bottom-button" @click="goHomePage"
        >登陆</van-button
      >
    </van-empty>
  </div>
</template>
<script setup>
const goHomePage = () => {
  // api.execScript({
  //   script: 'app.goBackHome();'
  // })
}
</script>
<style type="text/css">
.page_null {
  display: flex;
  height: 100vh;
  flex-direction: column;
}
.page_null .text {
  font-size: 0.18rem;
  margin-bottom: 0.15rem;
}
.bottom-button {
  width: 160px;
  height: 40px;
}
</style>
