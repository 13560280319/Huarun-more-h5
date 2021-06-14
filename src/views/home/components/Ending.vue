<template>
  <div class="ending_box">
    <div class="ending_content">
      <div class="beautiful">
        <p class="title titleOneAnimate">向更美好生活</p>
      </div>
      <div class="say_hello">
        <p class="title titleTwoAnimate">Say Hello!</p>
      </div>
      <p class="opinion invisible moreAnimate">More+ 生活产品主张</p>
      <p class="explain invisible explainAnimate">下载手册了解更多</p>
      <a
        :href="`${publicPath}static/shouce.pdf`"
        download="more+生活产品主张册子打样稿V@2正反面.pdf"
        >
        <div class="download_image invisible downloadAnimate">
          <img src="./../../../assets/download.png" alt="">
        </div>
      </a>
    </div>
  </div>
</template>
<script>
import { animateCSS, dealAddClass } from '@/utils/animationEnd'
import { computed, watch } from 'vue'
import { useStore } from 'vuex'
export default {
  data () {
    return {
      publicPath: import.meta.env.BASE_URL
    }
  },
  setup () {
    const store = useStore()
    const sliderSwiperName = computed(() => store.state.sliderSwiperName)
    watch(sliderSwiperName, (newVal, oldVal) => {
      if (newVal === 'ending') {
        dealAddClass('.titleOneAnimate', 'animationTopOut', 0)
        setTimeout(() => {
          dealAddClass('.titleTwoAnimate', 'animationTopOut', 0)
        }, 1000)
        setTimeout(() => {
          animateCSS('.moreAnimate', ['animate__fadeIn'], 0)
        }, 1500)
        setTimeout(() => {
          animateCSS('.explainAnimate', ['animate__fadeIn'], 0)
        }, 2000)
        setTimeout(() => {
          animateCSS('.downloadAnimate', ['animate__fadeIn'], 0)
        }, 2500)
      }
    })

    return {
    }
  }
}
</script>
<style lang="less" scoped>
.ending_box{
  height: 100%;
  background-size: 100%;
  background-repeat: no-repeat;
  background-image: url('./../../../assets/seven.jpeg');
  .ending_content{
    padding: 240px 66px 0;
    .beautiful, .say_hello{
      position: relative;
      overflow: hidden;
      .title{
        position: relative;
        height: 96px;
        line-height: 96px;
        font-size: 96px;
        font-family: 'PingFang SC';
        font-weight: 600;
        color: rgb(255, 255, 255);
      }
    }
    .beautiful{
      .title{
        top: -100px;
      }
    }
    .say_hello{
      margin-top: 35px;
      .title{
        top: -115px;
      }
    }
    .opinion{
      margin-top: 175px;
      height: 40px;
      line-height: 40px;
      font-size: 40px;
      font-family: 'PingFang SC';
      font-weight: 600;
      color: rgb(255, 255, 255);
      --animate-duration: 1500ms;
    }
    .explain{
      margin-top: 55px;
      height: 40px;
      line-height: 40px;
      font-size: 40px;
      font-family: 'PingFang SC';
      font-weight: 600;
      color: rgb(255, 255, 255);
      --animate-duration: 1500ms;
    }
    .download_image{
      margin-top: 35px;
      width: 240px;
      --animate-duration: 1500ms;
      img{
        width: 100%;
      }
    }
  }
}

// 从顶部出来的对话框动画
.animationTopOut{
  animation: animationTopOut 1500ms ease-in-out forwards;
}
@keyframes animationTopOut {
  to {
    top: 0px;
  }
}

</style>
