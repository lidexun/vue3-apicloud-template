<template>
  <div class="home">
    <!-- <van-sticky

    >
      <van-search
        disabled
        input-align="center"
        placeholder="搜索商品,共9999999款好物"
      />
    </van-sticky> -->
    <!-- swipe -->
    <van-swipe
      class="home_swipe"
      :autoplay="30000"
      lazy-render
      indicator-color="#fff"
    >
      <van-swipe-item v-for="image in banner" :key="image">
        <van-image width="100%" height="100%" :src="image" fit="cover" />
      </van-swipe-item>
    </van-swipe>
    <!-- service -->
    <van-row class="home_service" justify="center" align="center">
      <van-col
        class="home_service_col"
        span="8"
        v-for="(item, index) in service"
        :key="index"
      >
        <van-icon :name="item.image" size="16" />
        <span class="text" v-text="item.text"></span>
      </van-col>
    </van-row>
    <!-- wrapper -->
    <van-row class="home_wrapper">
      <van-col
        class="home_wrapper_col"
        v-for="(item, index) in wrapper"
        :key="index"
        span="5"
      >
        <van-image width="100%" :src="item.image" />
        <div class="text" v-text="item.text"></div>
      </van-col>
    </van-row>
    <!-- freshman -->
    <div class="home_freshman">
      <div class="module_title">
        <span class="text">新人专享礼</span>
      </div>
      <van-row class="home_freshman_row">
        <van-col class="left" span="12">
          <div class="name">新人专享礼包</div>
          <div class="hongbao">
            <van-image
              width="129"
              :src="require('../../assets/image/home/freshman/hongbao.png')"
              fit="cover"
            />
            <div class="animate"></div>
          </div>
        </van-col>
        <van-col span="12" class="right">
          <div class="activity">
            <div class="activity_box">
              <div class="title">福利社</div>
              <div class="subtitle">今日特价</div>
              <van-image
                width="100"
                :src="require('../../assets/image/home/freshman/1.png')"
                fit="cover"
                class="pic"
              />
              <div class="discount">
                <div>¥16.9</div>
                <div class="line">¥19.9</div>
              </div>
            </div>
            <div class="activity_box">
              <div class="title">新人拼团</div>
              <van-tag type="primary" color="#cbb693">1元起包邮</van-tag>
              <van-image
                width="100"
                :src="require('../../assets/image/home/freshman/2.png')"
                fit="cover"
                class="pic"
              />
              <div class="discount">
                <div>¥49</div>
                <div class="line">¥159</div>
              </div>
            </div>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
