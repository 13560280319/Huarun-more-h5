<template>
  <TitleAnimate :topTitle="topTitle"></TitleAnimate>
  <div class="community_research_one">
    <div class="each_research_object invisible eachResearchObjectAnimate">
      <div class="ertong_box">
        <img class="full_img" src="./../../../assets/ertong.png" />
      </div>
      <div class="gif_box">
        <img class="full_img" src="./../../../assets/1.gif" />
      </div>
    </div>

    <div class="each_research_object invisible eachResearchObjectAnimate">
      <div class="qingshaonian">
        <img class="full_img" src="./../../../assets/qingshaonian.png" />
      </div>
      <div class="gif_box">
        <img class="full_img" src="./../../../assets/2.gif" />
      </div>
    </div>

    <div class="each_research_object invisible eachResearchObjectAnimate">
      <div class="zhongqingnian">
        <img class="full_img" src="./../../../assets/zhongqingnian.png" />
      </div>
      <div class="gif_box">
        <img class="full_img" src="./../../../assets/3.gif" />
      </div>
    </div>

    <div class="each_research_object invisible eachResearchObjectAnimate">
      <div class="laonian">
        <img class="full_img" src="./../../../assets/laonian.png" />
      </div>
      <div class="gif_box">
        <img class="full_img" src="./../../../assets/4.gif" />
      </div>
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
        description1: '谁经常在社区活动？'
      }
    }
  },
  setup () {
    const store = useStore()
    const sliderSwiperName = computed(() => store.state.sliderSwiperName)
    watch(sliderSwiperName, (newVal, oldVal) => {
      if (newVal === 'communityActivityOne') {
        setTimeout(() => {
          animateCSS('.eachResearchObjectAnimate', ['animate__fadeIn'], 0)
        }, 2000)
        setTimeout(() => {
          animateCSS('.eachResearchObjectAnimate', ['animate__fadeIn'], 1)
        }, 2500)
        setTimeout(() => {
          animateCSS('.eachResearchObjectAnimate', ['animate__fadeIn'], 2)
        }, 3000)
        setTimeout(() => {
          animateCSS('.eachResearchObjectAnimate', ['animate__fadeIn'], 3)
        }, 3500)
      }
    })

    return {
    }
  }
}
</script>
<style lang="less" scoped>
.community_research_one{
  margin-top: -10px;
  padding: 0 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  .each_research_object{
    margin: 35px 5px 0 25px;
    display: flex;
    flex-direction: row;
    --animate-duration: 1500ms;
    .ertong_box{
      margin-top: 80px;
      width: 109px;
      height: 195px;
    }
    .qingshaonian{
      width: 97px;
      height: 292px;
    }
    .zhongqingnian{
      width: 127px;
      height: 348px;
    }
    .laonian{
      margin-top: 25px;
      width: 140px;
      height: 321px;
    }
    .gif_box{
      margin-left: -15px;
      width: 180px;
      height: 180px;
    }
  }
}
</style>
