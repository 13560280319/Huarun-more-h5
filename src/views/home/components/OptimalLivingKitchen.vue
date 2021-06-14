<template>
  <TitleAnimate :topTitle=topTitle></TitleAnimate>
  <div class="optimal_living_kitchen">
    <div class="top_content invisible livingKitchenTopContentAnimate">
      <div class="left_image">
        <img src="./../../../assets/keting.png" alt="">
      </div>
      <div class="right_text">
        <p><span>惊艳</span>生活容器</p>
        <p>门面<span>担当</span></p>
        <p><span>实用多场景</span>切换</p>
      </div>
    </div>
    <SecondTitleAnimate :delayTime="2500" :descriptionObj="descriptionObj"></SecondTitleAnimate>
    <div class="bottom_content invisible livingKitchenBottomContentAnimate">
      <div class="left_content">
        <p>【餐厨】</p>
        <p>一日三餐四季</p>
        <p>三五好友，谈天说地</p>
        <div class="image">
          <img src="./../../../assets/canchu1.png" alt="">
        </div>
      </div>
      <div class="right_image">
        <img src="./../../../assets/canchu2.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import TitleAnimate from '@/components/TitleAnimate.vue'
import SecondTitleAnimate from '@/components/SecondTitleAnimate.vue'
import { animateCSS } from '@/utils/animationEnd'
import { computed, watch } from 'vue'
import { useStore } from 'vuex'
export default {
  components: {
    TitleAnimate,
    SecondTitleAnimate
  },
  data () {
    return {
      topTitle: {
        title1: '为家庭陪伴&',
        title2: '社交聚餐更有趣',
        description1: '客厅',
        description2: '情感交流无障碍'
      },
      descriptionObj: {
        description1: '餐厨',
        description2: '打开心扉拒绝“社恐症”'
      }
    }
  },
  methods: {
  },
  setup () {
    const store = useStore()
    const sliderSwiperName = computed(() => store.state.sliderSwiperName)

    watch(sliderSwiperName, (newVal, oldVal) => {
      if (newVal === 'optimalLivingKitchen') {
        setTimeout(() => {
          animateCSS('.livingKitchenTopContentAnimate', ['animate__fadeIn'], 0)
        }, 2000)
        setTimeout(() => {
          animateCSS('.livingKitchenBottomContentAnimate', ['animate__fadeIn'], 0)
        }, 3500)
      }
    })

    return {}
  }
}
</script>
<style lang="less" scoped>
.optimal_living_kitchen{
  margin-top: 2px;
  padding: 0 40px;
  .top_content{
    display: flex;
    flex-direction: row;
    --animate-duration: 1500ms;
    .left_image{
      margin-left: 45px;
      width: 40%;
      img{
        width: 100%;
      }
    }
    .right_text{
      padding-left: 85px;
      p{
        height: 28px;
        line-height: 28px;
        font-size: 28px;
        font-family: 'PingFang SC';
        color: #333333;
        span {
          color: rgb(227,182,63);
        }
      }
      p:nth-child(1) {
        margin-top: 80px;
      }
      p:nth-child(2) {
        margin-top: 25px;
      }
      p:nth-child(3) {
        margin-top: 25px;
      }
    }
  }
  .bottom_content{
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    --animate-duration: 1500ms;
    .left_content{
      margin-left: 45px;
      p{
        height: 28px;
        line-height: 28px;
        font-size: 28px;
        font-family: 'PingFang SC';
        color: #333333;
      }
      p:nth-child(1){
        color: rgb(227,182,63);
      }
      p:nth-child(2){
        margin-top: 15px;
      }
      p:nth-child(3){
        margin-top: 15px;
      }
      .image{
        margin-top: 50px;
        width: 250px;
        img{
          width: 100%;
        }
      }
    }
    .right_image{
      margin-left: 75px;
      width: 250px;
      img{
        width: 100%;
      }
    }
  }
}
</style>
