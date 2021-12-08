<template>
  <div class="container">
    <div class="navWrap">
      <div class="logoWrap">
        <img
          src="/static/images/shenzhoulogo.png"
          alt="failed to download image"
        >
      </div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :router="true"
        @select="handleSelect"
      >
        <el-menu-item
          v-for="route in routes"
          :key="route.path"
          class="navItem"
          :item="route"
          :base-path="route.path"
          :index="route.path"
          v-text="route.meta.title"
        />
      </el-menu>
    </div>
    <!-- <transition name="fade" mode="out-in">
      <div v-show="showBanner" class="advBanner">
        <div class="textWrap">
          <div class="leftText">
            <span
              class="bannerText aboutus"
              @click="handleCilckAbout"
              v-text="currentRoute"
            />
            <span class="bannerText">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            <span class="bannerText">欢迎您登录 Ors Int Ltd. 官网</span>
          </div>
          <div class="rightText">
            <span class="bannerText">当前位置：首页 >> </span>
            <span class="bannerText" v-text="currentRoute" />
          </div>
        </div>
      </div>
    </transition> -->
  </div>
</template>

<script>
import webapprouter from '@/router/webapprouter'
export default {
  name: 'Navbar',
  data() {
    return {
      activeIndex: 'index',
      showBanner: false,
      currentRoute: null
    }
  },
  computed: {
    routes() {
      const pathReg = /^(\/webapp)/
      const routeMap = webapprouter.filter((item) => pathReg.test(item.path))
      return routeMap[0].children
    }
  },
  watch: {
    $route(to) {
      this.$nextTick(() => {
        this.currentRoute = to.meta.title
        console.log(to.fullPath)
        if (/(\/webapp\/index)/.test(to.fullPath)) {
          this.showBanner = false
        } else {
          this.showBanner = true
        }
      })
    }
  },
  created() {
    this.onloadPage()
  },
  methods: {
    onloadPage() {
      // console.log(this.$router.history.current)
      this.activeIndex = this.$router.history.current.name
      this.currentRoute = this.$router.history.current.meta.title
      this.showBanner = this.activeIndex !== 'index'
    },
    handleSelect(arg) {
      // console.log(arg)
    },
    handleCilckAbout() {
      window.location.hash = `#/website/about`
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  min-width: 1200px;
}
.navWrap {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #fff;
}
.navItem {
  font-size: 1.8rem;
  color: #000;
}
@media screen and (min-width: 2000px) {
  .navItem {
    margin: 0 1rem;
    font-size: 1.5rem;
  }
}
.advBanner {
  width: 100%;
  background: url('/static/images/advBanner.jpg') no-repeat;
  background-position-x: center;
  background-size: cover;
  display: flex;
  align-items: flex-end;
}
.aboutus {
  cursor: pointer;
}
.aboutus:hover {
  color: bisque;
}
.bannerText {
  color: #fff;
}
.textWrap {
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.el-menu-demo {
  display: flex;
  align-items: center;
}
</style>
