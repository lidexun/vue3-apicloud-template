<template>
  <div class="about" @click="closeWin">
    <h1>This is an about page</h1>
  </div>
</template>
<script setup>
import t from "../utils/utils.js";
/* eslint-disable */
const closeWin = () => {
  api.closeWin();
};
</script>
