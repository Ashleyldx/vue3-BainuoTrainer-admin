<template>
  <div class="echart" ref="myChart"></div>
</template>

<script lang="ts" setup>
import { inject, ref, onMounted, defineProps, watch, onBeforeUnmount, markRaw } from 'vue'
const echarts = inject('echarts')

// 获取DOM和父组件并定义myChart用于初始化函数
const myChart = ref<HTMLElement>()
const props = defineProps({
  option:Object,
})

// 重绘函数图表
const resizeHandler = () => {
  myChart.resize()
}

// 设置防抖，保证无论拖动窗口大小，只执行一次获取浏览器宽高的方法
// const debounce = (fun, delay) => {
//   let timer;
//   return function () {
//     if (timer) {
//       clearTimeout(timer)
//     }
//     timer = setTimeout(() => {
//       fun()
//     }, delay)
//   }
// }
// const cancelDebounce = debounce(resizeHandler, 500)

// 页面成功渲染，开始绘制图表
onMounted(() => {
  // 配置为svg形式，预防页面缩放而出现模糊问题；图表过于复杂时使用canvas===>事件预览两个柱状图样式问题
  // myChart = echarts.init(chartDom.value,null,{renderer:'svg'})
  // myChart.setOption(props.option, true)
  // 自适应不同屏幕时改变图表尺寸
  // window.addEventListener('resize', cancelDebounce)
})

const setOption = {
  dataset: {
    source: [
      ['score', 'amount', 'product'],
      [89.3, 58212, 'Matcha Latte'],
      [57.1, 78254, 'Milk Tea'],
      [74.4, 41032, 'Cheese Cocoa'],
      [50.1, 12755, 'Cheese Brownie'],
      [89.7, 20145, 'Matcha Cocoa'],
      [68.1, 79146, 'Tea'],
      [19.6, 91852, 'Orange Juice'],
      [10.6, 101852, 'Lemon Juice'],
      [32.7, 20112, 'Walnut Brownie']
    ]
  },
  grid: { containLabel: true },
  xAxis: { name: 'amount' },
  yAxis: { type: 'category' },
  visualMap: {
    orient: 'horizontal',
    left: 'center',
    min: 10,
    max: 100,
    text: ['High Score', 'Low Score'],
    dimension: 0,
    inRange: {
      color: ['#65B581', '#FFCE34', '#FD665F']
    }
  },
  series: [
    {
      type: 'bar',
      encode: {
        // Map the "amount" column to X axis.
        x: 'amount',
        // Map the "product" column to Y axis
        y: 'product'
      }
    }
  ]
};

// 页面销毁前，销毁事件和实例
// onBeforeUnmount(() => {
//   window.removeEventListener('resize', cancelDebounce)
//   myChart.dispose()
// })

// 监听图表数据变化，重新渲染图表
watch(() => props.option,()=>{
  myChart.setOption(props.option,true)
},{deep:true})
</script>

<style>
</style>