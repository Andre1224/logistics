<template>
  <div class="container">
    <div class="mainWrapper">
      <div class="top-box">
        <el-input v-model="input" placeholder="请输入搜索问题" />
        <el-button slot="append" icon="el-icon-search" />
      </div>
      <div class="bottom-box">
        <div v-for="item in problemLists" :key="item.icon" class="item">
          <div class="item-top">
            <svg-icon :icon-class="item.icon" />
            <span v-text="item.title" />
          </div>
          <div class="item-bottom">
            <div v-for="p in item.list" :key="p.id">
              <p v-text="p.problem" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      problemLists: [
        {
          icon: 'shuoming',
          title: '下单说明',
          list: [
            {
              id: '10001',
              problem: '如何寄存包裹',
              link: ''
            },
            {
              id: '10002',
              problem: '如何选择邮寄路线',
              link: ''
            },
            {
              id: '10003',
              problem: '如何支付订单运费',
              link: ''
            },
            {
              id: '10004',
              problem: '如何取消订单',
              link: ''
            },
            {
              id: '10005',
              problem: '包裹上要贴什么',
              link: ''
            }
          ]
        },
        {
          icon: 'qujian',
          title: '取件投递',
          list: [
            {
              id: '10001',
              problem: '如何寄存包裹',
              link: ''
            },
            {
              id: '10002',
              problem: '如何选择邮寄路线',
              link: ''
            },
            {
              id: '10003',
              problem: '如何支付订单运费',
              link: ''
            },
            {
              id: '10004',
              problem: '如何取消订单',
              link: ''
            },
            {
              id: '10005',
              problem: '包裹上要贴什么',
              link: ''
            }
          ]
        },
        {
          icon: 'shuijin',
          title: '清关和税金',
          list: [
            {
              id: '10001',
              problem: '如何寄存包裹',
              link: ''
            },
            {
              id: '10002',
              problem: '如何选择邮寄路线',
              link: ''
            },
            {
              id: '10003',
              problem: '如何支付订单运费',
              link: ''
            },
            {
              id: '10004',
              problem: '如何取消订单',
              link: ''
            },
            {
              id: '10005',
              problem: '包裹上要贴什么',
              link: ''
            }
          ]
        },
        {
          icon: 'zhifu',
          title: '支付相关',
          list: [
            {
              id: '10001',
              problem: '如何寄存包裹',
              link: ''
            },
            {
              id: '10002',
              problem: '如何选择邮寄路线',
              link: ''
            },
            {
              id: '10003',
              problem: '如何支付订单运费',
              link: ''
            },
            {
              id: '10004',
              problem: '如何取消订单',
              link: ''
            },
            {
              id: '10005',
              problem: '包裹上要贴什么',
              link: ''
            }
          ]
        },
        {
          icon: 'fanli',
          title: '营销返利',
          list: [
            {
              id: '10001',
              problem: '如何寄存包裹',
              link: ''
            },
            {
              id: '10002',
              problem: '如何选择邮寄路线',
              link: ''
            },
            {
              id: '10003',
              problem: '如何支付订单运费',
              link: ''
            },
            {
              id: '10004',
              problem: '如何取消订单',
              link: ''
            },
            {
              id: '10005',
              problem: '包裹上要贴什么',
              link: ''
            }
          ]
        },
        {
          icon: 'shouhou',
          title: '售后问题',
          list: [
            {
              id: '10001',
              problem: '如何寄存包裹',
              link: ''
            },
            {
              id: '10002',
              problem: '如何选择邮寄路线',
              link: ''
            },
            {
              id: '10003',
              problem: '如何支付订单运费',
              link: ''
            },
            {
              id: '10004',
              problem: '如何取消订单',
              link: ''
            },
            {
              id: '10005',
              problem: '包裹上要贴什么',
              link: ''
            }
          ]
        },
        {
          icon: 'xingli',
          title: '行李寄存',
          list: [
            {
              id: '10001',
              problem: '如何寄存包裹',
              link: ''
            },
            {
              id: '10002',
              problem: '如何选择邮寄路线',
              link: ''
            },
            {
              id: '10003',
              problem: '如何支付订单运费',
              link: ''
            },
            {
              id: '10004',
              problem: '如何取消订单',
              link: ''
            },
            {
              id: '10005',
              problem: '包裹上要贴什么',
              link: ''
            }
          ]
        }
      ]
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
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(244, 244, 244, 0.5);
}
.bottom-box {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  .item-top {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 4rem;
    .svg-icon {
      width: 4rem;
      height: 4rem;
      margin-right: 1rem;
    }
    span {
      font-size: 1.8rem;
      font-weight: 700;
    }
  }
  .item-bottom {
    p {
      cursor: pointer;
      font-size: 1rem;
      margin: 2rem 0;
      color: grey;
      &:hover {
        color: #000;
      }
    }
  }
}
.item {
  flex: 1;
}
.top-box {
  width: 60%;
  display: flex;
  margin-bottom: 3rem;
  .el-button {
    transform: translateX(-80%);
    border: none;
    background-color: transparent;
    &:active {
      // font-size: 5rem;
      transform: translateX(-80%) scale(1.2);
    }
  }
}
.el-input {
  display: block;
  //   width: 60%;
  margin: 0 auto;
}
</style>
