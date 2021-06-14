<template>
  <TitleAnimate :topTitle=topTitle></TitleAnimate>
  <div class="optimal_bedroom_balcony">
    <div class="top_content invisible bedroomBalconyTopContentAnimate">
      <div class="left_image">
        <img src="./../../../assets/woshi.png" alt="">
      </div>
      <div class="right_text">
        <p><span>270°</span>观景视野</p>
        <p>贴心<span>防噪</span></p>
        <p><span>氛围</span>灯光</p>
      </div>
    </div>
    <SecondTitleAnimate :delayTime="2500" :descriptionObj="descriptionObj"></SecondTitleAnimate>
    <div class="bottom_content invisible bedroomBalconyBottomContentAnimate">
      <div class="left_content">
        <p>【阳台】</p>
        <p>沙发、地毯、绿植</p>
        <p>营造暖心小角落</p>
        <div class="image">
          <img src="./../../../assets/yangtai2.png" alt="">
        </div>
      </div>
      <div class="right_image">
        <img src="./../../../assets/yangtai1.png" alt="">
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
        title1: '为成年人解锁',
        title2: '独处空间',
        description1: '卧室',
        description2: '每一平方都带有温度'
      },
      descriptionObj: {
        description1: '阳台',
        description2: '给自己一个会呼吸的能量场'
      }
    }
  },
  methods: {
  },
  setup () {
    const store = useStore()
    const sliderSwiperName = computed(() => store.state.sliderSwiperName)

    watch(sliderSwiperName, (newVal, oldVal) => {
      if (newVal === 'optimalBedroomBalcony') {
        setTimeout(() => {
          animateCSS('.bedroomBalconyTopContentAnimate', ['animate__fadeIn'], 0)
        }, 2000)
        setTimeout(() => {
          animateCSS('.bedroomBalconyBottomContentAnimate', ['animate__fadeIn'], 0)
        }, 3500)
      }
    })

    return {}
  }
}
</script>
<style lang="less" scoped>
.optimal_bedroom_balcony{
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
