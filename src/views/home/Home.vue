<template>
  <div class="swiper_box">
    <swiper :direction="'vertical'" @slideChangeTransitionEnd="onSlideChangeTransitionEnd">
      <swiper-slide>
        <div class="swiper1">
          <div class="opinion_box">
            <div class="opinion_content">
              <dl v-for="(item, index) of opinionList" :key="index" @click="handleEachOpinion(index)">
                <dt>{{ item.tag }}</dt>
                <dd>{{ item.title }}</dd>
              </dl>
            </div>
          </div>
          <DownArrow @click="handleBottomArrow"></DownArrow>
        </div>
      </swiper-slide>
      <swiper-slide>
        <!-- 城市主张序 -->
        <PrefacePartCity></PrefacePartCity>
      </swiper-slide>
      <swiper-slide>
        <!-- 城市主张 -->
        <CityOpinion :opinionArray="cityOpinionList"></CityOpinion>
      </swiper-slide>
      <swiper-slide>
        <!-- 美好社区序 -->
        <PrefacePartCommunity></PrefacePartCommunity>
      </swiper-slide>
      <!-- 美好社区 -->
      <!-- <swiper-slide>
        <BeautifulCommunity></BeautifulCommunity>
      </swiper-slide> -->
      <swiper-slide>
        <!-- 三张图片 -->
        <ThreeImageCommunity></ThreeImageCommunity>
      </swiper-slide>
      <swiper-slide>
        <!-- 美好社区--功能模块 -->
        <OverlayInnerCommunity :overlayData="functionData"></OverlayInnerCommunity>
      </swiper-slide>
      <swiper-slide>
        <!-- 美好社区--幸福归家路 -->
        <OverlayInnerCommunity :overlayData="happinessData"></OverlayInnerCommunity>
      </swiper-slide>
      <swiper-slide>
        <!-- 美好社区--优居研究所 -->
        <OverlayInnerCommunity :overlayData="graduateData"></OverlayInnerCommunity>
      </swiper-slide>
      <swiper-slide>
        <!-- 优居生活序 -->
        <PrefacePartLive></PrefacePartLive>
      </swiper-slide>
      <swiper-slide>
        <!-- 优居生活 -->
        <OptimalLive></OptimalLive>
      </swiper-slide>
      <swiper-slide>
        <!-- 智慧服务序 -->
        <PrefacePartSmart></PrefacePartSmart>
      </swiper-slide>
      <swiper-slide>
        <!-- 智慧服务 -->
        <SmartService :opinionArray="SmartServiceList"></SmartService>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import DownArrow from '@/components/DownArrow.vue'
