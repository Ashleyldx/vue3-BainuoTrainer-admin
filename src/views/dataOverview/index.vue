<script lang="ts" setup>
import menuBar from '../../Layout/components/menuBar.vue'
import TheHeaders from "../../Layout/components/theHeaders.vue"
import firmsNum from "./components/firmsNum.vue";

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
        <div class="mainContainer">
          <el-row>
              <el-card class="cardFirst">
                <div class="cardFirstTitle">企业分布</div>
<!--                <firmsNum></firmsNum>-->
              </el-card>
              <el-card class="cardSecond">
                <div class="cardFirstTitle">重点排污单位</div>
                <el-row>
                  <el-col :span="10">监管级别统计</el-col>
                  <el-col :span="10">监管类型统计</el-col>
                </el-row>
              </el-card>
          </el-row>
        </div>
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
    //background-color: #cdf2f4;
    border-radius: 5px;
    .cardFirst{
      width: 35%;
      margin: auto 18px;
      height: 600px;
    }
    .cardSecond{
      width: 55%;
      height: 600px;
    }
  }
}

</style>