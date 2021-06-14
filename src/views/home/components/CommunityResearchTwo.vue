<template>
  <TitleAnimate :topTitle="topTitle"></TitleAnimate>
  <div class="community_research_two">
    <div class="each_dialogue">
      <div class="touxiang invisible touxiangAnimate">
        <img class="full_img" src="./../../../assets/H50608-33.png" alt="">
      </div>
      <div class="duihua_box">
        <div class="duihua duihuaAnimate">
          <img src="./../../../assets/duihua1.png" alt="">
        </div>
      </div>
    </div>

    <div class="each_dialogue each_dialogue_middle">
      <div class="duihua_box">
        <div class="duihua duihua_middle duihuaAnimate">
          <img src="./../../../assets/duihua2.png" alt="">
        </div>
      </div>
      <div class="touxiang invisible touxiangAnimate">
        <img class="full_img" src="./../../../assets/H50608-34.png" alt="">
      </div>
    </div>

    <div class="each_dialogue">
      <div class="touxiang invisible touxiangAnimate">
        <img class="full_img" src="./../../../assets/H50608-35.png" alt="">
      </div>
      <div class="duihua_box">
        <div class="duihua duihuaAnimate">
          <img src="./../../../assets/duihua3.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TitleAnimate from '@/components/TitleAnimate.vue'
import { animateCSS, dealAddClass } from '@/utils/animationEnd'
import { computed, watch } from 'vue'
import { useStore } from 'vuex'
export default {
  components: {
    TitleAnimate
  },
  data () {
    return {
      topTitle: {
        title1: '美好社区',
        title2: '研究过程',
        description1: '谁经常在社区活动？'
      }
    }
  },
  setup () {
    const store = useStore()
    const sliderSwiperName = computed(() => store.state.sliderSwiperName)
    watch(sliderSwiperName, (newVal, oldVal) => {
      if (newVal === 'communityActivityTwo') {
        setTimeout(() => {
          animateCSS('.touxiangAnimate', ['animate__fadeIn'], 0)
        }, 2000)
        setTimeout(() => {
          dealAddClass('.duihuaAnimate', 'animationLeftOut', 0)
        }, 2500)

        setTimeout(() => {
          animateCSS('.touxiangAnimate', ['animate__fadeIn'], 1)
        }, 3000)
        setTimeout(() => {
          dealAddClass('.duihuaAnimate', 'animationRightOut', 1)
        }, 3500)

        setTimeout(() => {
          animateCSS('.touxiangAnimate', ['animate__fadeIn'], 2)
        }, 4000)
        setTimeout(() => {
          dealAddClass('.duihuaAnimate', 'animationLeftOut', 2)
        }, 4500)
      }
    })

    return {
    }
  }
}
</script>
<style lang="less" scoped>
.community_research_two{
  margin-top: 10px;
  padding: 0 40px;
  width: 100%;
  box-sizing: border-box;
  .each_dialogue{
    margin-top: 65px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    .touxiang{
      width: 160px;
      height: 160px;
      --animate-duration: 1500ms;
    }
    .duihua_box{
      position: relative;
      width: 450px;
      height: 100px;
      overflow: hidden;
    }
    .duihua{
      position: absolute;
      left: -360px;
      height: 100px;
      img{
        height: 100%;
      }
    }
    .duihua_middle{
      left: auto;
      right: -400px;
    }
  }
  .each_dialogue_middle{
    justify-content: flex-end;
  }
}

// 从左边出来的对话框动画
.animationLeftOut{
  animation: animationLeftOut 1500ms ease-in-out forwards;
}
@keyframes animationLeftOut {
  to {
    left: 0px;
  }
}

// 从右边出来的对话框动画
.animationRightOut{
  animation: animationRightOut 1500ms ease-in-out forwards;
}
@keyframes animationRightOut {
  to {
    right: 0px;
  }
}
</style>
