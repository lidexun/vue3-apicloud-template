<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="a" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import t from "../utils/utils.js";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  setup() {
    const a = () => {
      alert(t.getNetworkIp + "/about")
      // eslint-disable-next-line
      api.openWin({
        name: "page1",
        url: t.getNetworkIp() + "/about",
        pageParam: {
          name: "test",
        },
      });
    };
    return {
      a,
    };
  },
};
</script>
