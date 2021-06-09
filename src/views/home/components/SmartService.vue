<template>
  <div class="opinion">
    <div class="opinion_box">
      <div class="opinion_content">
        <div v-if="shimIndex === 0" class="smart_home">
          <!-- <div class="title smartAnimation">{{ props.opinionArray[0].title }}</div> -->
          <div class="explain smartAnimation">{{  props.opinionArray[0].explain }}</div>
          <div class="description smartAnimation">{{  props.opinionArray[0].description }}</div>
          <div class="image_box">
            <div class="imgage_content">
              <div class="each_img">
                <img class="full_img" src="./../../../assets/100.png" alt="">
              </div>
              <div class="each_img">
                <img class="full_img" src="./../../../assets/200.png" alt="">
              </div>
              <div class="each_img">
                <img class="full_img" src="./../../../assets/300.png" alt="">
              </div>
              <div class="each_img">
                <img class="full_img" src="./../../../assets/400.png" alt="">
              </div>
              <div class="each_img">
                <img class="full_img" src="./../../../assets/500.png" alt="">
              </div>
              <div class="each_img">
                <img class="full_img" src="./../../../assets/600.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <div v-if="shimIndex === 1" class="smart_community">
          <!-- <div class="title smartAnimation">{{ props.opinionArray[1].title }}</div> -->
          <div class="explain smartAnimation">{{  props.opinionArray[1].explain }}</div>
          <div class="description smartAnimation">{{  props.opinionArray[1].description }}</div>
          <div class="image_box">
            <div class="top_image">
              <img class="full_img" src="./../../../assets/1000.png" alt="">
            </div>
            <div class="bottom_image">
              <img class="full_img" src="./../../../assets/1100.png" alt="">
            </div>
          </div>
        </div>
        <div v-if="shimIndex === 2" class="property_services">
          <!-- <div class="title smartAnimation">{{ props.opinionArray[2].title }}</div> -->
          <div class="explain smartAnimation">{{  props.opinionArray[2].explain }}</div>
          <div class="description smartAnimation">{{  props.opinionArray[2].description }}</div>
          <div class="image_box">
            <div class="imgage_content">
              <div class="each_img">
                <img class="full_img" src="./../../../assets/2001.png" alt="">
              </div>
              <div style="background: #fff" class="each_img"></div>
              <div style="background: #fff" class="each_img"></div>
              <div class="each_img">
                <img class="full_img" src="./../../../assets/2002.png" alt="">
              </div>
              <div class="each_img">
                <img class="full_img" src="./../../../assets/2003.png" alt="">
              </div>
              <div style="background: #fff" class="each_img"></div>
              <div style="background: #fff" class="each_img"></div>
              <div class="each_img">
                <img class="full_img" src="./../../../assets/2004.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="opinion_type">
        <div :class="{ activeOpinion: shimIndex === index }" class="each_opinion" v-for="(item, index) in props.opinionArray" :key="index" @click="handleOpinion(index)">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { animateCSS } from '@/utils/animationEnd'
import { computed, defineProps, nextTick, ref, watch } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const props = defineProps({
  opinionArray: Object
})
const shimIndex = ref(0)

const currentSwiperIndex = computed(() => store.state.activeSwiperIndex) // 监听当前第几页
watch(currentSwiperIndex, (newVal) => {
  if (newVal === 8) {
    animateCSS('.smartAnimation', ['animate__fadeInDown'], 0, true, true)
  }
})

const handleOpinion = (index) => {
  shimIndex.value = index
  nextTick(() => {
    animateCSS('.smartAnimation', ['animate__fadeInDown'], 0, true, true)
  })
}
</script>
<style lang="less" scoped>
.opinion{
  height: 100%;
  .opinion_box{
    .opinion_content{
      overflow: hidden;
      .title{
        margin-top: 90px;
        padding-left: 68px;
        line-height: 50px;
        color: #444;
        font-size: 50px;
        font-family: "VWText-Regular","HYQiHei-60S";
        font-weight: normal;
      }
      .explain{
        margin-top: 70px;
        padding-left: 40px;
        height: 32px;
        line-height: 32px;
        color: #444;
        font-size: 32px;
        font-family: "VWText-Regular","HYQiHei-60S";
        font-weight: normal;
      }
      .description{
        margin-top: 22px;
        padding: 0 22px 0 40px;
        line-height: 42px;
        font-size: 24px;
        color: #444;
        font-family: "VWText-Light","HYQiHei-40S";
        font-weight: normal;
      }
      .image_box{
        margin-top: 10px;
        height: 700px;
        padding: 0 22px;
        overflow-y: scroll;
        .imgage_content{
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          box-sizing: border-box;
          .each_img{
            margin-top: 35px;
            width: 335px;
          }
        }
        .top_image, .bottom_image{
          width: 100%;
          height: 310px;
        }
        .bottom_image{
          margin-top: 22px;
        }
      }
    }
    .opinion_type{
      position: absolute;
      width: 100%;
      top: 85%;
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
