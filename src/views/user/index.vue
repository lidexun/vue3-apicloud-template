<template>
  <div class="user">
    <van-row type="flex" align="center" class="sign_in">
      <van-icon name="manager" class="img" />
      <span>登陆/注册</span>
    </van-row>
    <!-- 订单 -->
    <div class="container">
      <div class="title">
        <span>我的订单</span>
      </div>
      <div class="more flex_center">
        <span>全部订单</span>
        <van-icon name="arrow" />
      </div>
      <van-grid :border="false" class="box order_form" column-num="5">
        <van-grid-item icon="card" text="待付款" />
        <van-grid-item icon="todo-list" text="待发货" />
        <van-grid-item icon="send-gift" text="待收货" />
        <van-grid-item icon="comment" text="待评价" />
        <van-grid-item icon="gold-coin" text="退款/售后" />
      </van-grid>
    </div>
    <!-- 钱包 -->
    <div class="container">
      <div class="title">
        <span>我的钱包</span>
      </div>
      <div class="more flex_center">
        <span>进入钱包</span>
        <van-icon name="arrow" />
      </div>
      <van-grid :border="false" class="box wallet" column-num="3">
        <van-grid-item>
          <van-row type="flex" align="center">
            <div class="text">0</div>
            <div>优惠券</div>
          </van-row>
        </van-grid-item>
        <van-grid-item>
          <van-row type="flex" align="center">
            <div class="text">0</div>
            <div>店铺会员</div>
          </van-row>
        </van-grid-item>
        <van-grid-item>
          <van-row type="flex" align="center">
            <div class="text">0.00</div>
            <div>分期支付</div>
          </van-row>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="cell">
      <van-cell-group>
        <van-cell title="浏览记录" is-link />
        <van-cell title="我的客服" is-link />
        <van-cell title="系统设置" is-link />
      </van-cell-group>
      <br />
      <van-button type="danger" round size="small" block>退出登陆</van-button>
    </div>
  </div>
</template>
<script setup>
window.apiready = () => {
  document.querySelector('.user').style.paddingTop = api.safeArea.top + 'px'
}
</script>
<style lang="less" scoped>
.user {
  min-height: 100vh;
  background-color: var(--van-gray-1);
}
.sign_in {
  padding: 15px;
  font-weight: bold;
  .img {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ccc;
    width: 45px;
    height: 45px;
    border-radius: 100%;
    color: #fff;
    display: flex;
    font-size: 22px;
    margin-right: 20px;
  }
}
.container {
  margin: 15px 15px 0;
  padding: 10px 10px;
  border-radius: 5px;
  background-color: #fff;
  position: relative;
  .title {
    font-weight: bold;
  }
  .more {
    font-size: 12px;
    color: #9e9da2;
    position: absolute;
    top: 10px;
    right: 15px;
  }
  .order_form {
    color: #f32d2e;
  }
  .box {
    /deep/.van-grid-item > div {
      /*margin-top: 0.1rem;*/
      padding: 15px 0 5px;
    }
  }
}
.wallet /deep/ .van-row {
  flex-direction: column;
  font-size: 12px;
  .text {
    font-size: 16px;
    margin-bottom: 8px;
    font-weight: bold;
  }
}
.cell {
  border-radius: 8px;
  padding: 15px;
}
</style>
