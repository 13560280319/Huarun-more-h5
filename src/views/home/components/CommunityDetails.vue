<template>
  <div class="community_details">
    <div class="community_details_title">
      <div class="title_box invisible detailsTitleAnimate">
        <div class="title">{{ topTitle.title1 }} - </div>
        <div class="line detailsLineAnimate1"></div>
        <div class="title title2">{{ topTitle.title2 }}</div>
        <div class="line line2 detailsLineAnimate2"></div>
      </div>
      <div class="description_box invisible detailsDescriptionAniamte">
        <div class="description1">{{ topTitle.description1 }}</div>
        <div class="description2">{{ topTitle.description2 }}</div>
      </div>
      <div class="short_line detailsShortLineAnimate"></div>
    </div>
    <div class="community_details_swiper_box invisible communityDetailsSwiperBoxAnimate">
      <swiper
        :slidesPerView="1.29"
        :spaceBetween="25"
        :slidesOffsetBefore="47"
        :slidesOffsetAfter="50"
        :watchSlidesProgress="true"
        :pagination="{
          clickable: true
        }"
        class="community_swiper"
        @activeIndexChange="activeIndexChange"
        >
        <swiper-slide>
          <div class="community_swiper_image_box">
            <img class="community_swiper_image" src="./../../../assets/xijie1.png" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="community_swiper_image_box">
            <img class="community_swiper_image" src="./../../../assets/xijie2.png" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="community_swiper_image_box">
            <img class="community_swiper_image" src="./../../../assets/xijie3.png" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="community_swiper_image_box">
            <img class="community_swiper_image" src="./../../../assets/xijie4.png" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="community_swiper_image_box">
            <img class="community_swiper_image" src="./../../../assets/xijie5.png" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
import { animateCSS, dealAddClass } from '@/utils/animationEnd'
import { computed, watch } from 'vue'
import { useStore } from 'vuex'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.less'
import SwiperCore, { Pagination } from 'swiper'
import 'swiper/components/pagination/pagination.less'
SwiperCore.use([Pagination])
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      topTitle: {
        title1: '不止于功能',
        title2: '幸福归家路 细节动人心',
        description1: '道路千万条',
        description2: '安全第一条'
      }
    }
  },
  methods: {
    activeIndexChange (swiper) {
      switch (swiper.activeIndex) {
        case 0:
          this.topTitle = {
            title1: '不止于功能',
            title2: '幸福归家路 细节动人心',
            description1: '道路千万条',
            description2: '安全第一条'
          }
          break
        case 1:
          this.topTitle = {
            title1: '不止于功能',
            title2: '幸福归家路 细节动人心',
            description1: '回家仪式感',
            description2: '必不能少'
          }
          break
        case 2:
          this.topTitle = {
            title1: '不止于功能',
            title2: '幸福归家路 细节动人心',
            description1: '欢乐体验',
            description2: '从良好环境开始'
          }
          break
        case 3:
          this.topTitle = {
            title1: '不止于功能',
            title2: '幸福归家路 细节动人心',
            description1: '让绿色',
            description2: '真正融入生活中'
          }
          break
        case 4:
          this.topTitle = {
            title1: '不止于功能',
            title2: '幸福归家路 细节动人心',
            description1: '所有设计',
            description2: '都是以人为本'
          }
          break
      }
    }
  },
  setup () {
    const store = useStore()
    const sliderSwiperName = computed(() => store.state.sliderSwiperName)

    watch(sliderSwiperName, (newVal, oldVal) => {
      if (newVal === 'communityDetails') {
        animateCSS('.detailsTitleAnimate', ['animate__fadeIn'], 0)
        setTimeout(() => {
          animateCSS('.detailsDescriptionAniamte', ['animate__fadeIn'], 0)
        }, 500)
        setTimeout(() => {
          dealAddClass('.detailsLineAnimate1', 'animationLine1', 0)
          dealAddClass('.detailsLineAnimate2', 'animationLine2', 0)
          dealAddClass('.detailsShortLineAnimate', 'animationShortLine', 0)
        }, 1000)
        setTimeout(() => {
          animateCSS('.communityDetailsSwiperBoxAnimate', ['animate__fadeIn'], 0)
        }, 2000)
      }
    })

    return {}
  }
}
</script>
<style lang="less" scoped>
.community_details{
  height: 100%;
  overflow: hidden;
  .community_details_title{
    position: relative;
    padding: 40px 40px;
    height: 305px;
    .title_box{
      display: inline-block;
      --animate-duration: 1500ms;
      .title{
        height: 60px;
        line-height: 60px;
        font-size: 60px;
        font-weight: 500;
        font-family: 'PingFang SC';
        color: rgb(51,51,51);
        z-index: 1;
      }
      .title2{
        margin-top: 2px;
      }
      .line{
        margin-top: -28px;
        width: 0%;
        height: 43px;
        background-color: #F3C239;
        z-index: -1;
      }
    }
    .description_box{
      margin-top: 55px;
      font-size: 32px;
      font-weight: 500;
      font-family: 'PingFang SC';
      color: rgb(51,51,51);
      --animate-duration: 1500ms;
      .description2{
        margin-top: 2px;
      }
    }
    .short_line{
      position: absolute;
      top: 350px;
      width: 0px;
      border-top: 1PX solid rgb(51,51,51);
    }
  }
  .community_details_swiper_box{
    height: 60%;
    margin-top: 5px;
    .community_swiper{
      height: 100%;
    }
    .community_swiper_image_box{
      width: 100%;
      .community_swiper_image{
        width: 100%;
      }
    }
  }
}

// 黄色底线动画
.animationLine1{
  animation: animationLine1 1500ms ease-in-out forwards;
}
@keyframes animationLine1 {
  to {
    width: 60%;
  }
}

.animationLine2{
  animation: animationLine2 1500ms ease-in-out forwards;
}
@keyframes animationLine2 {
  to {
    width: 105%;
  }
}

// 黑色小短线动画
.animationShortLine{
  animation: animationShortLine 1500ms ease-in-out forwards;
}
@keyframes animationShortLine {
  to {
    width: 135px;
  }
}
</style>
