<template>
  <div class="mainWrap">
    <loginBar class="loginbar-container" />
    <navbar class="navbar-container" />
    <mainContent class="mainContent-container" />
    <footerBar class="footerBar-container" />
  </div>
</template>

<script>
export default {
  name: 'WebsiteLayout',
  components: {
    loginBar: () => import('./components/loginBar.vue'),
    navbar: () => import('./components/navBar.vue'),
    mainContent: () => import('./components/mainContent.vue'),
    footerBar: () => import('./components/footerBar.vue')
  }
}
</script>

<style lang="scss">
.mainWrap {
  margin: 0 auto;
  min-width: 1600px;
}
@media (screen) and (max-width: 2560px) {
  .mainWrap {
    margin: 0 auto;
    min-width: 1600px;
    // max-width: 100vw;
  }
}
</style>
