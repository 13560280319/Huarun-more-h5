<template>
  <TitleAnimate :topTitle="topTitle"></TitleAnimate>
  <div class="community_research_three">
    <div class="community_research_image invisible communityResearchImageAnimate">
      <video
      preload="auto"
      playsinline="true"
      webkit-playsinline="true"
      x5-video-player-type="h5-page"
      x5-video-player-fullscreen="true"
      x5-video-orientation="portraint"
      poster="./../../../assets/fengmian.jpg"
      controls>
        <source src="./../../../assets/yanjiuguiji.mp4" type="video/mp4">
      </video>
    </div>
  </div>
</template>
<script>
import TitleAnimate from '@/components/TitleAnimate.vue'
import { animateCSS } from '@/utils/animationEnd'
import { computed, watch } from 'vue'
import { useStore } from 'vuex'
export default {
  components: {
    TitleAnimate
  },
  data () {
    return {
      topTitle: {
        title1: '美好社区',
        title2: '研究过程',
        description1: '全家人活动时间',
        description2: '轨迹一览图'
      }
    }
  },
  setup () {
    const store = useStore()
    const sliderSwiperName = computed(() => store.state.sliderSwiperName)
    watch(sliderSwiperName, (newVal, oldVal) => {
      if (newVal === 'communityActivityThree') {
        setTimeout(() => {
          animateCSS('.communityResearchImageAnimate', ['animate__fadeIn'], 0)
        }, 2000)
      }
    })

    return {
    }
  }
}
</script>
<style lang="less" scoped>
.community_research_three{
  padding: 0px 40px;
  height: 50%;
  .community_research_image{
    text-align: center;
    --animate-duration: 1500ms;
    video{
      width: 85%;
    }
  }
}
</style>
