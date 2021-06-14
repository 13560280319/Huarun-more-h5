<template>
  <div class="opinion city_opinion">
    <swiper
      :slidesPerView="1.29"
      :spaceBetween="25"
      :slidesOffsetBefore="26"
      :slidesOffsetAfter="70"
      :watchSlidesProgress="true"
      :pagination="{
        clickable: true
      }"
      class="city_swiper"
      >
      <swiper-slide style="padding-left: 20px">
        <div class="city_swiper_image_box">
          <img class="city_swiper_image" :src="city1" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="city_swiper_image_box">
          <img class="city_swiper_image" :src="city2" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="city_swiper_image_box">
          <img class="city_swiper_image" :src="city3" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="city_swiper_image_box">
          <img class="city_swiper_image" :src="city4" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="city_swiper_image_box">
          <img class="city_swiper_image" :src="city5" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import city1 from './../../../assets/city1.jpeg'
import city2 from './../../../assets/city2.jpeg'
import city3 from './../../../assets/city3.jpeg'
import city4 from './../../../assets/city4.jpeg'
import city5 from './../../../assets/city5.jpeg'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.less'
import SwiperCore, { Pagination } from 'swiper'
import 'swiper/components/pagination/pagination.less'
import { onMounted } from 'vue'

SwiperCore.use([Pagination])

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      city1,
      city2,
      city3,
      city4,
      city5
    }
  },
  setup () {
    return {}
  }
}

</script>
<style lang="less" scoped>
.opinion{
  height: 100%;
  overflow: hidden;
  .city_swiper{
    margin-top: 45px;
    height: 100%;
    .city_swiper_image_box{
      width: 100%;
      .city_swiper_image{
        width: 100%;
      }
    }
  }
}
</style>
