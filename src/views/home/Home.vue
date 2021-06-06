<template>
  <div class="swiper_box">
    <swiper :direction="'vertical'">
      <swiper-slide>
        <div class="swiper1">
          <div class="logo_box">
            <div class="img_box">
              <img class="full_img" src="./../../assets/Snipaste_2021-06-06_00-02-04.png" alt="">
            </div>
          </div>
          <div class="opinion_box">
            <dl v-for="(item, index) of opinionList" :key="index">
              <dt>{{ item.tag }}</dt>
              <dd>{{ item.title }}</dd>
            </dl>
          </div>
          <DownArrow></DownArrow>
        </div>
      </swiper-slide>
      <swiper-slide>
        Slide 1
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup>
import DownArrow from '@/components/DownArrow.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.less'
import { ref } from 'vue'

const opinionList = ref([
  { tag: 'More+', title: '城市理想' },
  { tag: 'More+', title: '美好社区' },
  { tag: 'More+', title: '优居生活' },
  { tag: 'More+', title: '智慧服务' }
])

</script>
<style lang="less" scoped>
.swiper_box{
  height: 100%;
  .swiper1{
    position: relative;
    overflow: hidden;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url('./../../assets/kk11.jpg');
    .logo_box{
      margin-top: 35px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      .img_box{
        width: 200px;
        height: 70px;
      }
    }
    .opinion_box{
      padding: 0px 50px;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      position: absolute;
      top: 72%;
      box-sizing: border-box;
      dl dt{
        height: 34px;
        line-height: 34px;
        text-align: center;
        font-size: 34px;
        font-family: 'VWText-Regular','HYQiHei-60S';
        color: #fff;
      }
      dl dd{
        margin-top: 16px;
        height: 22px;
        line-height: 22px;
        text-align: center;
        font-size: 22px;
        font-family: 'VWText-Regular','HYQiHei-60S';
        color: rgba(255,255,255,0.6);
      }
    }
  }
}
</style>
