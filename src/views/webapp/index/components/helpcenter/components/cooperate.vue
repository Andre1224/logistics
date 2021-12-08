<template>
  <div class="container">
    <div class="mainWrapper">
      <img src="/static/images/coo.jpg" alt="">
      <div class="form-box">
        <el-form
          ref="ruleForm"
          :model="ruleForm"
          :rules="rules"
          label-width="100px"
          class="ruleForm"
        >
          <el-form-item label="" prop="name">
            <el-input v-model="ruleForm.name" placeholder="您的名字" />
          </el-form-item>
          <el-form-item label="" prop="phone">
            <el-input v-model="ruleForm.phone" placeholder="手机号码" />
          </el-form-item>
          <el-form-item label="" prop="email">
            <el-input v-model="ruleForm.email" placeholder="邮箱地址" />
          </el-form-item>
          <el-form-item label="" prop="topic">
            <el-input v-model="ruleForm.topic" placeholder="主题" />
          </el-form-item>
          <el-form-item label="" prop="content">
            <el-input
              v-model="ruleForm.content"
              type="textarea"
              placeholder="内容"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        phone: '',
        email: '',
        topic: '',
        content: ''
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  padding: 0;
  margin: 0;
}
.mainWrapper {
  position: relative;
  width: 100%;
  // height: 600px;
  padding: 2rem;
  background-color: rgba(244, 244, 244, 0.5);
}
.form-box {
  margin-top: 2rem;
  position: relative;
  height: 200px;
}
.el-form {
  // position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  .el-form-item {
    margin-bottom: 1rem;
    .el-input {
      width: 300px;
    }
    .el-textarea {
      width: 400px;
    }
    .el-button {
      width: 400px;
    }
  }
}
</style>
