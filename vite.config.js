import { defineConfig } from 'vite'
import {resolve} from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  plugins: [vue()],
  resolve: {
    alias: {
      '@':resolve(__dirname,'./src'),
    }
  },
  server: {
    https: false, //是否开启https
    port: 30000, // 端口号
    host: '', // 监听所有地址
    open: true, // 服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    proxy:{} // 自定义代理规则
  },
  build: {
    target: '', // 设置最终构建的浏览器兼容目标
    sourcemap: false, // 构建是否生成sourcemap文件
    chunkSizeWarningLimit: 2000, // chunk大小限制警告
    reportCompressedSize:false, // 启用/限制gzip压缩大小报告
  }
})
