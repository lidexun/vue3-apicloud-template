<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <button @click="openwin">openwin</button>
  </div>
</template>

<script>
import utils from '../../utils/utils.js'
export default {
  name: 'HomeView',
  methods: {
    openwin() {
      utils.openWin({
        url: '/about'
      })
    }
  }
}
</script>
