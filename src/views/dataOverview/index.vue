<script lang="ts" setup>
import menuBar from '../../Layout/components/menuBar.vue'
import TheHeaders from "../../Layout/components/theHeaders.vue";

</script>
<template>
  <div class="common-layout">
    <el-container>
      <!--      顶部-->
      <el-header>
        <the-headers></the-headers>
      </el-header>
      <!--      侧边-->
      <el-container>
          <el-aside >
              <menuBar></menuBar>
          </el-aside>
        <!--   主面板     -->
        <el-main>
        <div class="mainContainer"></div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="scss" scoped>
.common-layout{
  .el-aside{
    width:18%;
    //background-color:pink;
  }
  .mainContainer{
    height: 80%;
    width: 100%;
    background-color: #cdf2f4;
    border-radius: 5px;
  }
}

</style>