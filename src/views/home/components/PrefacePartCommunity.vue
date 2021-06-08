<template>
  <div class="preface_part">
    <div class="content_box">
      <div class="left_image_community invisible">
        <div class="text_image_box">
          <div class="text_image1">
            <img class="full_img" src="./../../../assets/oneText2.png" alt="">
          </div>
          <div class="text_image2">
            <img class="full_img" src="./../../../assets/meihaoshequ.png" alt="">
          </div>
        </div>
      </div>
      <div class="preface_text_community invisible">
        <p>
          在个人边界愈发明显的现代城市生活里，总会时不时怀念过去人与人交往的暖，那是一种由衷散发的幸福感，而现今，总感觉少了那么一点人情味和归属感。
        </p><br>
        <p>
          生活在一个温暖舒适并能享受趣味的美好社区，已成为越来越多人的向往。在那里，人们有更多机会交流互动，真正体会到城市压力之外的生活乐趣。
        </p>
      </div>
      <div class="right_image_community invisible"></div>
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
  if (newVal === 'community') {
    const leftDom = document.querySelector('.left_image_community')
    const rightDom = document.querySelector('.right_image_community')
    leftDom.classList.remove('invisible')
    rightDom.classList.remove('invisible')
    animateCSS('.left_image_community', ['animate__bounceInLeft'])
    animateCSS('.right_image_community', ['animate__bounceInRight'])
    animateCSS('.preface_text_community', ['animate__fadeIn', 'animate__delay-1s'])
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
    .left_image_community{
      position: absolute;
      top: 15px;
      left: 15px;
      width: 600px;
      height: 450px;
      background-image: url('./../../../assets/one3.png');
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
    .preface_text_community{
      position: absolute;
      top: 400px;
      padding: 0 22px;
      font-size: 24px;
      font-family: "VWText-Light","HYQiHei-40S";
      font-weight: normal;
      z-index: 10;
      p{
        text-indent: 48px;
      }
    }
    .right_image_community{
      position: absolute;
      top: 500px;
      right: 15px;
      width: 400px;
      height: 400px;
      background-image: url('./../../../assets/one4.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      z-index: 1;
    }

  }
}
</style>
