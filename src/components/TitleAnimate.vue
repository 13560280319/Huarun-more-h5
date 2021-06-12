
<template>
  <div class="research_title">
    <div class="title_box invisible researchTitleAnimate">
      <div class="title">美好社区 - </div>
      <div class="line researchLineAnimate"></div>
      <div class="title title2">研究过程</div>
      <div class="line line2 researchLineAnimate"></div>
    </div>
    <div class="description invisible researchDescriptionAniamte">谁进常在社区活动？</div>
    <div class="short_line researchShortLineAnimate"></div>
  </div>
</template>
<script>
import { animateCSS, dealAddClass } from '@/utils/animationEnd'
import { computed, watch } from 'vue'
import { useStore } from 'vuex'
export default {
  data () {
    return {}
  },
  setup () {
    const store = useStore()
    const sliderSwiperName = computed(() => store.state.sliderSwiperName)

    watch(sliderSwiperName, (newVal, oldVal) => {
      switch (newVal) {
        case 'communityActivityOne':
          animateCSS('.researchTitleAnimate', ['animate__fadeIn'], 0)

          setTimeout(() => {
            animateCSS('.researchDescriptionAniamte', ['animate__fadeIn'], 0)
          }, 500)

          setTimeout(() => {
            dealAddClass('.researchLineAnimate', 'animationLine', [0, 1])
            dealAddClass('.researchShortLineAnimate', 'animationShortLine', 0)
          }, 1000)
          break
        case 'communityActivityTwo':
          animateCSS('.researchTitleAnimate', ['animate__fadeIn', 'animate__slow'], 1)

          setTimeout(() => {
            animateCSS('.researchDescriptionAniamte', ['animate__fadeIn'], 1)
          }, 500)

          setTimeout(() => {
            dealAddClass('.researchLineAnimate', 'animationLine', [2, 3])
            dealAddClass('.researchShortLineAnimate', 'animationShortLine', 1)
          }, 1000)
          break
        case 'communityActivityThree':
          animateCSS('.researchTitleAnimate', ['animate__fadeIn', 'animate__slow'], 2)

          setTimeout(() => {
            animateCSS('.researchDescriptionAniamte', ['animate__fadeIn'], 2)
          }, 500)

          setTimeout(() => {
            dealAddClass('.researchLineAnimate', 'animationLine', [4, 5])
            dealAddClass('.researchShortLineAnimate', 'animationShortLine', 2)
          }, 1000)
          break
      }
    })
    return {}
  }
}
</script>
<style lang="less" scoped>
.research_title{
  padding: 40px 40px;
  .title_box{
    display: inline-block;
    --animate-duration: 1500ms;
    .title{
      height: 60px;
      line-height: 60px;
      font-size: 60px;
      font-weight: 500;
      font-family: 'PingFang SC';
      color: rgb(51,51,51);
    }
    .title2{
      margin-top: 2px;
    }
    .line{
      margin-top: -28px;
      width: 0%;
      height: 43px;
      background-color: #F3C239;
    }
  }
  .description{
    margin-top: 60px;
    font-size: 32px;
    font-weight: 500;
    font-family: 'PingFang SC';
    color: rgb(51,51,51);
    --animate-duration: 1500ms;
  }
  .short_line{
    margin-top: 50px;
    width: 0px;
    border-top: 1PX solid rgb(51,51,51);
  }
}

// 黄色底线动画
.animationLine{
  animation: animationLine 1500ms ease-in-out forwards;
}
@keyframes animationLine {
  to {
    width: 105%;
  }
}

// 黑色小短线动画
.animationShortLine{
  animation: animationShortLine 1500ms ease-in-out forwards;
}
@keyframes animationShortLine {
  to {
    width: 135px;
  }
}
</style>
