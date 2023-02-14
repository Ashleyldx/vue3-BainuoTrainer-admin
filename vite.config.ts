import { defineConfig } from 'vite'
import {resolve} from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),],
  resolve: {
    alias: {
      find:'@/',
      replacement: resolve(__dirname, 'src'),
    }
  },
  // css: { // css预处理器
  //   preprocessorOptions: {
  //     scss: { // 引入variable.scss全局预定义变量
  //       additionalData:`@import "./src/styles/variables.scss"`
  //     }
  //   }
  // },
  server: {
    https: false, //是否开启https
    port: 30030, // 端口号
    host: '0.0.0.0', // 监听所有地址
    open: true, // 服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    proxy: "http://localhost:5000" // 自定义代理规则
  },
  build: {
    target: '', // 设置最终构建的浏览器兼容目标
    sourcemap: false, // 构建是否生成sourcemap文件
    chunkSizeWarningLimit: 2000, // chunk大小限制警告
    reportCompressedSize:false, // 启用/限制gzip压缩大小报告
  },
})
