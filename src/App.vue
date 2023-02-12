
<template>
  <div>
    <router-link :to="{name:'Login'}">登录</router-link>
    <router-link :to="{name:'Home'}">首页</router-link>
    <router-link :to="{name:'netClassManage'}">网络课程管理</router-link>
    <router-link :to="{name:'dataOverview'}">数据总览</router-link>

    <router-view></router-view>
      <!--    vue中routerlink是实现路由之间的跳转
      router-view当路由path与访问地址相符时，会将指定的组件替换该router-view-->
  </div>

  <div id="app">
    
  </div>
 </template>

<script lang="ts" setup>

</script>

<style lang="scss">
// *{
//   padding: 0px;
//   margin: 0px;
// }

// html,body,#app{
//   width: 100%;
//   height: 100%;
// }
</style>
