<script lang="ts" setup>
// 引入内容=> 实例化一个echarts对象 =>初始化图表并调用接口
import {reactive, markRaw, onMounted, ref} from 'vue'
import taskOverView from "../api";
import * as echarts from "echarts";

    const myCharts=markRaw<any>({})
    const myChart=ref<HTMLElement>()
    const initType=()=>{
      // taskOverView.totalPollutant().then((res)=>{

      // })
      const options = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048, name: '其它' },
              { value: 735, name: '土壤' },
              { value: 580, name: '水' },
              { value: 484, name: '大气' },
            ]
          }
        ]
      }
      myCharts.value = echarts.init(myChart.value!) // 实例化一个echarts对象
      myCharts.value.setOption(options)
    }
    onMounted(()=>{
      initType()
    })
</script>

<template>
  <!--    这是重点排污单位-->
  <div ref="myChart" style="width: 250px;height: 500px"></div>
</template>