<template>
  <div>
    <el-menu
        default-active="flag"
        active-text-color="red"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
      <el-menu-item index="Home">
        <el-icon><icon-menu /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-sub-menu index="netClassManage">
        <template #title>
          <el-icon><VideoPlay /></el-icon>
          <span>网络课程管理</span>
        </template>
        <el-menu-item index="1-4-1">新增网络课程</el-menu-item>
        <el-menu-item index="1-4-1">编辑网络课程</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="dataOverview">
        <el-icon><setting /></el-icon>
        <span>数据总览</span>
      </el-menu-item>
      <el-menu-item index="otherPages">
        <el-icon><setting /></el-icon>
        <span>好差评页面</span>
      </el-menu-item>
    </el-menu>
    <el-col>
      <!--        首页-->
      <Home v-if='flag === "Home"'></Home>
      <!--        网课管理-->
      <netClassManage v-if='flag === "netClassManage"'></netClassManage>
      <!--        数据总览-->
      <dataOverview v-if='flag === "dataOverview"'></dataOverview>
      <!-- 好差评页面 -->
      <otherPages v-if='flag === "otherPages"'></otherPages>
    </el-col>
<!--    -->
    <router-link :to="{name:'Login'}">登录</router-link>
    <router-link :to="{name:'Home'}">首页</router-link>
    <router-link :to="{name:'netClassManage'}">网络课程管理</router-link>
    <router-link :to="{name:'dataOverview'}">数据总览</router-link>
    <router-link :to="{name:'otherPages'}">好差评页面</router-link>
  </div>

</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue'
import router from "../../router/index";
import { Document, Menu as IconMenu, Location, Setting} from '@element-plus/icons-vue'
import Home from '../../views/Home/index.vue'
import netClassManage from '../../views/netClassManage/index.vue'
import dataOverview from '../../views/dataOverview/index.vue'
import otherPages from '../../views/otherPages/index.vue'

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
      },
      {
        path: '/otherPages',
        name: 'otherPages',
        meta: {
          title: '好差评页面',
          icon:""
        }
      }
    ],
  },

  
])

const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
</script>