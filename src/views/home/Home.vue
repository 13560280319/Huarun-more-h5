<template>
  <div class="swiper_box">
    <swiper :direction="'vertical'">
      <swiper-slide>
        <div class="first_screen">
          Slide 2
        </div>
      </swiper-slide>
      <swiper-slide>
        Slide 1
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.less'
</script>
<style lang="less" scoped>
.swiper_box{
  height: 100%;
}
</style>
