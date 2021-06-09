<template>
  <div class="preface_part_city">
    <div class="content_box">
      <!-- <div class="left_image_city invisible">
        <div class="text_image_box">
          <div class="text_image1">
            <img class="full_img" src="./../../../assets/oneText2.png" alt="">
          </div>
          <div class="text_image2">
            <img class="full_img" src="./../../../assets/oneText1.png" alt="">
          </div>
        </div>
      </div> -->
      <p class="more">More+</p>
      <p class="type">城市理想</p>
      <p class="part">PART 01</p>
      <p class="text1">
        当城市的一切想象均已落地，所形成的是代言“未来生活方式”的空间，人们在这里聚焦情感和满足需求。
      </p>
      <p class="text1 text2">
        争流而上的广州，正在为人们的新日常与生活体验感，加速蜕变。
      </p>
      <!-- <div class="right_image_city invisible"></div> -->
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
//   if (newVal === 'city') {
//     const leftDom = document.querySelector('.left_image_city')
//     const rightDom = document.querySelector('.right_image_city')
//     leftDom.classList.remove('invisible')
//     rightDom.classList.remove('invisible')
//     animateCSS('.left_image_city', ['animate__bounceInLeft'])
//     animateCSS('.right_image_city', ['animate__bounceInRight'])
//     animateCSS('.preface_text_city', ['animate__fadeIn', 'animate__delay-1s'])
//   }
// })
</script>
<style lang="less" scoped>
.preface_part_city{
  height: 100%;
  background-image: url('./../../../assets/xu1.gif');
  background-size: 100%;
  background-repeat: no-repeat;
  .content_box{
    padding: 65px 40px;
    height: 100%;
    position: relative;
    // .left_image_city{
    //   position: absolute;
    //   top: 15px;
    //   left: 15px;
    //   width: 600px;
    //   height: 450px;
    //   background-image: url('./../../../assets/one1.png');
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
      font-size: 30px;
      font-family: "VWText-Light","HYQiHei-40S";
      font-weight: normal;
    }
    .text2{
      margin-top: 60px;
    }
    // .right_image_city{
    //   position: absolute;
    //   top: 500px;
    //   right: 15px;
    //   width: 400px;
    //   height: 400px;
    //   background-image: url('./../../../assets/one2.png');
    //   background-repeat: no-repeat;
    //   background-size: 100% 100%;
    //   z-index: 1;
    // }
  }
}
</style>
