<template>
  <div class="preface_part">
    <div class="back_image_box">
      <img v-if="reverseBackGif" class="full_img" :src="prefacePartData.backGif" alt="" @load="imageLoad">
    </div>
    <div class="content_box">
     <p :class="contentClass" class="more invisible">MORE+</p>
      <p :class="contentClass" class="type invisible">{{ prefacePartData.title }}</p>
      <p :class="contentClass" class="part invisible">{{ prefacePartData.part }}</p>
      <p class="text1 invisible livePrefaceTwo">
        {{ prefacePartData.text1 }}
      </p>
      <p class="text1 text2 invisible livePrefaceTwo">
        {{ prefacePartData.text2 }}
      </p>
    </div>
  </div>
</template>
<script setup>
import { computed, watch, defineProps, ref } from 'vue'
import { useStore } from 'vuex'
import { animateCSS } from '@/utils/animationEnd'

const store = useStore()
const propsObj = defineProps({
  contentClass: String,
  prefacePartData: Object
})
const reverseBackGif = ref(false)

let imagePromise = null
const imageLoad = () => {
  console.log('图片加载完成 优居')
  imagePromise = Promise.resolve()
}

const endSwiperIndex = computed(() => store.state.endActiveSwiperIndex)
watch(endSwiperIndex, (newVal) => {
  switch (newVal) {
    case 7:
      reverseBackGif.value = true
      Promise.all([imagePromise]).then(() => {
        setTimeout(() => {
          animateCSS(`.${propsObj.contentClass}`, ['animate__fadeIn', 'animate__slow'], 0, false, true)
          setTimeout(() => {
            animateCSS('.livePrefaceTwo', ['animate__fadeIn', 'animate__slow'], 0, false, true)
          }, 700)
        }, 1200)
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
    padding: 75px 66px;
    height: 100%;
    position: relative;
    .more{
      height: 110px;
      line-height: 110px;
      font-size: 110px;
      font-family: "Microsoft YaHei";
      font-weight: 600;
      color: rgba(255, 255, 255, 1);
    }
    .type{
      margin-top: 40px;
      height: 118px;
      line-height: 118px;
      font-size: 154px;
      font-family: 'Orkney-Bold';
      font-weight: 600;
      color: #ffffff;
    }
    .part{
      margin-top: 35px;
      height: 65px;
      line-height: 65px;
      font-size: 65px;
      font-family: 'SourceHanSansSC-Bold';
      font-weight: 600;
      color: #ffffff;
    }
    .text1{
      margin-top: 400px;
      font-size: 28px;
      font-family: "VWText-Light","HYQiHei-40S";
      font-weight: normal;
    }
    .text2{
      margin-top: 70px;
    }
  }
}
</style>
