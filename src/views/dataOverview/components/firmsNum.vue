<script lang="ts" setup>
    import {markRaw, onMounted, ref, reactive } from 'vue'
    import * as echarts from 'echarts'
    import taskOverView from "../../dataOverview/api";

    const myCharts = markRaw<any>({}) // 引入markRaw,固定图表
    const myChart = ref<HTMLElement>() // ref=myChart必须要写
    const state=reactive({
      enterpriseNum: null,
      townName:'',
    })

    // 初始化echarts图表,调用接口数据
    const initEcharts=()=>{
      // taskOverView.enterpriseDistribution(params).then((res:any)=>{
      //   console.log('111', res)
      // })

      const options={
        xAxis: {
          type: 'category',
          data: ['临平街道', '乔司街道', '南苑街道', '塘栖镇', '崇贤街道', '运河街道'],
          axisLabel: {
            interval:0,
            rotate:40
          }
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: '#eaf4fe'
          }
        }]
      }
      myCharts.value = echarts.init(myChart.value!) // 实例化一个echarts对象
      myCharts.value.setOption(options) // 使用刚指定的配置项和数据显示图表
    }

    onMounted(()=>{  // 钩子函数
      initEcharts()
    })
</script>

<template>
  <!--    这是企业分布数据-->
  <div ref="myChart" style="width: 300px;height: 400px;"></div>
</template>

