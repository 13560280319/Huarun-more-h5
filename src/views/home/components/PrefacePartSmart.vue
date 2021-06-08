<template>
  <div class="preface_part">
    <div class="content_box">
      <div class="left_image_smart invisible">
        <div class="text_image_box">
          <div class="text_image1">
            <img class="full_img" src="./../../../assets/oneText2.png" alt="">
          </div>
          <div class="text_image2">
            <img class="full_img" src="./../../../assets/zhihuifuwu.png" alt="">
          </div>
        </div>
      </div>
      <p class="preface_text_smart invisible">
        <span class="explain">比关怀更好的，是真实地给予。</span><br>
        <span>当城市的一切想象均已落地，自然、居所、繁华、产业...所形成的，绝不仅仅是一个有名字的场景，更应是被视为代言“未来生活方式”的空间，人们在这些空间里聚焦情感诉求和精神生活。争流而上的广州，正在为人们的新日常与生活体验感，加速蜕变。</span>
      </p>
      <div class="right_image_smart invisible"></div>
      <DownArrow></DownArrow>
    </div>
  </div>
</template>
<script setup>
import DownArrow from '@/components/DownArrow.vue'
import { animateCSS } from '@/utils/animationEnd'
import { computed, watch } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const activeSwiperIndex = computed(() => store.state.activeSwiperIndex)

watch(activeSwiperIndex, (newVal, oldVal) => {
  if (newVal === 'smart') {
    const leftDom = document.querySelector('.left_image_smart')
    const rightDom = document.querySelector('.right_image_smart')
    leftDom.classList.remove('invisible')
    rightDom.classList.remove('invisible')
    animateCSS('.left_image_smart', ['animate__bounceInLeft'])
    animateCSS('.right_image_smart', ['animate__bounceInRight'])
    animateCSS('.preface_text_smart', ['animate__fadeIn', 'animate__delay-1s'])
  }
})
</script>
<style lang="less" scoped>
.preface_part{
  height: 100%;
  background: rgba(255, 255, 255, 1);
  .content_box{
    height: 100%;
    position: relative;
    .left_image_smart{
      position: absolute;
      top: 15px;
      left: 15px;
      width: 600px;
      height: 450px;
      background-image: url('./../../../assets/two3.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      .text_image_box{
        .text_image1{
          margin: 30px 0 0 200px;
          width: 320px;
        }
        .text_image2{
          width: 425px;
        }
      }
    }
    .preface_text_smart{
      position: absolute;
      top: 400px;
      padding: 0 22px;
      font-size: 24px;
      font-family: "VWText-Light","HYQiHei-40S";
      font-weight: normal;
      z-index: 10;
      .explain{
        display: inline-block;
        margin-bottom: 50px;
        font-size: 36px;
      }
    }
    .right_image_smart{
      position: absolute;
      top: 500px;
      right: 15px;
      width: 400px;
      height: 400px;
      background-image: url('./../../../assets/two4.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      z-index: 1;
    }

  }
}
</style>
