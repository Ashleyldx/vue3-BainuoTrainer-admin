<template>
  <el-dialog
  v-model="dialogData.visible" 
  title="新增课程" 
  width="50%" 
  :before-close="handleClose">
    <el-form
    ref="formDataRef"
    :model="formData"
    :rules="rules"
    label-width="120px"
    class="demo-formData"
    suffix-icon="：" >
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
    <el-form-item>
      <el-button type="primary" @click="submitForm(formDataRef)">保存</el-button>
      <el-button @click="resetForm(formDataRef)">取消</el-button>
    </el-form-item>
  </el-form>
    </el-dialog>
  
</template>

<script lang="ts" setup>
import { reactive, ref, toRefs, defineProps, getCurrentInstance, defineExpose } from 'vue'
import type { FormInstance, FormRules, ElMessage, UploadProps, ElMessageBox } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'

const { proxy } = getCurrentInstance() as any
const text = ref('')
const textarea = ref('')
const imageUrl = ref('')
const formSize = ref('default')
// 传值
const dialogData = toRefs({
  type: Object,
  default: () =>{
    return {}
  }
})
const formDataRef = ref<FormInstance>()
const formData = reactive({
  // dialogNetClass: false,
  dialogData: {
    courseName: '',
    courseType: '',
    videoCover: '',
    videoFile: '',
    videoIntroduction:''
  }
})

// table校验
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
      type: 'array',
      required: true,
      message: '请输入视频简介',
      trigger: 'change',
    },
  ],
  videoCover: [
    { required: true, message: '请上传视频封面', trigger: 'blur' },
  ],
})

// 表单提交申请
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
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

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))

// 关闭弹窗
const handleClose = () => {
  ElMessageBox.confirm('是否确认关闭弹窗?')
  // dialogData.visible= true
}
</script>

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
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
  text-align: center;
}
</style>
