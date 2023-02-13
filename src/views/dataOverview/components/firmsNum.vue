<template>
<!--    这是企业分布数据-->
  <div ref="myChart" style="width: 100%"></div>
</template>
<script lang="ts">
import {markRaw, onMounted, ref} from 'vue'
import * as echarts from 'echarts'
import taskOverView from "../../dataOverview/api";
export default({
  setup(params:any){
    const myCharts = markRaw<any>({}) // 引入markRaw,固定图表
    const charts=ref({})

    // 初始化echarts图表,调用接口数据
    const initEcharts=()=>{
      taskOverView.enterpriseDistribution(params).then((res:any)=>{
        console.log('111', res)
      })
    }
    onMounted(()=>{
      // 先实例化一个echarts对象
      myCharts.value = markRaw(echarts.init(charts.value!))
      initEcharts()
    })

    const options={
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }]
    }
    // myCharts.value.setOption(options) //
    return{
      initEcharts, // 初始化函数需要return出去
    }
  },


})



</script>

<style lang="scss" scope></style>
