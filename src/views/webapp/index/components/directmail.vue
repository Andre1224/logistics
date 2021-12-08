<template>
  <div class="container">
    <div class="main">
      <div class="title">
        <p>直邮服务</p>
        <p>International Service</p>
      </div>
      <div class="boxWrapper">
        <div v-for="item in dataSource" :key="item.title" class="box">
          <svg-icon :icon-class="item.icon" />
          <p v-text="item.title" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixinInterface from '@/mixin/interface'

export default {
  name: 'DirectMail',
  mixins: [mixinInterface],
  data() {
    return {
      url: {
        list: 'directmail/list'
      }
      // items: [
      //   {
      //     title: '香港邮政',
      //     icon: 'xianggangzhuanyun'
      //   },
      //   {
      //     title: '奶粉专线',
      //     icon: 'naifenzhuanxian'
      //   },
      //   {
      //     title: '行李邮寄 空运/海运',
      //     icon: 'xingliyouji'
      //   },
      //   {
      //     title: '杂货路线',
      //     icon: 'zahuoluxian'
      //   },
      //   {
      //     title: '香港专线',
      //     icon: 'xianggangzhuanxian'
      //   },
      //   {
      //     title: '小包裹路线',
      //     icon: 'xiaobaoguo'
      //   },
      //   {
      //     title: '万国邮政',
      //     icon: 'wanguoyouzheng'
      //   },
      //   {
      //     title: '特快文件',
      //     icon: 'tekuaiwenjian'
      //   }
      // ]
    }
  }
}
</script>
"
<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  background-color: rgb(244, 244, 244);
}
.main {
  position: relative;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  p:nth-child(1) {
    color: #0984e3;
    text-align: center;
    font-size: 3rem;
    // font-weight: 700;
    margin: 1.5rem 0;
  }
  p:nth-last-child(1) {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
  }
}
.boxWrapper {
  margin-top: 2rem;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .box {
    cursor: pointer;
    background-color: #fff;
    margin: 10px;
    padding: 10px;
    width: 23%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: scale(1);
    transition: transform 0.5s;
    .svg-icon {
      width: 6rem;
      height: 6rem;
    }
    p {
      margin-top: 2rem;
    }
    &:hover {
      box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.1);
      transform: scale(1.1);
    }
  }
}
</style>
