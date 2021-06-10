<template>
  <div class="preface_part">
    <div class="back_image_box">
      <img class="full_img" :src="prefacePartData.backGif" alt="" @load="imageLoad">
    </div>
    <div class="content_box">
      <p :class="contentClass" class="more invisible">More+</p>
      <p :class="contentClass" class="type invisible">{{ prefacePartData.title }}</p>
      <p :class="contentClass" class="text1 invisible">
        {{ prefacePartData.text1 }}
      </p>
      <p :class="contentClass" class="text1 text2 invisible">
        {{ prefacePartData.text2 }}
      </p>
    </div>
  </div>
</template>
<script setup>
import { computed, watch, defineProps } from 'vue'
import { useStore } from 'vuex'
import { animateCSS } from '@/utils/animationEnd'

const store = useStore()
const propsObj = defineProps({
  contentClass: String,
  prefacePartData: Object
})

let imagePromise = null
const imageLoad = () => {
  console.log('图片加载完成')
  imagePromise = Promise.resolve()
}

const endSwiperIndex = computed(() => store.state.endActiveSwiperIndex) // 监听当前第几页
watch(endSwiperIndex, (newVal) => {
  switch (newVal) {
    case 1:
      Promise.all([imagePromise]).then(() => {
        setTimeout(() => {
          animateCSS(`.${propsObj.contentClass}`, ['animate__fadeIn', 'animate__slow'], 0, false, true)
        }, 1850)
      })
      break
    case 3:
      Promise.all([imagePromise]).then(() => {
        setTimeout(() => {
          alert('6666')
          animateCSS(`.${propsObj.contentClass}`, ['animate__fadeIn', 'animate__slow'], 0, false, true)
        }, 1850)
      })
      break
  }
})

</script>
<style lang="less" scoped>
.preface_part{
  height: 100%;
  .back_image_box{
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .content_box{
    padding: 65px 40px;
    height: 100%;
    position: relative;
    .more{
      height: 100px;
      line-height: 100px;
      font-size: 100px;
      font-family: 'SourceHanSansSC-Bold';
      font-weight: 600;
      color: rgba(255, 255, 255, 1);
    }
    .type{
      margin-top: 22.5px;
      height: 118px;
      line-height: 118px;
      font-size: 118px;
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
  }
}
</style>
