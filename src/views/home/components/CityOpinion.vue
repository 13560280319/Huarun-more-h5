<template>
  <!-- <div class="opinion" :style="{
    backgroundImage:
    shimIndex === 0 ? city0After :
    shimIndex === 1 ? city1After :
    shimIndex === 2 ? city2After :
    shimIndex === 3 ? city3After :
    shimIndex === 4 ? city4After : ''
  }">
    <div class="opinion_box">
      <div class="opinion_content invisible cityContentAnimate">
        <div class="opinion_item" v-for="(item, index) in props.opinionArray" :key="index">
          <template v-if="index === shimIndex">
            <div mark="此标题不要" class="title">{{ item.title }}</div>
            <div class="explain">{{ item.explain }}</div>
            <div class="description">{{ item.description }}</div>
          </template>
        </div>
      </div>
      <div class="opinion_type">
        <div :class="{ activeOpinion: shimIndex === index }" class="each_opinion" v-for="(item, index) in props.opinionArray" :key="index" @click="handleOpinion(index)">{{ item.name }}</div>
      </div>
    </div>
  </div> -->

  <div class="opinion" :style="{
    backgroundImage:
    shimIndex === 0 ? 'none' :
    shimIndex === 1 ? 'none' :
    shimIndex === 2 ? city2After :
    shimIndex === 3 ? city3After :
    shimIndex === 4 ? city4After : ''
  }">
    <div class="opinion_box">
      <div v-if="shimIndex === 0" class="test1" style="height: 500px;padding-top:50px">
        <img class="full_img" src="./../../../assets/test1.png" alt="">
      </div>
      <div v-else-if="shimIndex === 1" class="test2" style="height: 500px;padding-top:50px">
        <img class="full_img" src="./../../../assets/test2.png" alt="">
      </div>
      <template v-else>
        <div class="opinion_content invisible cityContentAnimate">
            <div class="opinion_item" v-for="(item, index) in props.opinionArray" :key="index">
              <template v-if="(index + 2) === shimIndex">
                <div class="explain">{{ item.explain }}</div>
                <div class="description">{{ item.description }}</div>
              </template>
            </div>
        </div>
      </template>
      <div class="opinion_type">
        <div :class="{ activeOpinion: shimIndex === index }" class="each_opinion" v-for="(item, index) in props.opinionArray" :key="index" @click="handleOpinion(index)">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
// import city0 from './../../../assets/city1.jpg'
// import city1 from './../../../assets/city2.jpg'
// import city2 from './../../../assets/city3.jpg'
// import city3 from './../../../assets/city4.jpg'
// import city4 from './../../../assets/city5.jpg'
// import { animateCSS, dealRemoveClass } from '@/utils/animationEnd'
// import { defineProps, ref, watch, computed } from 'vue'
// import { useStore } from 'vuex'

// const store = useStore()
// const city0After = 'url(' + city0 + ')'
// const city1After = 'url(' + city1 + ')'
// const city2After = 'url(' + city2 + ')'
// const city3After = 'url(' + city3 + ')'
// const city4After = 'url(' + city4 + ')'
// const shimIndex = ref(0)
// const props = defineProps({
//   opinionArray: Object
// })

// const endSwiperIndex = computed(() => store.state.endActiveSwiperIndex)
// watch(endSwiperIndex, (newVal) => {
//   if (newVal === 2) {
//     dealRemoveClass('.cityContentAnimate', 'invisible')
//     animateCSS('.cityContentAnimate', ['animate__fadeInDown'], 0, true)
//   }
// })

// const handleOpinion = (index) => {
//   shimIndex.value = index
//   animateCSS('.cityContentAnimate', ['animate__fadeInDown'], 0, true)
// }

import city0 from './../../../assets/city1.jpg'
import city1 from './../../../assets/city2.jpg'
import city2 from './../../../assets/city3.jpg'
import city3 from './../../../assets/city4.jpg'
import city4 from './../../../assets/city5.jpg'
import { animateCSS, dealRemoveClass } from '@/utils/animationEnd'
import { defineProps, ref, watch, computed, nextTick } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const city0After = 'url(' + city0 + ')'
const city1After = 'url(' + city1 + ')'
const city2After = 'url(' + city2 + ')'
const city3After = 'url(' + city3 + ')'
const city4After = 'url(' + city4 + ')'
const shimIndex = ref(0)
const props = defineProps({
  opinionArray: Object
})

const handleOpinion = (index) => {
  shimIndex.value = index
  nextTick(() => {
    if (shimIndex.value > 1) {
      dealRemoveClass('.cityContentAnimate', 'invisible')
      animateCSS('.cityContentAnimate', ['animate__fadeInDown'], 0, true)
    }
  })
}

</script>
<style lang="less" scoped>
.opinion{
  height: 100%;
  background-position: 0 -145px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .opinion_box{
    .opinion_content{
      overflow: hidden;
      .title{
        margin-top: 90px;
        padding-left: 68px;
        height: 50px;
        line-height: 50px;
        color: #333333;
        font-size: 50px;
        font-family: "VWText-Regular","HYQiHei-60S";
        font-weight: normal;
      }
      .explain{
        margin-top: 70px;
        padding-left: 40px;
        height: 32px;
        line-height: 32px;
        color: #333333;
        font-size: 32px;
        font-family: "VWText-Regular","HYQiHei-60S";
        font-weight: normal;
      }
      .description{
        margin-top: 22px;
        padding: 0 20px 0 40px;
        line-height: 42px;
        font-size: 24px;
        color: #333333;
        font-family: "VWText-Light","HYQiHei-40S";
        font-weight: normal;
      }
    }
    .opinion_type{
      position: absolute;
      width: 100%;
      top: 80%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      .each_opinion{
        margin: 0 3%;
        padding-top: 28px;
        width: 27%;
        height: 115px;
        line-height: 87px;
        text-align: center;
        border-bottom: 1px solid #333333;
        box-sizing: border-box;
        color: #333333;
        font-size: 28px;
        font-weight: normal;
        font-family: "SourceHanSansSC-Medium","HYQiHei-60S";
      }
      .activeOpinion{
        color: rgba(244,195,56, 1);
        font-size: 29px;
        font-weight: 600;
        border-bottom: 2px solid rgba(244,195,56, 1);
      }
    }
  }
}
</style>
