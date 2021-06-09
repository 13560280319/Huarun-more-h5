<template>
  <div class="preface_part">
    <div class="content_box">
      <!-- <div class="left_image_smart invisible">
        <div class="text_image_box">
          <div class="text_image1">
            <img class="full_img" src="./../../../assets/oneText2.png" alt="">
          </div>
          <div class="text_image2">
            <img class="full_img" src="./../../../assets/zhihuifuwu.png" alt="">
          </div>
        </div>
      </div> -->
      <p class="more">More+</p>
      <p class="type">智慧服务</p>
      <p class="part">PART 04</p>
      <p class="text1">
        比关怀更好的，是真实地给予。
      </p>
      <p class="text1 text2">
        华润置地广州从情感悉心服务开始，为人们带来更智慧、更便捷的生活，让更多人看见“生活会更好”的可能性。
      </p>
      <!-- <div class="right_image_smart invisible"></div> -->
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
//   if (newVal === 'smart') {
//     const leftDom = document.querySelector('.left_image_smart')
//     const rightDom = document.querySelector('.right_image_smart')
//     leftDom.classList.remove('invisible')
//     rightDom.classList.remove('invisible')
//     animateCSS('.left_image_smart', ['animate__bounceInLeft'])
//     animateCSS('.right_image_smart', ['animate__bounceInRight'])
//     animateCSS('.preface_text_smart', ['animate__fadeIn', 'animate__delay-1s'])
//   }
// })
</script>
<style lang="less" scoped>
.preface_part{
  height: 100%;
  background-image: url('./../../../assets/xu4.gif');
  background-size: 100%;
  background-repeat: no-repeat;
  .content_box{
    padding: 65px 40px;
    height: 100%;
    position: relative;
    // .left_image_smart{
    //   position: absolute;
    //   top: 15px;
    //   left: 15px;
    //   width: 600px;
    //   height: 450px;
    //   background-image: url('./../../../assets/two3.png');
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
    // .right_image_smart{
    //   position: absolute;
    //   top: 500px;
    //   right: 15px;
    //   width: 400px;
    //   height: 400px;
    //   background-image: url('./../../../assets/two4.png');
    //   background-repeat: no-repeat;
    //   background-size: 100% 100%;
    //   z-index: 1;
    // }
  }
}
</style>
