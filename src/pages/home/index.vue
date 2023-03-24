
<script setup>
const images = ref([
  "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
  "https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
]);
let loading = ref(false);
let finished = ref(false);
let list = reactive([]);
function onLoad() {
  setTimeout(function () {
    for (var i = 0; i < 10; i++) {
      list.push(list.length + 1);
    }

    // 加载状态结束
    loading = false;

    // 数据全部加载完成
    if (list.length >= 40) {
      finished = true;
    }
  }, 1000);
}
</script>
<template>
  <van-swipe class="my-swipe" style="height: 150px" vertical>
    <van-swipe-item>1</van-swipe-item>
    <van-swipe-item>2</van-swipe-item>
    <van-swipe-item>3</van-swipe-item>
    <van-swipe-item>4</van-swipe-item>
  </van-swipe>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="我已经到底了"
    @load="onLoad"
  >
    <van-grid class="home_goods" :border="false" :column-num="2">
      <van-grid-item default v-for="item in list" :key="item">
        <div class="home_goods_item">
          <van-image
            fit="cover"
            class="img"
            width="100%"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg"
          >
          </van-image>
          <div class="text van-multi-ellipsis--l2">
            Adidas阿迪达斯Superstar经典款贝壳头男女运动板鞋小白鞋钻闪F33889
            金标C77124/C77154升级版FU7712/EG4958
          </div>
          <div class="current">
            <span>319</span>
          </div>
        </div>
      </van-grid-item>
    </van-grid>
  </van-list>
</template>
<style lang="less" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.home_swipe {
  border-radius: 8px;
  overflow: hidden;
  margin: 0 8px;
  height: 200px;
}

.home_goods {
  // padding: 0 8px;
}

.home_goods_item,
.home_goods_img,
.van-grid-item__content {
  background-color: transparent;
}

.van-grid-item__content {
  padding: 0;
}

.home_goods_item {
  height: 250px;
  border-radius: 8px;
  background-color: #fff;
  // margin: 8px 8px 0;
  overflow: hidden;
  border: 1px solid #ececec;
}

.home_goods_item .text {
  font-size: 14px;
  height: 36px;
  padding: 2px;
}

.home_goods_item .img {
  height: 200px;
}

.home_goods_item .current {
  color: #f00;
  font-size: 16px;
  margin: 8px;
}

.home_goods_item .current:before {
  content: "¥";
  font-size: 12px;
}

.home_goods_item .current span {
  font-weight: bold;
  margin-left: 10px;
}
.floor {
  flex-wrap: wrap;
  padding: 8px;
  background-color: #fff;
}
.floor .floor_item {
  margin: 10px 0;
}
.floor .floor_item img {
  border-radius: 100%;
}
.floor .floor_item .text {
  color: #666;
  margin-top: 5px;
  font-size: 12px;
}
.list_title {
  background-color: transparent;
  margin-top: 10px;
}
</style>
