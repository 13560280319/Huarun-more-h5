<template>
  <div class="overlay_inner">
    <Icon name="cross" style="float:right;margin:10px 10px 0 0;" @click="handleClose()"></Icon>
    <div class="overlay_content">
      <div class="title innerAnimation">{{ propsObj.overlayData.title[currentIndex] }}</div>
      <div class="image_box">
        <img class="full_img" :src="propsObj.overlayData.image[currentIndex]" alt="">
      </div>
    </div>
    <!-- 美好社区二级主张 -->
    <div class="opinion_type">
      <div
        class="each_opinion"
        :class="{
          activeOpinion: currentIndex === index,
          fourList: propsObj.overlayData.name.length === 4
        }"
        v-for="(item, index) in propsObj.overlayData.name" :key="index" @click="handleOpinion(index)"
      >{{ item }}</div>
    </div>
  </div>
</template>
<script setup>
import { Icon } from 'vant'
import { defineProps, ref, onMounted, nextTick, computed, watch } from 'vue'
import { useStore } from 'vuex'
import { animateCSS } from '@/utils/animationEnd'
import { SET_COMMUNITY_OVERLAY, SET_OPTIMAL_OVERLAY } from '@/store/mutation-types'

const store = useStore()
const currentIndex = ref(0)
const propsObj = defineProps({
  overlayData: Object
})

const showCommunityOverlay = computed(() => store.state.showCommunityOverlay)
const showOptimalOverlay = computed(() => store.state.showOptimalOverlay)
watch([showCommunityOverlay, showOptimalOverlay], ([newCommunityOverlay, newOptimalOverlay]) => {
  if (newCommunityOverlay || newOptimalOverlay) {
    nextTick(() => {
      animateCSS('.innerAnimation', ['animate__fadeInDown'], 0, true)
    })
  }
})

const handleClose = () => { // 点击右上角关闭按钮
  store.commit(SET_COMMUNITY_OVERLAY, false)
  store.commit(SET_OPTIMAL_OVERLAY, false)
  currentIndex.value = 0
}

const handleOpinion = (index) => { // 点击每个主张
  currentIndex.value = index
  nextTick(() => {
    animateCSS('.innerAnimation', ['animate__fadeInDown'], 0, true)
  })
}
</script>
<style lang="less" scoped>
.overlay_inner{
  position: relative;
  height: 100%;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 1);
  .overlay_content{
    .title{
      margin-top: 120px;
      padding: 0 20px 0 50px;
      line-height: 55px;
      color: #333333;
      font-size: 36px;
      font-family: "VWText-Regular","HYQiHei-60S";
      font-weight: normal;
    }
    .image_box{
      margin-top: 180px;
      padding: 0 100px;
      box-sizing: border-box;
    }
  }
  .opinion_type{
    position: absolute;
    width: 100%;
    bottom: 3.5%;
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
    .fourList{
      width: 30%;
    }
  }
}
</style>
