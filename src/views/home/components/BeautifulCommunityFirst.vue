<template>
  <div class="opinion">
    <div class="opinion_box">
      <div class="opinion_content">
        <div class="opinion_item">
          <p class="first_title threeImageAnimate">谁经常在社区活动？</p>
          <div class="research_top_img"></div>
          <div class="research_buttom_img"></div>
          <div class="research_importance_img">
            <img class="full_img" src="./../../../assets/3001.png" alt="">
          </div>
          <div class="research_trajectory_img">
            <img class="full_img" src="./../../../assets/yanjiuguiji.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { animateCSS } from '@/utils/animationEnd'
import { computed, watch } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const currentSwiperIndex = computed(() => store.state.activeSwiperIndex) // 监听当前第几页
watch(currentSwiperIndex, (newVal) => {
  if (newVal === 4) {
    animateCSS('.threeImageAnimate', ['animate__fadeInDown'], 0, true)
  }
})
</script>
<style lang="less" scoped>
.opinion{
  position: relative;
  height: 100%;
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: rgba(255,255,255,1);
  .opinion_box{
    .opinion_content{
      overflow: hidden;
      .opinion_item{
        padding: 25px 20px 0;
        .first_title{
          margin: 60px 0 0 30px;
          height: 40px;
          line-height: 40px;
          font-size: 40px;
          font-family: 'Orkney-Bold';
          font-weight: 600;
          color: rgb(35,24,21);
        }
        .research_top_img{
          margin: 25px auto 0;
          width: 400px;
          height: 150px;
          background-image: url(./../../../assets/bing1.gif);
          background-position: -150px -398px;
          background-size: 140%;
          background-repeat: no-repeat;
        }
        .research_buttom_img{
          margin: -10px auto;
          width: 400px;
          height: 150px;
          background-image: url(./../../../assets/bing1.gif);
          background-position: -150px -808px;
          background-size: 140%;
          background-repeat: no-repeat;
        }
        .research_importance_img{
          margin: 10px auto;
          width: 400px;
        }
        .research_trajectory_img{
          margin: 0 auto;
          width: 95%;
          height: 300px;
        }
      }
    }
  }
}
</style>
