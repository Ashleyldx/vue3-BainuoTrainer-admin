import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"; // 1、引入创建路由需要的组件,调用createRouter方法
import Layout from '../Layout/index.vue'

// 2、配置系统所有路由页面
const routes: Array<RouteRecordRaw> = [
  {
    path: "/", // 对应的路由地址   // 根元素不能写名称
    name:'Login',
    component: () => import('../Login/index.vue'), // 写入的文件地址
    // component: Login,
    // meta:{title:"",icon:""}
  },
  {
    path: "/netClassManage",
    name:'netClassManage',
    component: () => import('../views/netClassManage/index.vue'),
    // component: netClassManage,
    // meta:{title:"",icon:""}
  },
  {
    path: "/dataOverview",
    name:'dataOverview',
    component: () => import('../views/dataOverview/index.vue'),
    // component: dataOverview,
    meta:{title:"",icon:""}
  },
  {
    path: "/otherPages",
    name:'otherPages',
    component: () => import('../views/otherPages/index.vue'),
    // component: dataOverview,
    meta:{title:"",icon:""}
  },
  {
    path: "/Home",
    name:'Home',
    component: () => import('../views/Home/index.vue'),
    // component: dataOverview,
    meta:{title:"",icon:""}
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import('.././Layout/index.vue'),
    meta: { title: '', icon: "" },
    // children: [
    //   {
    //     path: "Home",
    //     name:'Home',
    //     component: () => import('../views/Home/index.vue'),
    //     // component: Home,
    //     // meta:{title:"",icon:""}
    //   },
    // ]
  }
]

// 创建路由实例
const router = createRouter({ 
  history: createWebHashHistory(), // 使用hash模式
  routes
})
export default router  // 为路由提供外部引入的入口