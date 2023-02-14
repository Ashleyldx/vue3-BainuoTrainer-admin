<script lang="ts" setup>
import theHeaders from '../../Layout/components/theHeaders.vue';
import menuBar from '../../Layout/components/menuBar.vue'
import pageTitle from '../../components/pageTitle.vue'
import { reactive, ref, toRefs, defineProps, getCurrentInstance, defineExpose, onMounted } from 'vue'
import { FormInstance, FormRules, ElMessage, UploadProps, ElMessageBox } from 'element-plus'
// import { Search, Plus } from '@element-plus/icons-vue'
// import serviceNetClass from "../netClassManage/api";
const { proxy } = getCurrentInstance() as any
const text = ref('')
const textarea = ref('')
const imageUrl = ref('')
const formSize = ref('default')
const formDataRef = ref<FormInstance>()
const input = ref('')
const dialogNetClass = ref(true)
const dialogVisible = ref(false)
const searchParam = reactive({
    courseName: '',
    courseType: '',
})

const tableData = reactive({
    courseName: '',
    courseType: '',
    videoCover: '',
    videoFile: '',
    videoIntroduction:'',
})

const formData = reactive({
  courseName: '',
  courseType: '',
  videoCover: '',
  videoFile: '',
  videoIntroduction:''
})

const searchRequest=reactive({ // 页码数据
  tableList:[],
  currentPage:1, // 当前页面
  pageSize:20, // 页面数量
  total:0
})

// 点击按钮出现新增弹窗
const handleAdd = () => {}

// 弹出框form表单校验
const rules = reactive<FormRules>({
  courseName: [
    { required: true, message: '请输入课程名称', trigger: 'blur' },
    // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  courseType: [
    {
      required: true,
      message: '请选择课程类型',
      trigger: 'change',
    },
  ],
  videoFile: [
    {
      required: true,
      message: '请上传视频文件',
      trigger: 'change',
    },
  ],
  videoIntroduction: [
    {
      required: true,
      message: '请输入视频简介',
      trigger: 'change',
    },
  ],
  videoCover: [
    { required: true, message: '请上传视频封面', trigger: 'blur' },
  ],
})

// top栏查询
const onSubmit = () => {
  console.log('提交!')
}

const indexMethod=(index: number)=>{
  index = index+searchRequest.currentPage*(searchRequest.pageSize-1)
  return index+1
}
// table列表初始化
 const initTableList=()=>{
    const data = {
      currentPage:searchRequest.currentPage,
      pageSize:searchRequest.pageSize,
      courseName: tableData.courseName,
      courseType: tableData.courseType,
      videoCover: tableData.videoCover,
      videoFile: tableData.videoFile,
      videoIntroduction:tableData.videoIntroduction
    }
   console.log('数据111', data)
      // serviceNetClass.getComprehensiveByPage(data).then((res:any)=>{
      //   console.log('数据222',res)
      // })
   proxy.$http.post('/api/onlineclass/onlinecourses/getComprehensiveByPage', {}, data).then(res =>{
     console.log('item:>>',res)

   }).catch((err: any)=>{
     return err
   })
  }
  // ouMounted调用函数
    onMounted(()=>{
      // initTableList()
    })

// 表单提交申请
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('提交成功!')
    } else {
      console.log('提交失败!', fields)
    }
  })
}

// 表单内容重置
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

// table列表内容删除
const handleDelete=()=>{
  console.log('shanchu')
}

// 图片和视频上传
const handleAvatarSuccess: UploadProps['onSuccess'] = (
    response,
    uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}
// 视频封面
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}
</script>

<template>
  <div>
    <div class="common-layout">
        <!--  顶部-->
         <el-container>
           <el-header>
           <theHeaders></theHeaders>
         </el-header>
           <!-- 侧边栏  -->
           <el-container>
             <el-aside>
               <menuBar></menuBar>
             </el-aside>
             <!-- 主面板 -->
             <el-main class="mainContainer">
               <el-card>
<!--                 <pageTitle>111</pageTitle>-->
                 <div class="mainCard">
                   <el-form :inline="true" :model="searchParam" class="DemoForm">
                     <el-form-item label="课程名称">
                       <el-input v-model.trim="searchParam.courseName" placeholder="请输入课程名称" clearable/>
                     </el-form-item>
                     <el-form-item label="课程标签">
                       <el-select v-model="searchParam.courseType" placeholder="请选择课程类型">
                         <el-option label="课程一" value="shanghai" />
                         <el-option label="课程二" value="beijing" />
                       </el-select>
                     </el-form-item>
                     <el-form-item>
                       <el-button type="primary" :prefix-icon="Search" @click="onSubmit">查询</el-button>
                     </el-form-item>
                     <el-form-item>
                       <el-button type="primary" icon="Plus" @click="dialogVisible = true">新增</el-button>
                     </el-form-item>
                   </el-form>
