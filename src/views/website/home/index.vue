<template>
  <div class="homeWrap">
    <div class="rollPicWrap itemWrap">
      <rollPic class="rollPic-container" />
    </div>
    <div class="selectBoxWrap itemWrap">
      <selectBox class="selectBox-container" />
    </div>
    <div class="middleBoxWrap itemWrap">
      <middleBox class="middleBox-container" />
    </div>
    <div class="chosseTabWrap itemWrap">
      <chosseTab class="chosseTab-container" />
    </div>
    <div class="newsListWrap itemWrap">
      <newsList class="newsList-container" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    rollPic: () => import('@/components/WebsiteComponents/site/rollPic.vue'),
    selectBox: () =>
      import('@/components/WebsiteComponents/site/selectBox.vue'),
    middleBox: () =>
      import('@/components/WebsiteComponents/site/middleBox.vue'),
    chosseTab: () =>
      import('@/components/WebsiteComponents/site/chosseTab.vue'),
    newsList: () => import('@/components/WebsiteComponents/site/newsList.vue')
  }
}
</script>

<style scoped>
.homeWrap {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.itemWrap{
  position: relative;
  width: 100%;
}
.selectBoxWrap{
  width: 60%;
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 10;
  transform: translateY(-30%);
}
.middleBoxWrap{
  position: relative;
  transform: translateY(-20%);
}
</style>
