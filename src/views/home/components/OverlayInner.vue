<template>
  <div class="overlay_inner">
    <Icon name="cross" style="float:right;margin:10px 10px 0 0;" @click="handleClose()"></Icon>
    <div class="overlay_content">
      <div class="title">{{ propsObj.overlayData.title[currentIndex] }}</div>
      <div class="image_box">
        <img class="full_img" src="./../../../assets/2002.png" alt="">
      </div>
    </div>
    <div class="community_type">
      <div v-for="(item, index) in propsObj.overlayData.name" :key="index" @click="handleOpinion(index)">{{ item }}</div>
    </div>
  </div>
</template>
<script setup>
import { Icon } from 'vant'
import { defineProps, ref } from 'vue'
import { useStore } from 'vuex'
import { SET_COMMUNITY_OVERLAY } from '@/store/mutation-types'

const store = useStore()
const currentIndex = ref(0)
const propsObj = defineProps({
  overlayData: Object
})

const handleClose = () => {
  store.commit(SET_COMMUNITY_OVERLAY, false)
}

const handleOpinion = (index) => {
  currentIndex.value = index
}
</script>
<style lang="less" scoped>
.overlay_inner{
  position: relative;
  height: 100%;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 1);
  // background-image: url(./../../../assets/kk11.jpg);
  // background-size: 100% 100%;
  // background-repeat: no-repeat;
  .overlay_content{
    .title{
      margin-top: 90px;
      padding-left: 68px;
      line-height: 50px;
      color: #333333;
      font-size: 36px;
      font-family: "VWText-Regular","HYQiHei-60S";
      font-weight: normal;
    }
    .image_box{
      margin-top: 150px;
      padding: 0 50px;
      box-sizing: border-box;
    }
  }
  .community_type{
    position: absolute;
    width: 100%;
    top: 75%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    div{
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
      font-family: "VWText-Regular","HYQiHei-60S";
    }
  }
}
</style>
