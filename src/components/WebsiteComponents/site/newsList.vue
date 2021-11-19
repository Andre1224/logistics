<template>
  <div class="ten">
    <div class="news-list">
      <div class="newshd">
        <span class="hdtitle">
          <i class="el-icon-document-copy" />新闻动态</span>
        <a href="#">查看更多>></a>
      </div>
      <div class="newscon">
        <div v-for="item in newObj" :key="item.title" class="ncon">
          <div class="conimg">
            <img :src="item.pic" alt="">
          </div>
          <div class="conread">
            <div class="readtitle">
              <span class="contitle">{{ item.title }}</span>
              <span class="contime">{{ item.time }}</span>
            </div>
            <p>{{ item.content }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="probrem">
      <div class="prohd">
        <span class="protitle"> <i class="el-icon-document" />常见问题</span>
        <a href="#">查看更多>></a>
      </div>
      <div class="procon">
        <div v-for="item in proObj" :key="item.question" class="pcon">
          <div class="prowen">
            <div class="tagwen">问</div>
            <span class="wencon" v-text="item.question" />
          </div>
          <div class="proda">
            <div class="tagda">答</div>
            <div class="dacon" v-text="item.answer" />
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
      newObj: [
        {
          pic: require('/public/static/images/conimg01.jpg'),
          title: '哪些物品禁运，后果是什么？',
          time: '2018-09-05 20:38:06',
          content: '哪些物品禁运，后果是什么？'
        },
        {
          pic: require('/public/static/images/conimg02.jpg'),
          title: '罐奶粉包税线路每个收件人/每个地址可以邮寄多少箱',
          time: '2018-09-05 20:37:28',
          content: '罐奶粉包税线路每个收件人/每个地址可以邮寄多少箱'
        },
        {
          pic: require('/public/static/images/conimg03.jpg'),
          title: '奶粉包税路线能不能夹带物品',
          time: '2018-09-05 20:36:52',
          content: '奶粉包税路线能不能夹带物品'
        }
      ],
      proObj: [
        {
          question: '包裹几天到达国内？失效如何？',
          answer:
            '不同专线，时效不同，碰上节假日及海关抽查也会有一定延迟，请综合以上情况选择最合适'
        },
        {
          question: '如何开通VIP大客户“批量发货”？',
          answer:
            '在下单页面，批量发货需联系我们的VIP大客户经理开通，此路线须达到每次30箱以上发货'
        },
        {
          question: '如何让快速下单 客服帮助下单吗？',
          answer: '您可通过我们的网站自足下单，我们的客服不能帮助下单'
        }
      ]
    }
  }
}
</script>

<style scoped>
.ten {
  width: 100%;
  height: 470px;
  display: flex;
  justify-content: center;
}
.news-list {
  width: 820px;
  height: 460px;
}
.newshd {
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #cfcfcf;
}
a {
  color: #f99b49;
  text-decoration: none;
  font-size: 12px;
  line-height: 40px;
}
.hdtitle {
  color: #00c2f3;
  font-size: 17px;
  height: 40px;
  width: 90px;
  line-height: 40px;
  border-bottom: 1px solid;
}
.newscon {
  margin-top: 35px;
  width: 820px;
  height: 390px;
}
.ncon {
  height: 105px;
  width: 100%;
  background-color: #f7f7f7;
  display: flex;
  margin-bottom: 15px;
  cursor: pointer;
}
img {
  width: 176px;
  height: 105px;
}
.conread {
  width: 600px;
  height: 105px;
  margin-left: 15px;
}
.readtitle {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
}
.contitle {
  font-size: 16px;
  font-weight: 700;
}
.contime {
  color: #666666;
  font-size: 14px;
}
p {
  margin-top: 26px;
  font-size: 14px;
  color: #666666;
}
.probrem {
  width: 340px;
  height: 460px;
  margin-left: 5vw;
}
.procon {
  margin-top: 35px;
}
.prohd {
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #cfcfcf;
}
.protitle {
  color: #00c2f3;
  font-size: 17px;
  height: 40px;
  width: 90px;
  line-height: 40px;
  border-bottom: 1px solid;
}
.pcon {
  height: 105px;
  width: 100%;
  margin-bottom: 22px;
  cursor: pointer;
  border-bottom: 1px dashed #cccccc;
}
.tagwen,
.tagda {
  width: 20px;
  height: 20px;
  color: #fff;
  font-size: 15px;
  text-align: center;
}
.tagwen {
  background-color: #ff0003;
}
.tagda {
  background-color: #2a2a2a;
}
.prowen {
  margin-bottom: 9px;
  height: 25px;
}
.proda {
  height: 60px;
  font-size: 14px;
}
.prowen,
.proda {
  width: 100%;
  display: flex;
  margin-left: 7px;
}
.wencon {
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  margin-left: 18px;
}
.dacon {
  margin-left: 18px;
  width: 292px;
  color: #5d5d5d;
}
</style>
