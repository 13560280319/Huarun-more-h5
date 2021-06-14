<template>
  <TitleAnimate :topTitle=topTitle></TitleAnimate>
  <div class="smart_home invisible smartHomeAnimate">
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
        <div class="home_swiper_image_box">
          <img class="home_swiper_image" :src="imageList.home1" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="home_swiper_image_box">
          <img class="home_swiper_image" :src="imageList.home2" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="home_swiper_image_box">
          <img class="home_swiper_image" :src="imageList.home3" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="home_swiper_image_box">
          <img class="home_swiper_image" :src="imageList.home4" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="home_swiper_image_box">
          <img class="home_swiper_image" :src="imageList.home5" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="home_swiper_image_box">
          <img class="home_swiper_image" :src="imageList.home6" />
        </div>
      </swiper-slide>
    </swiper>

    <div class="bottom_navigation">
      <div :class="{ activeEachType: shimIndex === index }" class="each_type" v-for="(item, index) of navigationList" :key="index" @click="handleNavigation(index)">
        <div class="time_image">
          <img :src="item.time" alt="">
        </div>
        <div class="clock_image">
          <img :src="item.clock" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as imageList from '@/views/home/js/image'
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
      imageList,
      topTitle: {
        title1: '智慧服务',
        title2: '家居物联',
        description1: 'Get家居黑科技',
        description2: '“傻白甜”变家居达人'
      },
      navigationList: [
        { time: imageList.time1, clock: imageList.clock1 },
        { time: imageList.time2, clock: imageList.clock2 },
        { time: imageList.time3, clock: imageList.clock3 },
        { time: imageList.time4, clock: imageList.clock4 },
        { time: imageList.time5, clock: imageList.clock5 },
        { time: imageList.time6, clock: imageList.clock6 }
      ],
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
      swiper = document.querySelectorAll('.swiper-container')[4].swiper // 第 5个 swiper 组件
      swiper.autoplay.stop()
    })

    watch(sliderSwiperName, (newVal, oldVal) => {
      if (newVal === 'smartHome') {
        setTimeout(() => {
          animateCSS('.smartHomeAnimate', ['animate__fadeIn'], 0).then(() => {
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
.smart_home{
  margin-top: 25px;
  padding: 0 60px;
  --animate-duration: 1500ms;
  .home_swiper_image_box{
    width: 630px;
    padding: 0 30px;
    box-sizing: border-box;
    .home_swiper_image{
      width: 100%;
    }
  }
  .bottom_navigation{
    margin-top: 55px;
    margin-left: -30px;
    display: flex;
    flex-direction: row;
    .each_type{
      border: 3px solid rgb(237,237,237);
      padding: 15px 12px 8px 15px;
      .time_image{
        height: 16px;
        img{
          vertical-align: top;
          height: 100%;
        }
      }
      .clock_image{
        margin-top: 5px;
        height: 35px;
        text-align: right;
        img{
          vertical-align: top;
          height: 100%;
        }
      }
    }
    .activeEachType{
      border: 3px solid rgb(235,188,61);
    }
  }
}
</style>
