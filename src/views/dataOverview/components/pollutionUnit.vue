<script lang="ts" setup>
import {ref, markRaw,onMounted, reactive} from 'vue'
import * as echarts from 'echarts'

const myCharts=markRaw<HTMLElement>({})
const myChart=ref<HTMLElement>()

const state=reactive({
  enterpriseNum: null,
  townName: ""
})

// 初始化echarts图表，调用接口数据
const initCharts=()=>{

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
          { value: 1048, name: '重点排污' },
          { value: 735, name: '非重点排污' },
        ]
      }
    ]
  }
  myCharts.value=echarts.init(myChart.value!)// 实例化一个echarts对象
  myCharts.value.setOption(options)
}
onMounted(()=>{
  initCharts()
})

</script>

<template>
  <!--    这是重点排污单位-->
  <div ref="myChart" style="width: 250px;height: 500px"></div>
</template>