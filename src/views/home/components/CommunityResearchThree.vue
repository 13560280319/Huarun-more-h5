<template>
  <TitleAnimate></TitleAnimate>
  <div class="community_research_three">
    <div class="community_research_image invisible communityResearchImageAnimate">
      <img src="./../../../assets/yanjiuxin.jpg" />
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
    return {}
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
  .community_research_image{
    text-align: center;
    --animate-duration: 1500ms;
    img{
      width: 580px;
    }
  }
}
</style>
