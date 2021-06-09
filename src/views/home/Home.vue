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
          <DownArrow></DownArrow>
        </div>
      </swiper-slide>
      <swiper-slide>
        <PrefacePartCity></PrefacePartCity>
      </swiper-slide>
      <swiper-slide>
        <CityOpinion :opinionArray="cityOpinionList"></CityOpinion>
      </swiper-slide>
      <swiper-slide>
        <PrefacePartCommunity></PrefacePartCommunity>
      </swiper-slide>
      <swiper-slide>
        <BeautifulCommunity></BeautifulCommunity>
      </swiper-slide>
      <swiper-slide>
        <PrefacePartLive></PrefacePartLive>
      </swiper-slide>
      <swiper-slide>
        <OptimalLive></OptimalLive>
      </swiper-slide>
      <swiper-slide>
        <PrefacePartSmart></PrefacePartSmart>
      </swiper-slide>
      <swiper-slide>
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
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.less'
import { onMounted } from 'vue'
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
      cityOpinionList: [
        {
          name: '万象商业',
          title: '城市理想-万象商业',
          explain: '华润置地·万象商业 让城市更缤纷',
          description: '华润置地作为中国最优秀的商业运营方之一，以万象城、万象天地、万象汇为代表的商业空间，将陆续入驻广州，带来更前沿、更新鲜的生活体验。'
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
          description: '华润置地广州立足“为美好生活而来”的使命，打造广州润慧科技园，帮助企业快速成长，推动城市产业转型升级，实现“质的飞跃'
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
      SmartServiceList: [
        {
          name: '智能家居',
          title: '智慧服务-智能家居',
          explain: 'Get家居黑科技 “傻白甜”变居家达人！',
          description: '无论身在何处，家就在身边“，这种快乐，只有身在其中的人才会知道！'
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
      ]
    }
  },
  setup () {
    let swiper = null
    onMounted(() => {
      swiper = document.querySelector('.swiper-container').swiper
    })
    const onSlideChangeTransitionEnd = (swiper) => {}
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
    background-size: 100%;
    background-repeat: no-repeat;
    .opinion_box{
      position: absolute;
      top: 72%;
      width: 100%;
      .opinion_content{
        width: 100%;
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
            margin-top: 16px;
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