const bannerImg = require('../../assets/image/home/banner/0.png')
const bannerImg1 = require('../../assets/image/home/banner/1.png')
export default {
  setup() {
    const banner = [bannerImg, bannerImg1]
    const state = reactive({
      active: 0,
      banner,
      wrapper: [
        {
          text: '新品首发',
          image: require('../../assets/image/home/wrapper/0.png')
        },
        {
          text: '居家生活',
          image: require('../../assets/image/home/wrapper/1.png')
        },
        {
          text: '服饰鞋包',
          image: require('../../assets/image/home/wrapper/2.png')
        },
        {
          text: '美食酒水',
          image: require('../../assets/image/home/wrapper/3.png')
        },
        {
          text: '个护清洁',
          image: require('../../assets/image/home/wrapper/4.png')
        },
        {
          text: '母婴亲子',
          image: require('../../assets/image/home/wrapper/5.png')
        },
        {
          text: '运动旅行',
          image: require('../../assets/image/home/wrapper/6.png')
        },
        {
          text: '数码家电',
          image: require('../../assets/image/home/wrapper/7.png')
        },
        {
          text: '全球特色',
          image: require('../../assets/image/home/wrapper/8.png')
        },
        {
          text: '好货抄底',
          image: require('../../assets/image/home/wrapper/9.gif')
        }
      ],
      service: [
        {
          text: '网易自营品牌',
          image: require('../../assets/image/home/service/0.png')
        },
        {
          text: '30天无忧退货',
          image: require('../../assets/image/home/service/1.png')
        },
        {
          text: '48小时快速退款',
          image: require('../../assets/image/home/service/2.png')
        }
      ]
    })
    return state
  },
  methods: {}
}
</script>
<style lang="less" scoped>
.home {
  min-height: 100vh;
  background-color: var(--van-gray-1);
}
.module_title {
  width: 100%;
  height: 45px;
  line-height: 45px;
  padding: 0 var(--van-padding-sm);
  background: #fff;
  overflow: hidden;
  font-size: 16px;
}
.header {
  background: #fff;
  padding: 16px 30px;
  .logo_col {
    display: flex;
    justify-content: center;
  }
  .logo {
    width: 138px;
  }
  .search_col {
    flex: 1;
    // padding-left: 20px;
    // padding-right: 16px;
  }
  .search {
    background-color: #ededed;
    border-radius: 4px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #666;
  }
  .login_btn {
    width: 74px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #dd1a21;
    border: 1px solid #dd1a21;
    border-radius: 8px;
    font-size: 24px;
  }
}
.cate_tag .van-tabs__wrap {
  height: 60px;
}
.home_swipe {
  min-height: 185px;
  line-height: 0;
  /deep/.van-swipe__indicator {
    width: 20px;
    height: 2px;
    border-radius: 0;
  }
}
.home_service {
  height: 36px;
  padding: 0 var(--van-padding-md);
  font-size: 12px;
  background-color: #fff;

  .home_service_col {
    display: flex;
    align-items: center;
    justify-content: center;
    .text {
      margin-left: 8px;
    }
  }
}
.home_wrapper {
  background-color: #fff;
  padding-bottom: 10px;

  .home_wrapper_col {
    max-width: 20%;
    flex: 0 0 20%;
    padding: var(--van-padding-base) var(--van-padding-xs);
  }
  .text {
    font-size: 12px;
    margin-top: 5px;
    text-align: center;
  }
}
.home_freshman {
  margin-top: 10px;
  background-color: #fff;
  .module_title {
    text-align: center;
    .text {
      position: relative;
      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 24px;
        height: 1px;
        background-color: #333;
      }
      &::before {
        left: -40px;
      }
      &::after {
        right: -40px;
      }
    }
  }
  .home_freshman_row {
    margin-top: 10px;
    height: 217px;
    padding: 0 15px 15px;
    .left {
      background-color: #f9e9cf;
      position: relative;
      .name {
        padding-top: 15px;
        padding-left: 15px;
        font-size: 16px;
      }
      .hongbao {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: -30px;
        margin: auto;
        width: max-content;
        height: max-content;
        .animate {
          position: absolute;
          width: 15px;
          height: 10px;
          bottom: 14px;
          right: 31px;
          background-image: url('../../assets/image/home/freshman/animate.png');
          background-size: 100% 100%;
          animation: carousel 1s linear infinite;
        }
      }
    }
    .right {
      padding-left: 4px;
    }
  }
  .activity {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    .activity_box {
      width: 100%;
      height: calc(50% - 2px);
      border-radius: 4px;
      font-size: 12px;
      padding-top: 10px;
      padding-left: 15px;
      position: relative;
      &:first-child {
        background-color: #fbe2d3;
      }
      &:last-child {
        background-color: #ffecc2;
      }
      .title {
        font-size: 16px;
        line-height: 1.5;
      }
      .subtitle {
        color: #7f7f7f;
      }
      .pic {
        position: absolute;
        right: 0;
        bottom: 0;
      }
      .discount {
        position: absolute;
        top: 10px;
        right: 15px;
        width: 40px;
        height: 40px;
        border-radius: 100%;
        opacity: 0.8;
        color: #fff;
        background-color: #f59524;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        .line {
          font-size: 10px;
          text-decoration: line-through;
        }
      }
    }
  }
}
.category_hot {
  margin-top: 20px;
}
@keyframes carousel {
  0% {
    background-image: url('../../assets/image/home/freshman/animate_1.png');
  }
  50% {
    background-image: url('../../assets/image/home/freshman/animate_2.png');
  }
  100% {
    background-image: url('../../assets/image/home/freshman/animate.png');
  }
}
</style>

<!-- <template>
<van-search v-model="value" placeholder="请输入搜索关键词" />
<van-swipe :autoplay="5000" lazy-render>
  <van-swipe-item v-for="image in images" :key="image">
    <img :src="image" style="width: 100%" />
  </van-swipe-item>
</van-swipe>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const images = [
    'https://yanxuan.nosdn.127.net/977365d7a7c596f410fec26d68fb1553.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
    'https://yanxuan.nosdn.127.net/static-union/1652253399c6f282.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
]
 const value = ref('')
</script>

<style>

</style> -->
