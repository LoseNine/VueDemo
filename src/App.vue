<template>
  <div class="app-container">

    <!-- 顶部 Header 区域 -->
    <mt-header  title="Vue Demo">
    </mt-header>


    <!-- 中间的 路由 router-view 区域 -->
    <transition mode="out-in">
      <router-view></router-view>
    </transition>


    <!-- 底部 Tabbar 区域 -->
    <mt-tabbar fixed="true" >
      <mt-tab-item class="mt-tab-item" id="首页">
        <img slot="icon" src="./assets/images/menu1(1).png">
        <router-link to="/home">首页</router-link>
      </mt-tab-item>
      <mt-tab-item id="消息">
        <img slot="icon" src="./assets/images/menu2.png">
        <router-link to="/data">消息</router-link>
      </mt-tab-item>
      <mt-tab-item id="购物车">
        <img slot="icon" src="./assets/images/menu3.png">
        <router-link to="/cart">购物车</router-link>
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="./assets/images/menu4.png">
        <router-link to="/me">我的</router-link>
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>

<script>

</script>


<style lang="css" scoped>
  .v-enter{
    opacity: 0;
    transform: translateX(100%);
}
  .v-leave-to{
    opacity: 0;
    transform: translateX(-100%);
  }

  .v-enter-active,.v-leave-active{
    transition: all 0.5s ease;
  }
</style>