<!--                   table列表-->
                   <el-table :data="tableList" border style="width: 100%">
                     <el-table-column prop="index" type="index" :index="indexMethod" label="序号" align="center" width="60" />
                     <el-table-column prop="courseName" label="课程名称" align="center" width="180" >
                       <template #default='scope'>
                         <span >{{ scope.row.courseName}}</span>
                       </template>
                     </el-table-column>
                     <el-table-column prop="courseType" label="课程类型" align="center" width="180" >
                        <template #default="scope">
                          <span>{{scope.row.courseType}}</span>
                        </template>
                     </el-table-column>
                     <el-table-column prop="videoCover" label="视频封面" align="center" width="180" >
                       <template #default="scope">
                         <span>{{scope.row.videoCover}}</span>
                       </template>
                     </el-table-column>
                     <el-table-column prop="videoIntroduction" label="视频简介" align="center" width="180" >
                       <template #default="scope">
                         <span>{{scope.row.videoIntroduction}}</span>
                       </template>
                     </el-table-column>
                     <el-table-column prop="videoFile" label="视频文件" align="center" width="180" >
                       <template #default="scope">
                         <span>{{scope.row.videoFile}}</span>
                       </template>
                     </el-table-column>
                     <el-table-column label="操作" width="180" align="center">
                       <template #default="scope">
                         <el-button type="primary" plain size="small" @click="handleAdd()">编辑</el-button>
                         <el-button type="danger" plain size="small" @click="handleDelete()">删除</el-button>
                       </template>
                     </el-table-column>
                   </el-table>
                 </div>
               </el-card>
             </el-main>
           </el-container>
         </el-container>
          <el-pagination
            background
            layout="total, sizes, prev, pager, next, jumper"
            v-model:current-page="currentPage"
            v-model:page-size="pageSize"
            small
            :total="total"
            @size-change='handleSizeChange'
            @current-change='handleCurrentChange'/>
<!--      :page-sizes="tableData.pageSizes"-->
      </div>

  <!-- ========弹出层页面=========== -->
  <div class="dialogPage">
    <!-- <div class="pageTitle">新增课程</div> -->
   <el-dialog
      v-model="dialogVisible" 
      title="新增课程" 
      width="50%" >
    <el-form
      ref="formDataRef"
      :model="formData"
      :rules="rules"
      label-width="120px"
      class="demo-formData">
    <el-form-item label="课程名称" prop="courseName">
      <el-input v-model.trim="formData.courseName" />
    </el-form-item>
    <el-form-item label="课程类型" prop="courseType">
      <el-checkbox-group v-model="formData.courseType">
        <el-checkbox label="非重点排污单位" name="非重点排污单位" />
        <el-checkbox label="重点排污大气" name="重点排污大气" />
        <el-checkbox label="重点排污单位-水" name="重点排污单位-水" />
        <el-checkbox label="重点排污单位-土壤" name="重点排污单位-土壤" />
        <el-checkbox label="重点排污单位-其他" name="重点排污单位-其他" />
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="视频文件" prop="videoFile">
      <el-upload
        class="avatar-uploader"
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
  </el-upload>
    </el-form-item>
    <el-form-item label="视频封面" prop="videoCover">
      <el-upload
        class="avatar-uploader"
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
  </el-upload>
    </el-form-item>
    <el-form-item label="视频简介" prop="videoIntroduction">
      <el-input v-model.trim="formData.videoIntroduction" type="textarea" maxlength="300" placeholder="请输入视频简介" show-word-limit clearable/>
    </el-form-item>
    <el-row justify="center">
      <el-button type="primary" @click="submitForm(formDataRef)">保存</el-button>
      <el-button @click="resetForm(formDataRef)">取消</el-button>
    </el-row>
    </el-form>
    </el-dialog>
  </div>
  </div> 
</template>


<style lang="scss" scoped>
// 主页面全局样式
.common-layout{
  display: flex;
  .el-aside{
    width:18%;
    //background-color:pink;
  }
.mainContainer{
  width: 82%;
  .mainCard{
    background-color: #fff;
    padding: 30px;
    border-radius: 5px;
    height: 80%;
    }
  }
}
.demoForm{
  width:60%;
  background-color: aqua;
}
.pageTitle{
 width: 100%;
 height: 10px;
 background-color: pink;
}
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  border: 1px solid #8c939d;
  border-radius: 5px;
  text-align: center;
}
</style>