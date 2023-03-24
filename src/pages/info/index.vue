<template>
  <main class="main">
    <van-cell-group>
      <van-cell v-for="item in list" :title="item.title" icon="checked">
        <template #left-icon>
          <van-icon name="search" class="search-icon" />
        </template>
      </van-cell>
    </van-cell-group>
  </main>
</template>
<script setup>
import { openWin } from '@/utils'
// console.log(process.env);
const list = ref([
  {
    title: '基于Vue-cli5'
  },
  {
    title: 'Vue3 + Vue-router6 + Vant UI'
  },
  {
    title: 'Vue3 自动导入composition api'
  },
  {
    title: 'Vue-router根据文件系统生成路由地址'
  },
  {
    title: '移动端适配方案(vw)'
  },
  {
    title: 'Less预处理'
  },
  {
    title: 'Axios封装与配置'
  }
])
</script>
<style lang="less" scoped></style>
