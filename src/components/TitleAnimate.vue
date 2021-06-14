
<template>
  <div class="research_title">
    <div class="title_box invisible researchTitleAnimate">
      <div class="title">{{ topTitle.title1 }} - </div>
      <div class="line researchLineAnimate"></div>
      <div class="title title2">{{ topTitle.title2 }}</div>
      <div class="line line2 researchLineAnimate"></div>
    </div>
    <div class="description_box invisible researchDescriptionAniamte">
      <div class="description1">{{ topTitle.description1 }}</div>
      <div class="description2">{{ topTitle.description2 }}</div>
    </div>
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
  props: {
    topTitle: Object
  },
  setup () {
    const store = useStore()
    const sliderSwiperName = computed(() => store.state.sliderSwiperName)

    watch(sliderSwiperName, (newVal, oldVal) => {
      switch (newVal) {
        case 'communityOpinion':
          animateCSS('.researchTitleAnimate', ['animate__fadeIn'], 0)

          setTimeout(() => {
            animateCSS('.researchDescriptionAniamte', ['animate__fadeIn'], 0)
          }, 500)

          setTimeout(() => {
            dealAddClass('.researchLineAnimate', 'animationLine', [0, 1])
            dealAddClass('.researchShortLineAnimate', 'animationShortLine', 0)
          }, 1000)
          break
        case 'communityActivityOne':
          animateCSS('.researchTitleAnimate', ['animate__fadeIn'], 1)

          setTimeout(() => {
            animateCSS('.researchDescriptionAniamte', ['animate__fadeIn'], 1)
          }, 500)

          setTimeout(() => {
            dealAddClass('.researchLineAnimate', 'animationLine', [2, 3])
            dealAddClass('.researchShortLineAnimate', 'animationShortLine', 1)
          }, 1000)
          break
        case 'communityActivityTwo':
          animateCSS('.researchTitleAnimate', ['animate__fadeIn', 'animate__slow'], 2)

          setTimeout(() => {
            animateCSS('.researchDescriptionAniamte', ['animate__fadeIn'], 2)
          }, 500)

          setTimeout(() => {
            dealAddClass('.researchLineAnimate', 'animationLine', [4, 5])
            dealAddClass('.researchShortLineAnimate', 'animationShortLine', 2)
          }, 1000)
          break
        case 'communityActivityThree':
          animateCSS('.researchTitleAnimate', ['animate__fadeIn', 'animate__slow'], 3)

          setTimeout(() => {
            animateCSS('.researchDescriptionAniamte', ['animate__fadeIn'], 3)
          }, 500)

          setTimeout(() => {
            dealAddClass('.researchLineAnimate', 'animationLine', [6, 7])
            dealAddClass('.researchShortLineAnimate', 'animationShortLine', 3)
          }, 1000)
          break
        case 'optimalInsight':
          animateCSS('.researchTitleAnimate', ['animate__fadeIn', 'animate__slow'], 4)

          setTimeout(() => {
            animateCSS('.researchDescriptionAniamte', ['animate__fadeIn'], 4)
          }, 500)

          setTimeout(() => {
            dealAddClass('.researchLineAnimate', 'animationLine', [8, 9])
            dealAddClass('.researchShortLineAnimate', 'animationShortLine', 4)
          }, 1000)
          break
        case 'optimalBedroomBalcony':
          animateCSS('.researchTitleAnimate', ['animate__fadeIn', 'animate__slow'], 5)

          setTimeout(() => {
            animateCSS('.researchDescriptionAniamte', ['animate__fadeIn'], 5)
          }, 500)

          setTimeout(() => {
            dealAddClass('.researchLineAnimate', 'animationLine', [10, 11])
            dealAddClass('.researchShortLineAnimate', 'animationShortLine', 5)
          }, 1000)
          break
        case 'optimalLivingKitchen':
          animateCSS('.researchTitleAnimate', ['animate__fadeIn', 'animate__slow'], 6)

          setTimeout(() => {
            animateCSS('.researchDescriptionAniamte', ['animate__fadeIn'], 6)
          }, 500)

          setTimeout(() => {
            dealAddClass('.researchLineAnimate', 'animationLine', [12, 13])
            dealAddClass('.researchShortLineAnimate', 'animationShortLine', 6)
          }, 1000)
          break
        case 'optimalBathroom':
          animateCSS('.researchTitleAnimate', ['animate__fadeIn', 'animate__slow'], 7)

          setTimeout(() => {
            animateCSS('.researchDescriptionAniamte', ['animate__fadeIn'], 7)
          }, 500)

          setTimeout(() => {
            dealAddClass('.researchLineAnimate', 'animationLine', [14, 15])
            dealAddClass('.researchShortLineAnimate', 'animationShortLine', 7)
          }, 1000)
          break
        case 'optimalStorage':
          animateCSS('.researchTitleAnimate', ['animate__fadeIn', 'animate__slow'], 8)

          setTimeout(() => {
            animateCSS('.researchDescriptionAniamte', ['animate__fadeIn'], 8)
          }, 500)

          setTimeout(() => {
            dealAddClass('.researchLineAnimate', 'animationLine', [16, 17])
            dealAddClass('.researchShortLineAnimate', 'animationShortLine', 8)
          }, 1000)
          break
        case 'smartWarning':
          animateCSS('.researchTitleAnimate', ['animate__fadeIn', 'animate__slow'], 9)

          setTimeout(() => {
            animateCSS('.researchDescriptionAniamte', ['animate__fadeIn'], 9)
          }, 500)

          setTimeout(() => {
            dealAddClass('.researchLineAnimate', 'animationLine', [18, 19])
            dealAddClass('.researchShortLineAnimate', 'animationShortLine', 9)
          }, 1000)
          break
        case 'smartHousekeeper':
          animateCSS('.researchTitleAnimate', ['animate__fadeIn', 'animate__slow'], 10)

          setTimeout(() => {
            animateCSS('.researchDescriptionAniamte', ['animate__fadeIn'], 10)
          }, 500)

          setTimeout(() => {
            dealAddClass('.researchLineAnimate', 'animationLine', [20, 21])
            dealAddClass('.researchShortLineAnimate', 'animationShortLine', 10)
          }, 1000)
          break
        case 'smartHome':
          animateCSS('.researchTitleAnimate', ['animate__fadeIn', 'animate__slow'], 11)

          setTimeout(() => {
            animateCSS('.researchDescriptionAniamte', ['animate__fadeIn'], 11)
          }, 500)

          setTimeout(() => {
            dealAddClass('.researchLineAnimate', 'animationLine', [22, 23])
            dealAddClass('.researchShortLineAnimate', 'animationShortLine', 11)
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
  position: relative;
  padding: 40px 40px;
  height: 305px;
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
      z-index: 1;
    }
    .title2{
      margin-top: 2px;
    }
    .line{
      margin-top: -28px;
      width: 0%;
      height: 43px;
      background-color: #F3C239;
      z-index: -1;
    }
  }
  .description_box{
    margin-top: 55px;
    font-size: 32px;
    font-weight: 500;
    font-family: 'PingFang SC';
    color: rgb(51,51,51);
    --animate-duration: 1500ms;
    .description2{
      margin-top: 2px;
    }
  }
  .short_line{
    position: absolute;
    top: 350px;
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
