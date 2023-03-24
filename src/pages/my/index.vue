<template>
  <div class="my">
    <van-row type="flex" align="center" class="sign_in">
      <van-icon name="manager" class="img"> </van-icon>
      <span>登陆/注册</span>
    </van-row>
    <!-- 开通vip引导 -->
    <van-row type="flex" justify="space-around" class="user_vip">
      <div class="icon_vip">精选会员</div>
      <div class="text">优选好货低至7折</div>
      <div class="btn">
        <span>开通享特权</span>
        <van-icon name="arrow"> </van-icon>
      </div>
    </van-row>
    <!-- 订单 -->
    <div class="container">
      <div class="title">
        <span>我的订单</span>
      </div>
      <div class="more">
        <span>全部订单</span>
        <van-icon name="arrow" />
      </div>
      <van-grid :border="false" class="box order_form" column-num="5">
        <van-grid-item icon="card" text="待付款"> </van-grid-item>
        <van-grid-item icon="todo-list" text="待发货"> </van-grid-item>
        <van-grid-item icon="send-gift" text="待收货"> </van-grid-item>
        <van-grid-item icon="comment" text="待评价"> </van-grid-item>
        <van-grid-item icon="gold-coin" text="售后"> </van-grid-item>
      </van-grid>
    </div>
    <!-- 钱包 -->
    <div class="container">
      <div class="title">
        <span>我的钱包</span>
      </div>
      <div class="more">
        <span>进入钱包</span>
        <van-icon name="arrow" />
      </div>
      <van-grid :border="false" class="box wallet" column-num="3">
        <van-grid-item>
          <van-row type="flex" align="center">
            <span class="text">0</span>
            <span>优惠券</span>
          </van-row>
        </van-grid-item>
        <van-grid-item>
          <van-row type="flex" align="center">
            <span class="text">0</span>
            <span>店铺会员</span>
          </van-row>
        </van-grid-item>
        <van-grid-item>
          <van-row type="flex" align="center">
            <span>分期支付</span>
          </van-row>
        </van-grid-item>
      </van-grid>
    </div>
    <!-- 工具 -->
    <div class="container">
      <div class="title">
        <span>我的工具</span>
      </div>
      <van-grid :border="false" class="box wallet" column-num="4">
        <van-grid-item>
          <van-row type="flex" align="center">
            <span class="text">0</span>
            <span>关注商品</span>
          </van-row>
        </van-grid-item>
        <van-grid-item>
          <van-row type="flex" align="center">
            <span class="text">0</span>
            <span>关注店铺</span>
          </van-row>
        </van-grid-item>
        <van-grid-item>
          <van-row type="flex" align="center">
            <span class="text">0</span>
            <span>喜欢内容</span>
          </van-row>
        </van-grid-item>
        <van-grid-item>
          <van-row type="flex" align="center">
            <span class="text">0</span>
            <span>浏览商品</span>
          </van-row>
        </van-grid-item>
      </van-grid>
      <van-row type="flex" justify="space-between" class="btn_other border_t">
        <van-col span="12" class="">
          <span class="btn_other_icon">
            <van-icon name="service"> </van-icon>
          </span>
          <span>在线客服</span>
        </van-col>
        <van-col span="12" class="">
          <span class="btn_other_icon on">
            <van-icon name="shop"> </van-icon>
          </span>
          <span>我要开店</span>
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<style lang="less" scoped>
.my{
  padding: 10px 0;
  background-color: #f6f6f6;
  min-height: 100vh;

}
.sign_in {
  padding: 15px;
  font-weight: bold;
}

.sign_in .img {
  background-color: #ccc;
  width: 45px;
  height: 45px;
  border-radius: 100%;
  color: #fff;
  display: flex;
  font-size: 22px;
  margin-right: 2px;
      display: flex;
    align-items: center;
    justify-content: center;
}

.user_vip {
  height: 65px;
  border-radius: 8px;
  background-image: linear-gradient(to left, #464541, #262523);
  color: #c2b298;
  position: relative;
  flex-direction: column;
  margin: 0 15px;
  padding: 10px 15px;
}

.user_vip .btn {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 2px;
  margin: auto 0;
  height: 25px;
  padding-left: 1px;
  padding-right: 05px;
  background-color: #e7d5af;
  color: #262523;
  border-radius: 15px;
  font-size: 12px;
      display: flex;
    align-items: center;
    justify-content: center;
}

.user_vip .text {
  font-size: 1px;
  opacity: 0.8;
}

.user_vip .icon_vip {
  font-weight: bold;
}

.container {
  margin: 16px 16px 0;
  padding: 16px;
  border-radius: 8px;
  background-color: #fff;
  position: relative;
}

.container .title {
  font-weight: bold;
}

.container .more {
  font-size: 10px;
  color: #9e9da2;
  position: absolute;
  top: 10px;
  right: 15px;
}

.container .order_form {
  color: #f32d2e;
}

.container .box > .van-grid-item > div {
  padding: 150px 0 5px;
}

.container .box .van-grid-item .van-grid-item__text {
  font-size: 10px;
}

.wallet .van-grid-item .van-row {
  flex-direction: column;
  font-size: 12px;
}

.wallet .van-grid-item .van-row .text {
  font-size: 16px;
  margin-bottom: 8px;
  font-weight: bold;
}

.btn_other {
  padding: 20px 10px;
  margin-top: 5px;
}

.btn_other .btn_other_icon {
  width: 35px;
  height: 35px;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  margin-right: 1px;
  background-color: #c5d5ee;
      display: flex;
    align-items: center;
    justify-content: center;
}

.btn_other .btn_other_icon.on {
  background-color: #f1d3d1;
}

.btn_other .van-col--12 {
  justify-content: flex-start;
      display: flex;
    align-items: center;
    justify-content: center;
}

.btn_other .van-icon {
  font-size: 18px;
  color: #fff;
}
</style>
