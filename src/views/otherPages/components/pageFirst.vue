<template>
  <div class="minContainer">
    <!-- 题头 -->
  <div class="pageTitle">
    <span>好差评</span>
    <span>12345</span>
  </div>
  <!-- 好差评图表 -->
   <div class="chartContainer">
    <zhuCharts ref="zhuCharts"></zhuCharts>
   </div>
   <!-- 评分排行榜 -->
   <div class="rankContainer">
    评分排行榜
   </div>
   <!-- 环形图 -->
  <div class="demo-progress">
    <el-row>
    <el-progress type="circle" :percentage="99.9" />
    <el-progress type="circle" :percentage="0.1" />
    <el-progress type="circle" :percentage="0" />
    </el-row>
  </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import zhuCharts from './zhuCharts.vue'

// const zhuCharts=ref()

</script>
<style scoped>
.minContainer{
  background-color: aqua;
}
.pageTitle{
  background-color: pink;
}
.chartContainer{
  background-color: aquamarine;
}
.rankContainer{
  background-color: blueviolet;
}
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
.demo-progress .el-progress--circle {
  margin-right: 15px;
}
</style>