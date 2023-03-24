<template>
  <div id="main">
    <header
      id="header"
      class="border_b"
      ref="header"
      :class="{ on: tabbar.active == 3 }"
    >
      <van-row
        type="flex"
        justify="center"
        class="home_search"
        v-show="tabbar.active == 0"
      >
        <van-icon
          name="scan"
          class="van-row--flex van-row--justify-center van-row--align-center"
        >
        </van-icon>
        <van-search
          v-model="search"
          placeholder="请输入搜索关键词"
          input-align="center"
          disabled
        >
        </van-search>
        <van-icon
          name="chat-o"
          class="van-row--flex van-row--justify-center van-row--align-center"
        >
        </van-icon>
      </van-row>
      <van-nav-bar
        :title="tabbar.list[tabbar.active].text"
        :border="false"
        v-show="tabbar.active == 1 || tabbar.active == 2"
      />
    </header>
    <div id="content"></div>
    <footer id="footer" class="border_t" ref="footer">
      <van-tabbar
        v-model="tabbar.active"
        :fixed="false"
        :border="false"
        active-color="#ee0a24"
        @change="change"
      >
        <van-tabbar-item icon="wap-home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="apps-o">发现</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
        <van-tabbar-item icon="user-o">我</van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>
<script setup>
import { openWin, openFrame } from "@/utils";
const tabbar = reactive({
  active: 0,
  list: [
    {
      icon: "wap-home-o",
      text: "首页",
      url: "home",
      name: "home",
    },
    {
      icon: "app-s",
      text: "info",
      url: "info",
      name: "info",
    },
    {
      icon: "shopping-cart-o",
      text: "购物车",
      url: "shopping_cart",
      name: "shopping_cart",
    },
    {
      icon: "user-o",
      text: "我",
      url: "my",
      name: "my",
    },
  ],
});
let search = ref("");
let header = ref(null);
let footer = ref(null);

onMounted(() => {
  window.apiready = () => {
    $api.fixStatusBar($api.byId("header"));
    $api.fixTabBar($api.byId("footer"));
    change(tabbar.active);
  };
});
let change = async function (active) {
  for (var i = 0; i < tabbar.list.length; i++) {
    api.setFrameAttr({
      name: tabbar.list[i].name,
      hidden: true,
    });
  }
  await nextTick();
  var top = (active === tabbar.list.length - 1) ? 0 : header.value.offsetHeight;
  var bottom = footer.value.offsetHeight;
  var data = {
    name: tabbar.list[tabbar.active].name,
    url: "/" + tabbar.list[tabbar.active].name,
    rect: {
      marginLeft: 0,
      marginTop: top,
      marginBottom: bottom,
      marginRight: 0,
    },
    pageParam: {
      active,
    },
    bounces: tabbar.active == 1 ? false : true,
    vScrollBarEnabled: true,
    hScrollBarEnabled: true,
    useWKWebView: true,
  };
  openFrame(data);
};
</script>
<style lang="less" scoped>
#header,#footer{
  background-color: #fff;
}

#header.on {
  background-color: transparent;
}

#header.on::after {
  opacity: 0;
}

#header .van-nav-bar,
#header .van-search {
  background-color: transparent;
}

#header .van-search {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}

#header .home_search .van-icon {
  display: flex;
  font-size: 22px;
  width: 40px;
}
#main {
  display: flex;
  flex-direction: column;
  height: 100vh;
  #content {
    flex: 1;
  }
}
[class*="border"] {
  position: relative;
}
.border_t::before,
.border_b::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 1px;
  width: 100%;
}
.border_t::before {
  top: 0;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(60%, rgba(0, 0, 0, 0.05)),
    color-stop(0%, rgba(0, 0, 0, 0))
  );
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.05) 60%,
    rgba(0, 0, 0, 0) 0%
  );
}
.border_b::after {
  bottom: 0;
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(60%, rgba(0, 0, 0, 0.05)),
    color-stop(0%, rgba(0, 0, 0, 0))
  );
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.05) 60%,
    rgba(0, 0, 0, 0) 0%
  );
}
.border_b_no li:last-child::after,
.border_t_no li::before {
  opacity: 0;
}
</style>
