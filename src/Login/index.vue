<template>
  <div class="building">
    <el-form
      ref="formDataRef"
      :model="formData"
      :rules="rules"
      class="loginForm">
      <div class="titleFont">
        <span>欢迎登陆百诺环保</span>
        <p>为你的工作效率锦上添花</p>
    </div>
  <el-form-item prop="phone">
      <el-input
        v-model.number="formData.phone"
        :prefix-icon="User"
        placeholder="手机号"
        autocomplete="off"
        size="large"
        clearable>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input 
      v-model.trim="formData.password"
      type="password" 
      autocomplete="off" 
      :prefix-icon="Unlock" 
      placeholder="密码" 
      size="large" 
      clearable>
    </el-input>
    </el-form-item>
    <!-- 验证码，验证码的字段随便写的 -->
    <el-form-item prop="code" >
      <el-input 
      v-model.trim="formData.code"
      placeholder="请输入验证码" 
      size="large"
      clearable>
    </el-input>
    <!--   点击事件-->
    <img src="" 
    @click="changeCode" alt=""/>
    </el-form-item>
    <p>忘记密码</p>
    <el-form-item>
      <el-button class="loginBtn" @click="submitForm(formDataRef)">登录</el-button>
   </el-form-item> 
   <el-form-item>
    <div class="loginSelect"><p>第三方用户登录</p></div> 
    </el-form-item> 
  </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, defineComponent, toRefs } from 'vue'
import type { FormInstance,  FormRules } from 'element-plus'
import { Unlock, User } from '@element-plus/icons-vue'
import { useRouter } from "vue-router"
import { get32_bitRandom } from '@/utils/index'

  const formDataRef = ref<FormInstance>()
  const formData = reactive({
    phone: '',
    password: '',
    img: '',
    code:''
  })

  const rules = reactive({
      phone: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
        { pattern: /^[1][3,4,5,7,8][0-9]{9}$/, message: '手机号码格式不正确', trigger: 'blur' }],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 3, max: 10, message: '密码的长度在3-10之间', trigger: 'blur'},
      ],
      code: [
      { required: true, message: '请输入验证码', trigger: 'blur' },
          { pattern: /^[a-z,0-9]{4}$/, message: '验证码为4位,且只能为小写字母和数字', trigger: 'blur' }],
      })
    const changeCode=()=>{  // 点击更新验证码
      
    }
  
  // 提交登录内容
  const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
      if (valid) {
      
        console.log('提交成功!')
      } else {
        console.log('提交失败!')
        return false
      }
    })
  }
</script>
<style lang="scss" scoped>
.building{
      background: url('../src/assets/背景图.png');
      width: 100%;
      height: 100%;
      display: flex;
      /* position: relative; */
      position: fixed;
      /* transform: translate(-46%, -48%); */
      background-size: 100% 100%;
    }
    .titleFont{
    }
    span{
        font-size: 30px;
        font-weight: 700;
      }
    .loginForm{
      /* display: flex; */
      /* border-radius: 15px; */
      transform: translate(65%,30%);

    }
    .loginBtn{
      width: 90%;
      height: 40px;
      border-radius: 25px;
      color: #fff;
      background-color: #3064e4;
    }
    .loginForm-bottom p{
      margin-bottom: 100px;
    }
    .loginSelect{
      /* background-color: pink; */
      font-size: 12px;
    }
    p{
      font-size: 14px;
      color: black;
      text-align: right;
    }
   
</style>
