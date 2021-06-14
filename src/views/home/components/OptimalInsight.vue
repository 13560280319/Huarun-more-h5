<template>
  <TitleAnimate :topTitle="topTitle"></TitleAnimate>
  <div class="optimal_insight">
    <div class="Optimal_insight_content">

      <div class="each_insight_box invisible eachInsightBoxAnimate">
        <div class="gif_box">
          <img class="full_img" src="./../../../assets/21.gif" alt="">
        </div>
        <p class="min_title">一线城市</p>
        <p class="explain">购房比例平均为22.5%</p>
      </div>

      <div class="each_insight_box invisible eachInsightBoxAnimate">
        <div class="gif_box">
          <img class="full_img" src="./../../../assets/22.gif" alt="">
        </div>
        <p class="min_title">二线城市</p>
        <p class="explain">购房比例平均为34%</p>
      </div>

      <div class="each_insight_box invisible eachInsightBoxAnimate">
        <div class="gif_box">
          <img class="full_img" src="./../../../assets/23.gif" alt="">
        </div>
        <p class="min_title">首置年龄</p>
        <p class="explain">买首套房平均年龄在31岁</p>
      </div>

      <div class="each_insight_box invisible eachInsightBoxAnimate">
        <div class="gif_box">
          <img class="full_img" src="./../../../assets/24.gif" alt="">
        </div>
        <p class="min_title">二居占比</p>
        <p class="explain">购买两居室比例</p>
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
        title1: '优居生活',
        title2: '研究洞察',
        description1: '主力消费群的购房动向'
      }
    }
  },
  setup () {
    const store = useStore()
    const sliderSwiperName = computed(() => store.state.sliderSwiperName)
    watch(sliderSwiperName, (newVal, oldVal) => {
      if (newVal === 'optimalInsight') {
        setTimeout(() => {
          animateCSS('.eachInsightBoxAnimate', ['animate__fadeIn'], 0, false, true)
        }, 1000)
      }
    })

    return {
    }
  }
}
</script>
<style lang="less" scoped>
.optimal_insight{
  margin-top: -20px;
  padding: 0 60px;
  .Optimal_insight_content{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    .each_insight_box{
      margin-top: 40px;
      width: 45%;
      display: flex;
      flex-direction: column;
      align-items: center;
      --animate-duration: 1500ms;
      .gif_box{
        width: 200px;
        height: 200px;
      }
      .min_title{
        margin-top: 10px;
        height: 32px;
        line-height: 32px;
        font-size: 32px;
        font-weight: 500;
        font-family: 'PingFang SC';
        color: #333333;
      }
      .explain{
        margin-top: 10px;
        height: 24px;
        line-height: 24px;
        font-size: 24px;
        font-family: 'PingFang SC';
        color: #333333;
      }
    }
  }
}
</style>
