<template>
  <div class="container">
    <div class="loginWrap">
      <div v-if="name" class="user-box">
        <span>欢迎您！ </span>
        <span class="text" v-text="name" />
        <span v-if="showBackend" class="toTag" @click="toBackend">[ 控制台 ]</span>
        <span class="toTag">[ 购物车 ]</span>
        <span class="toTag">[个人中心]</span>
        <!-- <span style="margin: 0 0.5rem">|</span> -->
        <!-- <span style="margin: 0 .5rem" class="text">[个人中心]</span> -->
        <span class="toTag" @click="logout">退出</span>
      </div>
      <span v-else class="toTag" @click="toLogin">登录&nbsp; / &nbsp;注册</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LoginBar',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['name', 'roles']),
    showBackend() {
      let flag = false
      for (const i of this.roles) {
        if (/admin/.test(i)) {
          flag = true
        }
      }
      return flag
    }
  },
  created() {
    console.log('name: \n', this.name)
    console.log('roles: \n', this.roles)
  },
  methods: {
    toLogin() {
      window.location.hash = '/login'
    },
    toBackend() {
      window.location.hash = '/BackstageManager'
    },
    async logout() {
      const logoutInfo = await this.$store.dispatch('admin/logout')
      console.log('[login bar]', logoutInfo)
      this.$message({
        type: 'success',
        message: logoutInfo.message
      })
      // this.$router.push(`/BackstageManagerlogin?redirect=${this.$route.fullPath}`)
      // window.location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  min-width: 1200px;
}
.user-box {
  display: flex;
  justify-content: flex-end;
  font-size: 1.3rem;
}
.toTag {
  cursor: pointer;
  font-size: 1.3rem;
  margin: 0 0.5rem;
  &:hover {
    color: #fab1a0;
  }
}
.loginWrap {
  padding: 0 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 3rem;
  background-color: #000;
  color: #fff;
}
.registertext {
  margin-right: 26.5%;
}
</style>
