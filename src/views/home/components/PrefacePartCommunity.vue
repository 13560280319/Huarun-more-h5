<template>
  <div class="preface_part">
    <div class="content_box">
      <!-- <div class="left_image_community invisible">
        <div class="text_image_box">
          <div class="text_image1">
            <img class="full_img" src="./../../../assets/oneText2.png" alt="">
          </div>
          <div class="text_image2">
            <img class="full_img" src="./../../../assets/meihaoshequ.png" alt="">
          </div>
        </div>
      </div> -->
      <p class="more">More+</p>
      <p class="type">美好社区</p>
      <p class="part">PART 02</p>
      <p class="text1">
        个人边界感愈发明显的城市中，生活在一个温暖舒适并能享受趣味的美好社区，已成为大多数人的向往。在那里，人们有更多机会交流互动，体会到城市压力之外的生活乐趣。
      </p>
      <!-- <div class="right_image_community invisible"></div> -->
    </div>
  </div>
</template>
<script setup>
// import { animateCSS } from '@/utils/animationEnd'
// import { computed, watch } from 'vue'
// import { useStore } from 'vuex'

// const store = useStore()
// const activeSwiperIndex = computed(() => store.state.activeSwiperIndex)

// watch(activeSwiperIndex, (newVal, oldVal) => {
//   if (newVal === 'community') {
//     const leftDom = document.querySelector('.left_image_community')
//     const rightDom = document.querySelector('.right_image_community')
//     leftDom.classList.remove('invisible')
//     rightDom.classList.remove('invisible')
//     animateCSS('.left_image_community', ['animate__bounceInLeft'])
//     animateCSS('.right_image_community', ['animate__bounceInRight'])
//     animateCSS('.preface_text_community', ['animate__fadeIn', 'animate__delay-1s'])
//   }
// })
</script>
<style lang="less" scoped>
.preface_part{
  height: 100%;
  background-image: url('./../../../assets/xu2.gif');
  background-size: 100%;
  background-repeat: no-repeat;
  .content_box{
    padding: 65px 40px;
    height: 100%;
    position: relative;
    // .left_image_community{
    //   position: absolute;
    //   top: 15px;
    //   left: 15px;
    //   width: 600px;
    //   height: 450px;
    //   background-image: url('./../../../assets/one3.png');
    //   background-repeat: no-repeat;
    //   background-size: 100% 100%;
    //   .text_image_box{
    //     .text_image1{
    //       margin: 30px 0 0 200px;
    //       width: 320px;
    //     }
    //     .text_image2{
    //       width: 425px;
    //     }
    //   }
    // }
      .more{
      height: 145px;
      line-height: 145px;
      font-size: 145px;
      font-family: 'SourceHanSansSC-Bold';
      font-weight: 600;
      color: rgba(255, 255, 255, 1);
    }
    .type{
      margin-top: 45px;
      height: 155px;
      line-height: 155px;
      font-size: 155px;
      font-family: 'Orkney-Bold';
      font-weight: 600;
      color: rgb(35,24,21);
    }
    .part{
      margin-top: 10px;
      height: 60px;
      line-height: 60px;
      font-size: 60px;
      font-family: 'SourceHanSansSC-Bold';
      font-weight: 600;
      color: rgb(35,24,21);
    }
    .text1{
      margin-top: 480px;
      line-height: 54px;
      font-size: 30px;
      font-family: "VWText-Light","HYQiHei-40S";
      font-weight: normal;
    }
    // .right_image_community{
    //   position: absolute;
    //   top: 500px;
    //   right: 15px;
    //   width: 400px;
    //   height: 400px;
    //   background-image: url('./../../../assets/one4.png');
    //   background-repeat: no-repeat;
    //   background-size: 100% 100%;
    //   z-index: 1;
    // }
  }
}
</style>
