<script setup>
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
  }
})
</script>
<template>
  <router-view />
</template>
