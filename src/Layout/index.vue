<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px" >
          <menuBar></menuBar>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import menuBar from './components/menuBar.vue'

</script>

<style lang="scss">
.common-layout{
  display: flex;
  height: 100vh;
  .el-header{
    background-color: pink;
    text-align: center;
    line-height: 60px;
  }
  .el-aside{
    width: 18%;
    background-color: #666;
    //text-align: center;
    line-height: 200px;
  }
  .el-main{
    background-color: #999;
  }

}


</style>
