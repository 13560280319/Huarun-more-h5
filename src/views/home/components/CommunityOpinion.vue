<template>
  <div class="community_opinion">
    <TitleAnimate :topTitle="topTitle"></TitleAnimate>
    <div class="community_opinion_swiper_box invisible communityOpinionSwiperBoxAnimate">
      <swiper
        :slidesPerView="1.29"
        :spaceBetween="25"
        :slidesOffsetBefore="47"
        :slidesOffsetAfter="55"
        :watchSlidesProgress="true"
        :pagination="{
          clickable: true
        }"
        class="community_swiper"
        @activeIndexChange="activeIndexChange"
        >
        <swiper-slide>
          <div class="community_swiper_image_box">
            <img class="community_swiper_image" src="./../../../assets/zhuzhang1.png" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="community_swiper_image_box">
            <img class="community_swiper_image" src="./../../../assets/zhuzhang2.png" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="community_swiper_image_box">
            <img class="community_swiper_image" src="./../../../assets/zhuzhang3.png" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
import TitleAnimate from '@/components/TitleAnimate.vue'
import { animateCSS } from '@/utils/animationEnd'
import { computed, watch } from 'vue'
import { useStore } from 'vuex'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.less'
import SwiperCore, { Pagination } from 'swiper'
import 'swiper/components/pagination/pagination.less'
SwiperCore.use([Pagination])
export default {
  components: {
    TitleAnimate,
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      topTitle: {
        title1: '美好社区',
        title2: '社交内核',
        description1: '交互式社群生活圈',
        description2: '提升幸福指数'
      }
    }
  },
  methods: {
    activeIndexChange (swiper) {
      switch (swiper.activeIndex) {
        case 0:
          this.topTitle = {
            title1: '美好社区',
            title2: '社交内核',
            description1: '交互式社群生活圈',
            description2: '提升幸福指数'
          }
          break
        case 1:
          this.topTitle = {
            title1: '美好社区',
            title2: '半径生活',
            description1: '理想小“社会”',
            description2: '实现“半径生活梦”'
          }
          break
        case 2:
          this.topTitle = {
            title1: '美好社区',
            title2: '重塑关系',
            description1: '活跃在景观中的互动',
            description2: '重塑理想人地关系'
          }
          break
      }
    }
  },
  setup () {
    const store = useStore()
    const sliderSwiperName = computed(() => store.state.sliderSwiperName)

    watch(sliderSwiperName, (newVal, oldVal) => {
      if (newVal === 'communityOpinion') {
        setTimeout(() => {
          animateCSS('.communityOpinionSwiperBoxAnimate', ['animate__fadeIn'], 0)
        }, 2000)
      }
    })

    return {}
  }
}
</script>
<style lang="less" scoped>
.community_opinion{
  height: 100%;
  overflow: hidden;
  .community_opinion_swiper_box{
    height: 60%;
    margin-top: 5px;
    .community_swiper{
      height: 100%;
    }
    .community_swiper_image_box{
      width: 100%;
      .community_swiper_image{
        width: 100%;
      }
    }
  }
}
</style>
