<template>
  <TitleAnimate :topTitle="topTitle"></TitleAnimate>
  <div class="smart_warning">
    <div class="smart_warning_content">

      <div class="each_warning_box">
        <div class="image_box eachWarningBoxAnimate">
          <img src="./../../../assets/warning1.png" alt="">
        </div>
      </div>

      <div class="each_warning_box">
        <div class="image_box eachWarningBoxAnimate">
          <img src="./../../../assets/warning2.png" alt="">
        </div>
      </div>

      <div class="each_warning_box">
        <div class="image_box eachWarningBoxAnimate">
          <img src="./../../../assets/warning3.png" alt="">
        </div>
      </div>

      <div class="each_warning_box">
        <div class="image_box eachWarningBoxAnimate">
          <img src="./../../../assets/warning4.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TitleAnimate from '@/components/TitleAnimate.vue'
import { dealAddClass } from '@/utils/animationEnd'
import { computed, watch } from 'vue'
import { useStore } from 'vuex'
export default {
  components: {
    TitleAnimate
  },
  data () {
    return {
      topTitle: {
        title1: '智慧服务',
        title2: '预警中心',
        description1: '社区变“聪明”',
        description2: '生活安全感倍增'
      }
    }
  },
  setup () {
    const store = useStore()
    const sliderSwiperName = computed(() => store.state.sliderSwiperName)
    watch(sliderSwiperName, (newVal, oldVal) => {
      if (newVal === 'smartWarning') {
        setTimeout(() => {
          dealAddClass('.eachWarningBoxAnimate', 'animationLeftOut', 0)
        }, 2000)
        setTimeout(() => {
          dealAddClass('.eachWarningBoxAnimate', 'animationLeftOut', 1)
        }, 2500)
        setTimeout(() => {
          dealAddClass('.eachWarningBoxAnimate', 'animationLeftOut', 2)
        }, 3000)
        setTimeout(() => {
          dealAddClass('.eachWarningBoxAnimate', 'animationLeftOut', 3)
        }, 3500)
      }
    })

    return {
    }
  }
}
</script>
<style lang="less" scoped>
.smart_warning{
  padding: 0 60px;
  .smart_warning_content{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    .each_warning_box{
      position: relative;
      width: 50%;
      height: 330px;
      overflow: hidden;
      .image_box{
        position: absolute;
        left: -320px;
        width: 100%;
        img {
          width: 100%;
        }
      }
    }
  }
}

// 从左边出来的预警中心
.animationLeftOut{
  animation: animationLeftOut 1500ms ease-in-out forwards;
}
@keyframes animationLeftOut {
  to {
    left: 0px;
  }
}
</style>
