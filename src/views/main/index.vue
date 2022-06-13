<template>
  <main class="main">
    <header
      class="border_b"
      ref="header"
      :style="{ 'padding-top': safeArea.top + 'px' }"
    >
      <van-row
        type="flex"
        justify="center"
        class="home_search"
        v-show="active === 'home'"
      >
        <div class="home_search_icon">
          <van-icon name="scan" class="icon" />
        </div>
        <van-search
          v-model="search"
          placeholder="搜索9999999好物"
          input-align="center"
          disabled
        />
        <div class="home_search_icon">
          <van-icon name="chat-o" class="icon" />
        </div>
      </van-row>
      <van-nav-bar
        class="border_b"
        v-show="active === 'sort'"
        :title="'分类'"
        :border="false"
      />
      <van-nav-bar
        class="border_b"
        v-show="active === 'cart'"
        :title="'购物车'"
        :border="false"
      />
    </header>
    <div class="view"></div>
    <div class="border_t" ref="footer">
      <van-tabbar
        v-model="active"
        :route="false"
        placeholder
        active-color="#ee0a24"
        :fixed="false"
        :style="{ 'padding-bottom': safeArea.bottom + 'px' }"
        :border="false"
        @change="tabbarChange"
      >
        <van-tabbar-item
          v-for="(item, index) in tabbars"
          :key="item.name"
          :name="item.name"
          :icon="item.icon"
        >
          {{ item.label }}
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </main>
</template>
<script setup>
import { ref, reactive, onMounted, nextTick } from 'vue'
import { openFrame } from './../../utils/utils'
const tabbars = [
  {
    name: 'home',
    label: '首页',
    icon: 'shop-o',
    to: '/home'
  },
  {
    name: 'sort',
    label: '分类',
    icon: 'apps-o',
    to: '/sort'
  },
  {
    name: 'cart',
    label: '购物车',
    icon: 'cart-o',
    to: '/cart'
  },
  {
    name: 'user',
    label: '我',
    icon: 'contact',
    to: '/user'
  }
]
const active = ref('home')
const search = ref('')
let safeArea = reactive({
  top: 44,
  bottom: 30
})
const header = ref(null)
const footer = ref(null)

const tabbarChange = async (name) => {
  /*隐藏全部窗口*/
  for (var i = 0; i < tabbars.length; i++) {
    api.setFrameAttr({
      name: tabbars[i].name,
      hidden: true
    })
  }
  const index = tabbars.findIndex((item) => item.name === name)
  await nextTick()
  /* DOM更新 */
  const item = tabbars[index]
  const data = {
    name: item.name,
    url: item.to,
    rect: {
      marginLeft: 0,
      marginTop: name === 'user' ? 0 : header.value.offsetHeight,
      marginBottom: footer.value.offsetHeight,
      marginRight: 0
    },
    pageParam: {
      index
    },
    bounces: true,
    vScrollBarEnabled: true,
    hScrollBarEnabled: true,
    useWKWebView: true
  }
  openFrame(data)
}
onMounted(() => {
  window.apiready = () => {
    setTimeout(() => {
      api.removeLaunchView({
        animation: {
          type: 'fade',
          duration: 300
        }
      })
    }, 2000)
    api.setStatusBarStyle({
      style: 'dark'
    })
    safeArea.top = api.safeArea.top
    safeArea.bottom = api.safeArea.bottom
    tabbarChange('home')
  }
})
</script>
<style lang="less" scoped>
.van-search {
  flex: 1;
}
.home_search_icon {
  width: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    font-size: 22px;
  }
}
.main {
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  .view {
    flex: 1;
  }
}
</style>
