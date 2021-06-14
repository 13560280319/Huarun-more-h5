<template>
  <div class="swiper_box">
    <swiper :direction="'vertical'" class="home_swiper"
    @slideChangeTransitionEnd="onSlideChangeTransitionEnd"
    @slideChangeTransitionStart="onSlideChangeTransitionStart">

      <!-- loading 页面 -->
      <swiper-slide>
        <div class="swiper0">
          <img class="loading_img" src="./../../assets/loading.gif">
        </div>
      </swiper-slide>

      <!-- 首页 -->
      <swiper-slide>
        <div v-if="reverseHome" class="swiper1 homeAnimate">
          <div class="home_back">
            <img src="./../../assets/homePage.gif" alt="">
          </div>
          <div class="click_down">
            <img class="down_gif" src="./../../assets/touchBottom.gif" alt="">
          </div>
        </div>
      </swiper-slide>

      <!-- 城市主张--序 -->
      <swiper-slide>
        <PrefacePartCity :prefacePartData="prefacePartList.cityPreface" contentClass="cityPreface"></PrefacePartCity>
      </swiper-slide>

      <!-- 城市主张 -->
      <swiper-slide>
        <CityOpinion></CityOpinion>
      </swiper-slide>

      <!-- 美好社区--序 -->
      <swiper-slide>
        <PrefacePartCommunity :prefacePartData="prefacePartList.communityPreface" contentClass="communityPreface"></PrefacePartCommunity>
      </swiper-slide>

      <!-- 美好社区--社区主张 -->
      <swiper-slide>
        <CommunityOpinion></CommunityOpinion>
      </swiper-slide>

      <!-- 美好社区--研究过程--页面 1 -->
      <swiper-slide>
        <CommunityResearchOne></CommunityResearchOne>
      </swiper-slide>

      <!-- 美好社区--研究过程--页面 2 -->
      <swiper-slide>
        <CommunityResearchTwo></CommunityResearchTwo>
      </swiper-slide>

      <!-- 美好社区--研究过程--页面 3 -->
      <swiper-slide>
        <CommunityResearchThree></CommunityResearchThree>
      </swiper-slide>

      <!-- 美好社区--怎么实现 -->
      <swiper-slide>
        <CommunityImplementation></CommunityImplementation>
      </swiper-slide>

      <!-- 美好社区--细节动人 -->
      <swiper-slide>
        <CommunityDetails></CommunityDetails>
      </swiper-slide>

      <!-- 美好社区--功能模块 -->
      <!-- <swiper-slide>
        <SwitchContent :overlayData="functionData"></SwitchContent>
      </swiper-slide> -->

      <!-- 美好社区--幸福归家路 -->
      <!-- <swiper-slide>
        <SwitchContent :overlayData="happinessData"></SwitchContent>
      </swiper-slide> -->

      <!-- 美好社区--优居研究所 -->
      <!-- <swiper-slide>
        <SwitchContent :overlayData="graduateData"></SwitchContent>
      </swiper-slide> -->

      <!-- 优居生活--序 -->
      <swiper-slide>
        <PrefacePartLive :prefacePartData="prefacePartList.livePreface" contentClass="livePreface"></PrefacePartLive>
      </swiper-slide>

      <!-- 优居生活--研究洞察 -->
      <swiper-slide>
        <OptimalInsight></OptimalInsight>
      </swiper-slide>

      <!-- 优居生活--卧室+阳台 -->
      <swiper-slide>
        <OptimalBedroomBalcony></OptimalBedroomBalcony>
      </swiper-slide>

      <!-- 优居生活--客厅+餐厅 -->
      <swiper-slide>
        <OptimalLivingKitchen></OptimalLivingKitchen>
      </swiper-slide>

      <!-- 优居生活--卫浴 -->
      <swiper-slide>
        <OptimalBathroom></OptimalBathroom>
      </swiper-slide>

      <!-- 优居生活--收纳 -->
      <swiper-slide>
        <OptimalStorage></OptimalStorage>
      </swiper-slide>

      <!-- 优居生活（客厅 + 餐厨） -->
      <!-- <swiper-slide>
        <SwitchContent :overlayData="livingKitchen"></SwitchContent>
      </swiper-slide> -->

      <!-- 优居生活（卫浴 + 收纳） -->
      <!-- <swiper-slide>
        <SwitchContent :overlayData="bathroomStorage"></SwitchContent>
      </swiper-slide> -->

      <!-- 智慧服务--序 -->
      <swiper-slide>
        <PrefacePartSmart :prefacePartData="prefacePartList.smartPreface" contentClass="smartPreface"></PrefacePartSmart>
      </swiper-slide>

      <!-- 智慧服务--预警中心 -->
      <swiper-slide>
        <SmartWarning></SmartWarning>
      </swiper-slide>

      <!-- 智慧服务--生活管家 -->
      <swiper-slide>
        <SmartHousekeeper></SmartHousekeeper>
      </swiper-slide>

      <!-- 智慧服务--家居物联 -->
      <swiper-slide>
        <SmartHome></SmartHome>
      </swiper-slide>

      <swiper-slide>
        <Ending></Ending>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import PrefacePartCity from '@/views/home/components/PrefacePartCity.vue'
