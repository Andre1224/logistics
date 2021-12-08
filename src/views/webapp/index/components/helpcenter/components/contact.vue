<template>
  <div class="container">
    <div class="mainWrapper">
      <div class="left-box">
        <div class="left-top">
          <svg-icon icon-class="dianhua" @click="showPhone" />
          <svg-icon icon-class="youxiang" @click="showMail" />
        </div>
        <div class="left-bottom">
          <div v-show="show" class="contact-box">
            <p>客服电话 | 01293537035</p>
            <p>工作时间 |（英国时间）周一至周五 9:00 - 17:00</p>
          </div>
          <div v-show="!show" class="contact-box">
            <p>咨询邮箱 | enquiries@send2china.co.uk</p>
            <p>工作时间 |（英国时间）周一至周五 9:00 - 17:00</p>
          </div>
        </div>
      </div>
      <div class="right-box">
        <el-form
          ref="ruleForm"
          :model="ruleForm"
          :rules="rules"
          label-width="100px"
          class="ruleForm"
        >
          <el-form-item label="" prop="type">
            <el-select v-model="ruleForm.type" placeholder="类型">
              <el-option label="建议" value="suggest" />
              <el-option label="投诉" value="complaint" />
            </el-select>
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
            <el-input v-model="ruleForm.content" type="textarea" placeholder="内容" />
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
      show: true,

      ruleForm: {
        type: '',
        phone: '',
        email: '',
        topic: '',
        content: ''
      }
    }
  },
  methods: {
    showPhone() {
      this.show = true
    },
    showMail() {
      this.show = false
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
  display: flex;
  background-color: rgba(244, 244, 244, 0.5);
  .left-box {
    flex: 2;
    // background-color: red;
    .left-top {
      padding: 2rem;
      display: flex;
      justify-content: space-around;
      .svg-icon {
        width: 8rem;
        height: 8rem;
        cursor: pointer;
        color: rgba(0, 0, 0, 0.1);
        &:hover {
          color: skyblue;
        }
        &:active {
          transform: scale(1.1);
        }
      }
    }
    .left-bottom {
      position: relative;
      margin: 0 auto;
      width: 80%;
      padding: 2rem;
      background-color: rgba(0, 0, 0, 0.1);
      p {
        font-size: 1.5rem;
        font-weight: 600;
      }
    }
  }
  .right-box {
    flex: 3;
    .el-form {
      display: flex;
      flex-wrap: wrap;
      .el-form-item {
        flex: 50%;
        .el-input {
          width: 20rem;
        }
        .el-textarea{
          width: 55rem;
        }
        .el-button{
          width: 55rem;
        }
      }
    }
  }
}
</style>
