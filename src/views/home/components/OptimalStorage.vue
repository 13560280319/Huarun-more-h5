<template>
  <TitleAnimate :topTitle="topTitle"></TitleAnimate>
  <div class="optimal_storage">
    <div class="each_storage_box invisible eachStorageBoxAnimate">
      <div class="image_box">
        <img class="full_img" src="./../../../assets/shouna.png" alt="">
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
        title1: '日常生活中不做',
        title2: '“细节绝缘体”',
        description1: '收纳',
        description2: '空间魔法师'
      }
    }
  },
  setup () {
    const store = useStore()
    const sliderSwiperName = computed(() => store.state.sliderSwiperName)
    watch(sliderSwiperName, (newVal, oldVal) => {
      if (newVal === 'optimalStorage') {
        setTimeout(() => {
          animateCSS('.eachStorageBoxAnimate', ['animate__fadeIn'], 0)
        }, 1000)
      }
    })
    return {}
  }
}
</script>
<style lang="less" scoped>
.optimal_storage{
  margin-top: 160px;
  padding: 0 40px;
  .each_storage_box{
    --animate-duration: 1500ms;
    .image_box{
      width: 100%;
    }
  }
}
</style>
