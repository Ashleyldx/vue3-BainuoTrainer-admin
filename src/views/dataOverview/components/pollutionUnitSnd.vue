<template>

  <!--    这是重点排污单位-->
  <div ref="myCharts" style="width: 30%"></div>
</template>
<script lang="ts">
// 引入内容=> 实例化一个echarts对象 =>初始化图表并调用接口
import {reactive, markRaw} from 'vue'
import taskOverView from "../api";

export default({
  name:'',
  setup(){
    const myCharts=markRaw<any>({})

    const initType=()=>{
      taskOverView.totalPollutant().then((res)=>{

      })
    }
    const option = {
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
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ]
        }
      ]
  }
  return{
    initType
  }

  }
})


</script>