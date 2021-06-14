
<template>
  <div class="second_title">
    <div class="description_box invisible secondDescriptionBoxAniamte">
      <div class="description1">{{ descriptionObj.description1 }}</div>
      <div class="description2">{{ descriptionObj.description2 }}</div>
    </div>
    <div class="short_line secondShortLineAnimate"></div>
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
    delayTime: Number,
    descriptionObj: Object
  },
  setup (props) {
    const store = useStore()
    const sliderSwiperName = computed(() => store.state.sliderSwiperName)

    watch(sliderSwiperName, (newVal, oldVal) => {
      switch (newVal) {
        case 'optimalBedroomBalcony':
          setTimeout(() => {
            animateCSS('.secondDescriptionBoxAniamte', ['animate__fadeIn'], 0)
          }, props.delayTime)
          setTimeout(() => {
            dealAddClass('.secondShortLineAnimate', 'animationShortLine', 0)
          }, props.delayTime + 500)
          break
        case 'optimalLivingKitchen':
          setTimeout(() => {
            animateCSS('.secondDescriptionBoxAniamte', ['animate__fadeIn'], 1)
          }, props.delayTime)
          setTimeout(() => {
            dealAddClass('.secondShortLineAnimate', 'animationShortLine', 1)
          }, props.delayTime + 500)
          break
      }
    })
    return {}
  }
}
</script>
<style lang="less" scoped>
.second_title{
  position: relative;
  height: 108px;
  .description_box{
    font-size: 32px;
    font-weight: 500;
    font-family: 'PingFang SC';
    color: rgb(51,51,51);
    text-align: right;
    --animate-duration: 1500ms;
    .description2{
      margin-top: 2px;
    }
  }
  .short_line{
    position: absolute;
    right: 0px;
    top: 104px;
    width: 0px;
    border-top: 1PX solid rgb(51,51,51);
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