import PrefacePartCity from '@/views/home/components/PrefacePartCity.vue'
import PrefacePartSmart from '@/views/home/components/PrefacePartSmart.vue'
import PrefacePartLive from '@/views/home/components/PrefacePartLive.vue'
import PrefacePartCommunity from '@/views/home/components/PrefacePartCommunity.vue'
import CityOpinion from '@/views/home/components/CityOpinion.vue'
import BeautifulCommunity from '@/views/home/components/BeautifulCommunity.vue'
import OptimalLive from '@/views/home/components/OptimalLive.vue'
import SmartService from '@/views/home/components/SmartService.vue'
import OverlayInnerCommunity from '@/views/home/components/OverlayInnerCommunity.vue'
import ThreeImageCommunity from '@/views/home/components/ThreeImageCommunity.vue'
import { SET_ACTIVE_SWIPER } from '@/store/mutation-types'
import * as imageList from './js/backgroundImage'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.less'
import { onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
  components: {
    Swiper,
    SwiperSlide,
    DownArrow,
    PrefacePartCity,
    PrefacePartCommunity,
    PrefacePartLive,
    PrefacePartSmart,
    CityOpinion,
    BeautifulCommunity,
    OverlayInnerCommunity,
    ThreeImageCommunity,
    OptimalLive,
    SmartService
  },
  data () {
    return {
      opinionList: [
        { tag: 'More+', title: '城市理想' },
        { tag: 'More+', title: '美好社区' },
        { tag: 'More+', title: '优居生活' },
        { tag: 'More+', title: '智慧服务' }
      ],
      cityOpinionList: [ // 城市主张数据
        {
          name: '万象商业',
          title: '城市理想-万象商业',
          explain: '华润置地·万象商业 让城市更缤纷',
          description: '华润置地作为中国知名的商业运营方之一，以万象城、万象天地、万象汇为代表的商业空间，将陆续入驻广州，带来更前沿、更新鲜的生活体验。'
        },
        {
          name: '品质住宅',
          title: '城市理想-品质住宅',
          explain: '华润置地·品质住宅 让城市生活更舒服',
          description: '于城市中，华润置地广州打造了从空中花园、灵山岛C位，到市中心的公园社区等不同维度的理想住宅。'
        },
        {
          name: '润慧科技',
          title: '城市理想-润慧科技',
          explain: '华润置地·润慧科技 让城市产业创新生长',
          description: '华润置地广州立足“为美好生活而来”的使命，打造广州润慧科技园，帮助企业快速成长，推动城市产业转型升级，实现“质的飞跃”'
        },
        {
          name: '有巢公寓',
          title: '城市理想-有巢公寓',
          explain: '华润置地·有巢公寓 让城市青年梦有所居',
          description: '华润置地广州想为每一个努力奋斗的人带来舒适的生活享受，有巢公寓应运而生，让城市青年居有所乐、生活充满无限精彩。'
        },
        {
          name: '颐养中心',
          title: '城市理想-颐养中心',
          explain: '华润置地·颐养中心 让长者老有所乐',
          description: '华润置地广州围绕“养、住、食、娱”四大生活场景，为长者打造一个全能型康养胜地。'
        }
      ],
      SmartServiceList: [ // 智慧服务数据
        {
          name: '智能家居',
          title: '智慧服务-智能家居',
          explain: 'Get家居黑科技 “傻白甜”变居家达人！',
          description: '“无论身在何处，家就在身边”，这种快乐，只有身在其中的人才会知道！'
        },
        {
          name: '智慧社区',
          title: '智慧服务-智慧社区',
          explain: '社区变“聪明” 生活安全感倍增！',
          description: '提前发现，提前预警，社区里面的智能防控全年无休，保护每一位家人，尽其所能把危险都扼杀在“摇篮”里。'
        },
        {
          name: '物业服务',
          title: '智慧服务-物业服务',
          explain: '生活大管家“神助攻”  让你更轻松'
        }
      ],
      functionData: { // 美好社区--功能模块数据
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
      },
      happinessData: { // 美好社区--幸福归家路数据
        title: [
          '入口人车分流，确保社区环境与安全。',
          '回家仪式感，层层递进。',
          '科学合理的风、光、声设计，舒适环境更欢乐。',
          '配建约15万m²空中花园，让绿色融入生活中。',
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
      },
      graduateData: { // 美好社区--优居研究所数据
        title: [
          '社群生活圈，提升幸福指数。',
          '理想小“社会”， 实现“半径生活梦”。',
          '活跃在景观中的互动，连接人地关系。'
        ],
        image: [
          imageList.shenghuoquan,
          imageList.shenghuomeng,
          imageList.renjiguanxi
        ],
        name: ['生活圈', '生活梦', '人际关系']
      }
    }
  },
  setup () {
    const store = useStore()
    let swiper = null
    onMounted(() => {
      swiper = document.querySelector('.swiper-container').swiper
    })
    const handleBottomArrow = () => {
      swiper.slideTo(1)
    }
    const onSlideChangeTransitionEnd = (swiper) => { // 监听每次滑动 swiper 结束
      store.commit(SET_ACTIVE_SWIPER, swiper.activeIndex)
    }
    const handleEachOpinion = (index) => {
      switch (index) {
        case 0:
          swiper.slideTo(1)
          break
        case 1:
          swiper.slideTo(3)
          break
        case 2:
          swiper.slideTo(5)
          break
        case 3:
          swiper.slideTo(7)
          break
      }
    }

    return {
      handleBottomArrow,
      onSlideChangeTransitionEnd,
      handleEachOpinion
    }
  }
}
</script>
<style lang="less" scoped>
.swiper_box{
  height: 100%;
  .swiper1{
    position: relative;
    overflow: hidden;
    height: 100%;
    background-image: url('./../../assets/homePage.gif');
    background-size: 100% 103%;
    background-repeat: no-repeat;
    .opinion_box{
      position: absolute;
      top: 72%;
      width: 100%;
      .opinion_content{
        margin: 0 auto;
        width: 92%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        dl{
          width: 25%;
          dt{
            height: 17px;
            line-height: 17px;
            text-align: center;
            font-size: 17px;
            font-weight: 600;
            font-family: 'VWText-Regular','HYQiHei-60S';
            color: #333333;
          }
          dd{
            margin-top: 17px;
            height: 12px;
            line-height: 12px;
            text-align: center;
            color: #333333;
            font-size: 12px;
            font-weight: 600;
            font-family: 'VWText-Regular','HYQiHei-60S';
          }
        }
      }
    }
  }
}
</style>
