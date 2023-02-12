<template>
<!--  <el-row class="tac">-->
<!--    <el-col :span="12">-->
      <el-menu
        default-active="1"
        active-text-color="red"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
<!--        <el-menu-item index="1">-->
<!--          <el-icon><icon-menu /></el-icon>-->
<!--          <span>登录</span>-->
<!--        </el-menu-item>-->
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-sub-menu index="1">
          <template #title>
            <el-icon><VideoPlay /></el-icon>
            <span>网络课程管理</span>
          </template>
          <el-menu-item index="1-4-1">新增网络课程</el-menu-item>
          <el-menu-item index="1-4-1">编辑网络课程</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>数据总览</span>
        </el-menu-item>
      </el-menu>
<!--    </el-col>-->
<!--  </el-row>-->
</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue'
import { Document, Menu as IconMenu, Location, Setting} from '@element-plus/icons-vue'

const menus = reactive([
  {
    path: '/',
    redirect:'./Home',
    name: 'home',
    meta: {
      title: '首页',
      icon:"house"
    },
    children: [
      {
        path: '/',
        name: 'home',
        meta: {
          title: '首页',
          icon: "house"
        }
      },
      {
        path: './netClassManage',
        name: 'netClassManage',
        meta: {
          title: '网络课程管理',
          icon: '',
        }
      },
      {
        path: './netClassManage',
        name: 'netClassManage',
        meta: {
          title: '新增网络课程',
          icon:"house"
        }
      },
      {
        path: './netClassManage',
        name: 'netClassManage',
        meta: {
          title: '编辑网络课程',
          icon:""
        }
      },
      {
        path: '/dataOverview',
        name: 'dataOverview',
        meta: {
          title: '数据总览',
          icon:""
        }
      }
    ],
  },

  
])

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>