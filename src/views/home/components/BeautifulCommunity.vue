<template>
  <div class="opinion" :style="{ backgroundImage: communityBgResult }">
    <div class="opinion_box">
      <div class="opinion_content">
        <div v-if="shimIndex === 0" class="opinion_item">
          <p class="min_title">谁经常在社区活动？</p>
          <div class="research_top_img">
          </div>
          <div class="research_bottom_img">
            <img class="full_img" src="./../../../assets/3001.png" alt="">
          </div>
        </div>
        <div v-else-if="shimIndex === 1" class="opinion_item">
          <div class="research_image">
            <img class="full_img" src="./../../../assets/yanjiuguiji.png" alt="">
          </div>
        </div>
        <div v-else class="opinion_item">
          <div v-for="(item, index) in communityTitleList" :key="index">
            <div class="item_content" v-if="shimIndex === (index + 1)">
              <div class="title">{{ item }}</div>
              <div v-if="index > 0" class="touch_box" @click="handleMiddleImage(index)">
                <div class="touch_image">
                  <img class="full_img" src="./../../../assets/touch.gif" alt="">
                </div>
                <p class="touch_text">点击探索更多</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="opinion_type">
        <div :class="{ activeOpinion: shimIndex === index }" class="each_opinion" v-for="(item, index) in communityNameList" :key="index" @click="handleOpinion(index)">{{ item }}</div>
      </div>
    </div>
    <Overlay :show="showCommunityOverlay">
      <OverlayInner :overlayData="
        overlayTag === 1 ? functionData : // 功能模块数据
        overlayTag === 2 ? happinessData : // 幸福归家路数据
        overlayTag === 3 ? graduateData : null // 优居研究所数据
      "></OverlayInner>
    </Overlay>
  </div>
</template>
<script setup>
import OverlayInner from './../components/OverlayInner.vue'
import communityBg0 from './../../../assets/usually.png'
import communityBg1 from './../../../assets/kk11.jpg'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { Overlay } from 'vant'
import { SET_COMMUNITY_OVERLAY } from '@/store/mutation-types'
import * as imageList from './../js/backgroundImage'

const store = useStore()
const communityNameList = ['研究过程', '洞擦结果', '功能模块', '幸福归家路', '优居研究所']
const communityTitleList = [
  '',
  '一个有温度、有互动的美好社区',
  '幸福归家路 从细节之处打动人心',
  'More+优居研究所 未来生活方式 即刻呈现'
]

const overlayTag = ref(null) // overlay 数据切换标志

const functionData = { // 功能模块数据
  title: [
    '精细化科学分区，给家长提供专享看护区域。',
    '专属适老化娱乐空间，让长者融入集体。',
    '建立社交共享空间，帮你找到灵魂好友。',
    '多功能模块布局，让全家人找到运动乐趣。'
  ],
  image: [
    imageList.lingliketing,
    imageList.yixiangzhidi,
    imageList.youlebao,
    imageList.yundongjidi
  ],
  name: ['儿童游乐堡', '颐享之地', '邻里客厅', '运动基地']
}
const happinessData = { // 幸福归家路数据
  title: [
    '入口人车分流，确保社区环境与安全。',
    '回家仪式感，层层递进。',
    '科学合理的风、光、声设计，舒适环境更欢乐。',
    '配建约15万m2空中花园，让绿色融入生活中。',
    '无障碍、无尖角、夜跑导航、休憩宽椅等人性化设计。'
  ],
  image: [
    imageList.anquan2,
    imageList.yishigan1,
    imageList.shushigan2,
    imageList.kongzhonghuayuan2,
    imageList.renxinghua1
  ],
  name: ['环境与安全', '仪式感', '舒适感', '空中花园', '人性化设计']
}
const graduateData = { // 优居研究所数据
  title: [
    '社群生活圈 提升幸福指数。',
    '理想小“社会”， 实现“半径生活梦”。',
    '活跃在景观中的互动 连接人地关系。'
  ],
  image: [
    imageList.shenghuoquan,
    imageList.shenghuomeng,
    imageList.renjiguanxi
  ],
  name: ['生活圈', '生活梦', '人际关系']
}

const shimIndex = ref(0)
const communityBgUrl0 = 'url(' + communityBg0 + ')' // 背景图片变量
const communityBgUrl1 = 'url(' + communityBg1 + ')'
const communityBgResult = ref('none')
const showCommunityOverlay = computed(() => store.state.showCommunityOverlay)

const handleOpinion = (index) => { // 点击每个主张
  shimIndex.value = index
  if (index === 1 || index === 3) {
    communityBgResult.value = communityBgUrl0
  } else if (index === 2 || index === 4) {
    communityBgResult.value = communityBg1
  } else {
    communityBgResult.value = 'none'
  }
}

const handleMiddleImage = (index) => { // 点击中心图片
  store.commit(SET_COMMUNITY_OVERLAY, true)
  overlayTag.value = index // 动态改变 overlayTag
}
</script>
<style lang="less" scoped>
.opinion{
  position: relative;
  height: 100%;
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: rgba(255,255,255,1);
  .opinion_box{
    .opinion_content{
      overflow: hidden;
      .opinion_item{
        padding: 25px 20px 0;
        .min_title{
          margin: 20px 0 0 20px;
          height: 40px;
          line-height: 40px;
          font-size: 40px;
          font-family: 'Orkney-Bold';
          font-weight: 600;
          color: rgb(35,24,21);
        }
        .research_top_img{
          margin: 0 auto;
          width: 400px;
          height: 400px;
          background-image: url(./../../../assets/bing1.gif);
          background-position: -50px -280px;
          background-size: 100%;
          background-repeat: no-repeat;
        }
        .research_bottom_img{
          margin: 30px auto;
          width: 400px;
          background-color: #f9f9f9;
        }
        .title{
          margin-top: 90px;
          padding-left: 68px;
          line-height: 50px;
          color: #FFFFFF;
          font-size: 42px;
          font-family: "VWText-Regular","HYQiHei-60S";
          font-weight: normal;
        }
        .item_content{
          position: relative;
          height: 800px;
          .touch_box{
            position: absolute;
            top: 350px;
            left: 50%;
            transform: translate(-50%, 0);
            z-index: 10;
            display: flex;
            flex-direction: row;
            align-items: center;
            .touch_image{
              width: 150px;
            }
            .touch_text{
              margin: -40px 0 0 -20px;
              height: 30px;
              line-height: 30px;
              color: #333333;
              font-size: 30px;
              font-family: "SourceHanSansSC-Medium", "HYQiHei-60S";
              font-weight: normal;
            }
          }
        }
        .research_image{
          margin: 0 auto;
          width: 465px;
        }
      }
    }
    .opinion_type{
      position: absolute;
      width: 100%;
      top: 80%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      .each_opinion{
        margin: 0 3%;
        padding-top: 28px;
        width: 27%;
        height: 115px;
        line-height: 87px;
        text-align: center;
        border-bottom: 1px solid #333333;
        box-sizing: border-box;
        color: #333333;
        font-size: 28px;
        font-weight: normal;
        font-family: "SourceHanSansSC-Medium","HYQiHei-60S";
      }
      .activeOpinion{
        color: rgba(244,195,56, 1);
        font-size: 29px;
        font-weight: 600;
        border-bottom: 2px solid rgba(244,195,56, 1);
      }
    }
  }
}
</style>
