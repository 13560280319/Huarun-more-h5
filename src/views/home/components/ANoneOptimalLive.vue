<template>
  <div class="optimal" :style="{ backgroundImage: communityBgResult }">
    <div class="optimal_box">
      <div class="optimal_content">
        <div v-if="shimIndex === 0" class="optimal_item">
          <div class="research_top_img"></div>
          <div class="research_bottom_img"></div>
        </div>
        <div v-if="shimIndex !== 0" class="optimal_item">
          <div v-for="(item, index) in communityTitleList" :key="index">
            <div class="item_content" v-if="shimIndex === (index + 1)">
              <div class="title optimalTitle">{{ index === 0 ? item.text1 + '\n' + item.text2 : item }}</div>
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
        <div :class="{ activeOpinion: shimIndex === index }" class="each_opinion" v-for="(item, index) in communityNameList" :key="index" @click="handleOptimal(index)">{{ item }}</div>
      </div>
    </div>
    <Overlay :show="showOptimalOverlay ">
      <OverlayInner :overlayData="
        overlayTag === 1 ? bedroomBalcony : // 功能模块数据
        overlayTag === 2 ? livingKitchen : // 幸福归家路数据
        overlayTag === 3 ? bathroomStorage : '' // 优居研究所数据
      "></OverlayInner>
    </Overlay>
  </div>
</template>
<script setup>
import OverlayInner from './OverlayInner.vue'
import communityBg from ''
import { ref, computed, nextTick } from 'vue'
import { useStore } from 'vuex'
import { Overlay } from 'vant'
import { SET_OPTIMAL_OVERLAY } from '@/store/mutation-types'
import { isImageFile } from 'vant/lib/uploader/utils'
import * as imageList from '@/views/home/js/backgroundImage'
import { animateCSS } from '@/utils/animationEnd'

const store = useStore()
const communityNameList = ['研究洞察', '主张', '卧室+阳台', '客厅+餐厨', '卫浴+收纳']
const communityTitleList = [
  {
    text1: '每个人都有自己的生活方式，无论是一个人独处，还是热闹人多的家庭趴。同时，一个舒适的居住空间，将成为生活中重要的后备仓。',
    text2: '华润置地广州不断追溯人们最为本质的体验感受，不断满足大家对未来生活最理想的状态。'
  },
  '为成年人解锁独处空间',
  '让家庭陪伴&社交聚餐更有趣',
  '日常生活中不做“细节绝缘体”'
]

const overlayTag = ref(null) // overlay 数据切换标志

const bedroomBalcony = { // （卧室 + 阳台）数据
  title: [
    '卧室，每一平方都带有温度。',
    '阳台，给自己一个会呼吸的能量场。'
  ],
  image: [
    imageList.woshi,
    imageList.yangtai
  ],
  name: ['卧室', '阳台']
}

const livingKitchen = { // （客厅 + 餐厨）数据
  title: [
    '多功能客厅，随意切换多种生活场景，情感交流无障碍。',
    '开放式厨房连接岛台餐厨，打开心扉拒绝“社恐症”。'
  ],
  image: [
    imageList.keting,
    imageList.canchu
  ],
  name: ['客厅', '餐厨']
}
const bathroomStorage = { // （卫浴 + 收纳）数据
  title: [
    '干湿分离式卫浴，让居住多一份舒适。',
    '全屋收纳，腾出更多空间留给家人相处。'
  ],
  image: [
    imageList.weiyu,
    imageList.shouna
  ],
  name: ['卫浴', '收纳']
}

const shimIndex = ref(0)
const communityBgUrl0 = 'url(' + communityBg + ')' // 背景图片变量

const communityBgResult = ref('none')

const showOptimalOverlay = computed(() => store.state.showOptimalOverlay)

const handleOptimal = (index) => { // 点击每个主张
  shimIndex.value = index
  nextTick(() => {
    if (index > 0) {
      animateCSS('.optimalTitle', ['animate__fadeInDown'], 0, true)
    }
  })
  if (index === 1 || index === 3) {
    communityBgResult.value = 'none'
  } else if (index === 2 || index === 4) {
    communityBgResult.value = 'none'
  } else {
    communityBgResult.value = 'none'
  }
}

const handleMiddleImage = (index) => { // 点击中心图片
  store.commit(SET_OPTIMAL_OVERLAY, true)
  overlayTag.value = index // 动态改变 overlayTag
}
</script>
<style lang="less" scoped>
.optimal{
  height: 100%;
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: rgba(255,255,255,1);
  .optimal_box{
    .optimal_content{
      overflow: hidden;
      .optimal_item{
        padding: 25px 20px 0;
        .research_top_img{
          margin: 0 auto;
          width: 600px;
          height: 450px;
          background-position: 80px -370px;
          background-size: 75%;
          background-image: url(./../../../assets/bing2.gif);
          background-repeat: no-repeat;
        }
        .research_bottom_img{
          margin: 30px auto;
          width: 600px;
          height: 500px;
          background-position: 125px -280px;
          background-size: 60%;
          background-image: url(./../../../assets/zhu1.gif);
          background-repeat: no-repeat;
        }
        .title{
          margin-top: 90px;
          padding-left: 68px;
          line-height: 50px;
          color: #333333;
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
