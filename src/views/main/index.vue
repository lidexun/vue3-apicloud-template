<template>
  <div class="main">
    <van-tabbar
      v-model="active"
      :route="false"
      placeholder
      active-color="#ee0a24"
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
</template>
<script setup>
import { ref, onMounted } from 'vue'
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
    name: 'contact',
    label: '我',
    icon: 'contact',
    to: '/user'
  }
]
const active = ref('home')
onMounted(() => {
  window.apiready = () => {
    api.setStatusBarStyle({
      style: 'dark'
    })
  }
})
</script>