import PrefacePartCommunity from '@/views/home/components/PrefacePartCommunity.vue'
import PrefacePartLive from '@/views/home/components/PrefacePartLive.vue'
import PrefacePartSmart from '@/views/home/components/PrefacePartSmart.vue'
import CityOpinion from '@/views/home/components/CityOpinion.vue'
import CommunityOpinion from '@/views/home/components/CommunityOpinion.vue'
import CommunityResearchOne from '@/views/home/components/CommunityResearchOne.vue'
import CommunityResearchTwo from '@/views/home/components/CommunityResearchTwo.vue'
import CommunityResearchThree from '@/views/home/components/CommunityResearchThree.vue'
import CommunityImplementation from '@/views/home/components/CommunityImplementation.vue'
import CommunityDetails from '@/views/home/components/CommunityDetails.vue'
import OptimalInsight from '@/views/home/components/OptimalInsight.vue'
import OptimalBedroomBalcony from '@/views/home/components/OptimalBedroomBalcony.vue'
import OptimalLivingKitchen from '@/views/home/components/OptimalLivingKitchen.vue'
import OptimalBathroom from '@/views/home/components/OptimalBathroom.vue'
import OptimalStorage from '@/views/home/components/OptimalStorage.vue'
import SmartWarning from '@/views/home/components/SmartWarning.vue'
import SmartHousekeeper from '@/views/home/components/SmartHousekeeper.vue'
import SmartHome from '@/views/home/components/SmartHome.vue'
import SwitchContent from '@/views/home/components/SwitchContent.vue'
import Ending from '@/views/home/components/Ending.vue'
import { animateCSS } from '@/utils/animationEnd'
import { SET_SLIDER_SWIPER_NAME, SET_END_SWIPER_INDEX, SET_START_SWIPER_INDEX } from '@/store/mutation-types'
import * as imageList from './js/backgroundImage'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.less'
import { nextTick, onMounted, ref, reactive } from 'vue'
import { useStore } from 'vuex'
export default {
  components: {
    Swiper,
    SwiperSlide,
    PrefacePartCity,
    PrefacePartCommunity,
    PrefacePartLive,
    PrefacePartSmart,
    CityOpinion,
    CommunityOpinion,
    CommunityResearchOne,
    CommunityResearchTwo,
    CommunityResearchThree,
    CommunityImplementation,
    CommunityDetails,
    OptimalInsight,
    OptimalBedroomBalcony,
    OptimalLivingKitchen,
    OptimalBathroom,
    OptimalStorage,
    SmartWarning,
    SmartHousekeeper,
    SmartHome,
    Ending,
    SwitchContent
  },
  data () {
    return {
      opinionList: [ // 首页底部导航栏
        { tag: 'More+', title: '城市理想' },
        { tag: 'More+', title: '美好社区' },
        { tag: 'More+', title: '优居生活' },
        { tag: 'More+', title: '智慧服务' }
      ],
      prefacePartList: {
        cityPreface: {
          title: '城市理想',
          part: 'PART 01',
          text1: '当城市的一切想象均已落地，所形成的是代言“未来生活方式”的空间，人们在这里聚焦情感和满足需求。',
          text2: '争流而上的广州，正在为人们的新日常与生活体验感，加速蜕变。',
          backGif: imageList.cityXu
        },
        communityPreface: {
          title: '美好社区',
          part: 'PART 02',
          text1: '个人边界感愈发明显的城市中，生活在一个温暖舒适并能享受趣味的美好社区，已成为大多数人的向往。在那里，人们有更多机会交流互动，体会到城市压力之外的生活乐趣。',
          backGif: imageList.communityXu
        },
        livePreface: {
          title: '优居生活',
          part: 'PART 03',
          text1: '后疫情时代，人们对“家”的意义发生了观念转变，更多时候会思考：如何在家里度过日常生活，以及如何与与家人、朋友和自己相处得更好。未来，我们的家将会变得更灵活、更健康、更有意思、更周到。',
          backGif: imageList.liveXu
        },
        smartPreface: {
          title: '智慧服务',
          part: 'PART 04',
          text1: '比关怀更好的，是真实地给予。',
          text2: '华润置地广州从情感悉心服务开始，为人们带来更智慧、更便捷的生活，让更多人看见“生活会更好”的可能性。',
          backGif: imageList.smartXu
        }
      },
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
          '理想“小社会”， 实现“半径生活梦”。',
          '活跃在景观中的互动，连接人地关系。'
        ],
        image: [
          imageList.shenghuoquan,
          imageList.shenghuomeng,
          imageList.renjiguanxi
        ],
        name: ['生活圈', '生活梦', '人际关系']
      },
      bedroomBalcony: { // 优居生活--（卧室 + 阳台）数据
        title: [
          '卧室，每一平方都带有温度。',
          '阳台，给自己一个会呼吸的能量场。'
        ],
        image: [
          imageList.woshi,
          imageList.yangtai
        ],
        name: ['卧室', '阳台']
      },
      livingKitchen: { // 优居生活--（客厅 + 餐厨）数据
        title: [
          '多功能客厅，随意切换多种生活场景，情感交流无障碍。',
          '开放式厨房连接岛台餐厨，打开心扉拒绝“社恐症”。'
        ],
        image: [
          imageList.keting,
          imageList.canchu
        ],
        name: ['客厅', '餐厨']
      },
      bathroomStorage: { // 优居生活--（卫浴 + 收纳）数据
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
    }
  },
  setup () {
    const store = useStore()
    let swiper = reactive({})
    const reverseHome = ref(false)

    onMounted(() => {
      swiper = document.querySelector('.swiper-container').swiper
      swiper.disable()
      setTimeout(() => {
        swiper.enabled = true // 解决 swiper.enabled is not a function 报错
        reverseHome.value = true
        nextTick(() => {
          animateCSS('.homeAnimate', ['animate__fadeIn', 'animate__slow'])
        })
        swiper.removeSlide(0)
      }, 5500)
    })

    const onSlideChangeTransitionStart = (swiper) => { // 监听每次滑动 swiper 开始
      store.commit(SET_START_SWIPER_INDEX, swiper.activeIndex)
    }

    const onSlideChangeTransitionEnd = (swiper) => { // 监听每次滑动 swiper 结束
      console.log('swiper.activeIndex', swiper.activeIndex)
      store.commit(SET_END_SWIPER_INDEX, swiper.activeIndex)

      switch (swiper.activeIndex) {
        case 1: // 城市理想--序
          store.commit(SET_SLIDER_SWIPER_NAME, 'cityPrefacePart')
          break
        case 3: // 美好社区--序
          store.commit(SET_SLIDER_SWIPER_NAME, 'communityPrefacePart')
          break
        case 4: // 美好社区--社区主张
          store.commit(SET_SLIDER_SWIPER_NAME, 'communityOpinion')
          break
        case 5: // 美好社区--研究过程--页面 1
          store.commit(SET_SLIDER_SWIPER_NAME, 'communityActivityOne')
          break
        case 6: // 美好社区--研究过程--页面 2
          store.commit(SET_SLIDER_SWIPER_NAME, 'communityActivityTwo')
          break
        case 7: // 美好社区--研究过程--页面 3
          store.commit(SET_SLIDER_SWIPER_NAME, 'communityActivityThree')
          break
        case 8: // 美好社区--怎么实现
          store.commit(SET_SLIDER_SWIPER_NAME, 'communityImplementation')
          break
        case 9: // 美好社区--细节动人
          store.commit(SET_SLIDER_SWIPER_NAME, 'communityDetails')
          break
        case 10: // 优居生活--序
          store.commit(SET_SLIDER_SWIPER_NAME, 'optimalPrefacePart')
          break
        case 11: // 优居生活--研究洞察
          store.commit(SET_SLIDER_SWIPER_NAME, 'optimalInsight')
          break
        case 12: // 优居生活--卧室+阳台
          store.commit(SET_SLIDER_SWIPER_NAME, 'optimalBedroomBalcony')
          break
        case 13: // 优居生活--客厅+餐厅
          store.commit(SET_SLIDER_SWIPER_NAME, 'optimalLivingKitchen')
          break
        case 14: // 优居生活--卫浴
          store.commit(SET_SLIDER_SWIPER_NAME, 'optimalBathroom')
          break
        case 15: // 优居生活--收纳
          store.commit(SET_SLIDER_SWIPER_NAME, 'optimalStorage')
          break
        case 16: // 智慧服务--序
          store.commit(SET_SLIDER_SWIPER_NAME, 'smartPrefacePart')
          break
        case 17: // 智慧服务--预警中心
          store.commit(SET_SLIDER_SWIPER_NAME, 'smartWarning')
          break
        case 18: // 智慧服务--生活管家
          store.commit(SET_SLIDER_SWIPER_NAME, 'smartHousekeeper')
          break
        case 19: // 智慧服务--家居物联
          store.commit(SET_SLIDER_SWIPER_NAME, 'smartHome')
          break
        case 20: // 结束页
          store.commit(SET_SLIDER_SWIPER_NAME, 'ending')
          break
      }
    }

    return {
      reverseHome,
      onSlideChangeTransitionStart,
      onSlideChangeTransitionEnd
    }
  }
}
</script>
<style lang="less" scoped>
.swiper_box{
  height: 100%;
  .swiper0{
    width: 100%;
    .loading_img{
      margin-top: -115px;
      width: 100%;
    }
  }
  .swiper1{
    position: relative;
    height: 100%;
    .home_back{
      img{
        width: 100%;
      }
    }
    .click_down{
      position: absolute;
      bottom: 12px;
      width: 100%;
      text-align: center;
      z-index: -1;
      .down_gif{
        width: 500px;
      }
    }
  }
}
</style>
