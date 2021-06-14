<template>
  <TitleAnimate :topTitle=topTitle></TitleAnimate>
  <div class="smart_housekeeper invisible smartHousekeeperAnimate">
    <swiper
      :loop="true"
      :speed="200"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false  // 用户每次交互后都继续自动播放
      }"
      @activeIndexChange="activeIndexChange"
      >
      <swiper-slide>
        <div class="housekeeper_swiper_image_box">
          <img class="housekeeper_swiper_image" :src="housekeeper1" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="housekeeper_swiper_image_box">
          <img class="housekeeper_swiper_image" :src="housekeeper2" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="housekeeper_swiper_image_box">
          <img class="housekeeper_swiper_image" :src="housekeeper3" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="housekeeper_swiper_image_box">
          <img class="housekeeper_swiper_image" :src="housekeeper4" />
        </div>
      </swiper-slide>
    </swiper>

    <div class="bottom_navigation">
      <div class="each_type" v-for="(item, index) of navigationList" :key="index" @click="handleNavigation(index)">
        <p class="p1">{{ item }}</p>
        <p v-show="shimIndex === index" class="p2"></p>
      </div>
    </div>
  </div>
</template>
<script>
import housekeeper1 from './../../../assets/H50608-28.png'
import housekeeper2 from './../../../assets/H50608-29.png'
import housekeeper3 from './../../../assets/H50608-30.png'
import housekeeper4 from './../../../assets/H50608-31.png'
import TitleAnimate from '@/components/TitleAnimate.vue'
import { animateCSS } from '@/utils/animationEnd'
import { computed, onMounted, reactive, watch } from 'vue'
import { useStore } from 'vuex'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.less'
import SwiperCore, { Autoplay } from 'swiper'
SwiperCore.use([Autoplay])
export default {
  components: {
    TitleAnimate,
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      topTitle: {
        title1: '智慧服务',
        title2: '生活管家',
        description1: '生活大管家“神助攻”',
        description2: '让你更轻松'
      },
      housekeeper1,
      housekeeper2,
      housekeeper3,
      housekeeper4,
      navigationList: ['悦服务', '悦资产', '悦智慧', '悦生活'],
      shimIndex: 0
    }
  },
  methods: {
    activeIndexChange (swiper) {
      this.shimIndex = swiper.realIndex
    }
  },
  setup () {
    const store = useStore()
    const sliderSwiperName = computed(() => store.state.sliderSwiperName)
    let swiper = reactive({})

    onMounted(() => {
      swiper = document.querySelectorAll('.swiper-container')[6].swiper // 第 7 个 swiper 组件
      swiper.autoplay.stop()
    })

    watch(sliderSwiperName, (newVal, oldVal) => {
      if (newVal === 'smartHousekeeper') {
        setTimeout(() => {
          animateCSS('.smartHousekeeperAnimate', ['animate__fadeIn'], 0).then(() => {
            swiper.autoplay.start()
          })
        }, 2000)
      }
    })

    const handleNavigation = (index) => {
      swiper.slideToLoop(index)
    }

    return {
      handleNavigation
    }
  }
}
</script>
<style lang="less" scoped>
.smart_housekeeper{
  margin-top: -30px;
  padding: 0 60px;
  --animate-duration: 1500ms;
  .housekeeper_swiper_image_box{
    width: 630px;
    .housekeeper_swiper_image{
      width: 100%;
    }
  }
  .bottom_navigation{
    margin-top: 100px;
    padding: 0 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .each_type{
      .p1{
        height: 30px;
        line-height: 30px;
        font-size: 30px;
        font-family: 'PingFang SC';
        color: #333333;
      }
      .p2{
        margin-top: 5px;
        height: 6px;
        border-radius: 10%;
        background-color: rgb(243,194,57);
      }
    }
  }
}
</style>
