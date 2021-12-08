<template>
  <div class="container">
    <div class="main">
      <div class="main-title">神州物流</div>
      <div class="box">
        <div class="login-box">
          <p>登录</p>
          <el-input
            id="account"
            ref="username"
            v-model="loginForm.username"
            placeholder="用户名/邮箱"
            tabindex="1"
            auto-complete="on"
          />
          <el-input
            id="passwd"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            name="password"
            tabindex="2"
            auto-complete="on"
            placeholder="密码"
          />

          <span class="show-pwd" @click="showPwd">
            <svg-icon
              :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
            />
          </span>
          <div class="remember-box">
            <el-checkbox v-model="rememberPasswd">记住密码</el-checkbox>
            <a>忘记密码</a>
          </div>
          <el-button
            type="primary"
            @click.native.prevent="handleLogin"
          >登录</el-button>
        </div>
        <div class="register-box">
          <p>注册</p>
          <el-input placeholder="用户名" />
          <el-input placeholder="邮箱" />
          <el-input placeholder="密码" />
          <div class="verify-box">
            <el-input class="verify-code" placeholder="验证码" />
            <el-button class="get-verify-code">获取验证码</el-button>
          </div>
          <el-button type="primary">注册</el-button>
        </div>
        <div class="mask-box open">
          <div class="content">
            <p>欢迎访问神州物流</p>
            <span>如果您还无法登陆，为保证您的用户体验，请点击下方按钮注册账号。</span>
          </div>
          <el-button type="info" @click="moveMask" v-text="maskStatus" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'

export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    return {
      maskStatus: '注册',
      rememberPasswd: false,
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      loginRules: {
        username: [
          { required: true, trigger: 'blur', validator: validateUsername }
        ],
        password: [
          { required: true, trigger: 'blur', validator: validatePassword }
        ]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      if (this.loginForm) {
        this.loading = true
        this.$store
          .dispatch('admin/login', this.loginForm)
          .then(() => {
            this.$router.push({ path: this.redirect || '/' })
            this.loading = false
          })
          .catch(() => {
            this.loading = false
          })
      } else {
        console.log('error submit!!')
        return false
      }
    },
    moveMask() {
      const mask = document.querySelector('.mask-box')
      const loginbox = document.querySelector('.login-box')
      const registerbox = document.querySelector('.register-box')
      this.maskStatus = this.maskStatus === '注册' ? '登录' : '注册'
      if ([...mask.classList].includes('open')) {
        mask.classList.remove('open')
        loginbox.classList.add('quit')
        loginbox.classList.remove('enter')
        registerbox.classList.add('enter')
        registerbox.classList.remove('quit')
      } else {
        mask.classList.add('open')
        loginbox.classList.add('enter')
        loginbox.classList.remove('quit')
        registerbox.classList.add('quit')
        registerbox.classList.remove('enter')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fuserimages15.51sole.com%2F20170527%2Fb_3979874_201705271142028839.jpg&refer=http%3A%2F%2Fuserimages15.51sole.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641178273&t=5d63fc2b7a0ec9ea9782d2f97c8c4017')
    no-repeat;
}
.main {
  position: absolute;
  left: 50%;
  top: 20%;
  height: 45%;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
  // background-color: skyblue;
  transform: translateX(-50%);
  border-radius: 10px;
  // overflow: hidden;
  .main-title {
    padding: 1rem;
    transform: translateY(-50%);
    text-align: center;
    color: #fff;
    font-size: 3rem;
    font-weight: 700;
  }
  p {
    position: relative;
    display: block;
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }
}
.box {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(244, 244, 244, 0.7);
  display: flex;
  box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
  border-radius: 10px;
  p {
    text-align: center;
    font-size: 2rem;
    font-weight: 800;
  }
}
.el-button {
  position: relative;
  display: block;
  margin: 0 auto;
  width: 30%;
  height: 4rem;
  border-radius: 25px;
}
.login-box {
  position: relative;
  width: 50%;
  height: 100%;
  // background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &.enter {
    animation: loginboxEnter 0.5s;
  }
  &.quit {
    animation: loginboxQuit 0.5s;
  }
  // backgroundloginbox .5s;

  p {
    margin-bottom: 3rem;
  }
  .el-input {
    display: block;
    width: 70%;
    margin: 0 auto;
    background: transparent;
    margin-bottom: 2rem;
  }
  .show-pwd {
    position: absolute;
    right: 16%;
    top: 49%;
    font-size: 1.5rem;
    cursor: pointer;
    user-select: none;
  }
  .remember-box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    margin-bottom: 1rem;
  }
}
.register-box {
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &.enter {
    animation: registerboxEnter 0.5s;
  }
  &.quit {
    animation: registerboxQuit 0.5s;
  }
  // background-color: orange;
  p {
    margin-bottom: 3rem;
  }
  .el-input {
    display: block;
    width: 70%;
    margin: 0 auto;
    background: transparent;
    margin-bottom: 2rem;
  }
  .verify-box {
    width: 70%;
    margin: 0 auto;
    display: flex;
    .el-button {
      margin-left: 1rem;
      width: 50%;
      border-radius: 5px;
      background-color: rgba(241, 242, 246, 1);
    }
  }
}
.mask-box {
  position: absolute;
  width: 50%;
  height: 100%;
  // background-color: black;
  border-radius: 10px 0 0 10px;
  z-index: 2;
  left: 0;
  background-image: linear-gradient(to bottom right, #2980b9, #53aae4);
  transition: left 0.5s ease-in-out, border-radius 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  &.open {
    left: 50%;
    border-radius: 0 10px 10px 0;
  }
  .el-button {
    border: 1px solid #fff;
    background-color: transparent;
    padding: 10px 20px;
    // top: 68%;
    &:active {
      transform: scale(0.9);
    }
  }
  .content {
    width: 75%;
    text-align: center;
    p,
    span {
      display: block;
      margin-bottom: 4rem;
    }
  }
}

@keyframes loginboxEnter {
  0% {
    border-radius: 50%;
    transform: translateX(30%) scale(0);
    opacity: 0;
  }
  100% {
    border-radius: 10px;
    transform: translateX(0%) scale(1);
    opacity: 1;
  }
}
@keyframes loginboxQuit {
  100% {
    border-radius: 50%;
    transform: translateX(30%) scale(0);
    opacity: 0;
  }
}

@keyframes registerboxEnter {
  0% {
    border-radius: 50%;
    transform: translateX(-30%) scale(0);
    opacity: 0;
  }
  100% {
    border-radius: 10px;
    transform: translateX(0%) scale(1);
    opacity: 1;
  }
}
@keyframes registerboxQuit {
  100% {
    border-radius: 50%;
    transform: translateX(-30%) scale(0);
    opacity: 0;
  }
}
</style>
