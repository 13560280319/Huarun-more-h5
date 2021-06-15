<template>
  <TitleAnimate :topTitle=topTitle></TitleAnimate>
  <div class="optimal_bathroom invisible optimalBathroomAnimate">
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
        <div class="bathroom_swiper_image_box">
          <img class="bathroom_swiper_image" :src="bathroom1" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="bathroom_swiper_image_box">
          <img class="bathroom_swiper_image" :src="bathroom2" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="bathroom_swiper_image_box">
          <img class="bathroom_swiper_image" :src="bathroom3" />
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
import bathroom1 from './../../../assets/weiyu1.png'
import bathroom2 from './../../../assets/weiyu2.png'
import bathroom3 from './../../../assets/weiyu3.png'
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
        title1: '日常生活中不做',
        title2: '“细节绝缘体”',
        description1: '卫浴',
        description2: '让居中多一分舒适'
      },
      bathroom1,
      bathroom2,
      bathroom3,
      navigationList: ['双分模式', '一字型双分模式', '三分模式'],
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
      swiper = document.querySelectorAll('.swiper-container')[5].swiper // 第 6 个 swiper 组件
      swiper.autoplay.stop()
    })

    watch(sliderSwiperName, (newVal, oldVal) => {
      if (newVal === 'optimalBathroom') {
        setTimeout(() => {
          animateCSS('.optimalBathroomAnimate', ['animate__fadeIn'], 0).then(() => {
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
.optimal_bathroom{
  margin-top: 60px;
  padding: 0 60px;
  --animate-duration: 1500ms;
  .bathroom_swiper_image_box{
    padding: 0 30px;
    text-align: center;
    box-sizing: border-box;
    .bathroom_swiper_image{
      height: 460px;
    }
  }
  .bottom_navigation{
    margin-top: 50px;
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
