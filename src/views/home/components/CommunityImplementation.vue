<template>
  <div class="community_implementation">
    <div class="community_implementation_title">
      <div class="title_box invisible implementationTitleAnimate">
        <div class="title">{{ topTitle.title1 }} - </div>
        <div class="line implementationLineAnimate1"></div>
        <div class="title title2">{{ topTitle.title2 }}</div>
        <div class="line line2 implementationLineAnimate2"></div>
      </div>
      <div class="description_box invisible implementationDescriptionAniamte">
        <div class="description1">{{ topTitle.description1 }}</div>
        <div class="description2">{{ topTitle.description2 }}</div>
      </div>
      <div class="short_line implementationShortLineAnimate"></div>
    </div>

    <div class="community_implementation_swiper_box invisible communityImplementationSwiperBoxAnimate">
      <swiper
        :watchSlidesProgress="true"
        :resistanceRatio="0"
        class="community_swiper"
        @activeIndexChange="activeIndexChange"
        @init="init"
        @resize="resize"
        @setTranslate="setTranslate"
        @setTransition="setTransition"
        >
        <swiper-slide>
          <div class="community_swiper_image_box">
            <img class="community_swiper_image" src="./../../../assets/shixian1.png" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="community_swiper_image_box">
            <img class="community_swiper_image" src="./../../../assets/shixian2.png" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="community_swiper_image_box">
            <img class="community_swiper_image" src="./../../../assets/shixian3.png" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="community_swiper_image_box">
            <img class="community_swiper_image" src="./../../../assets/shixian4.png" />
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div class="bottom_explain invisible bottomExplainAnimate">
      <div class="image_box">
        <img :src="bottomExplain.partImage" alt="">
      </div>
      <div class="explain">
        <p>{{ bottomExplain.explain1 }}</p>
        <p>{{ bottomExplain.explain2 }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import part1 from '@/assets/part1.png'
import part2 from '@/assets/part2.png'
import part3 from '@/assets/part3.png'
import part4 from '@/assets/part4.png'
import { animateCSS, dealAddClass } from '@/utils/animationEnd'
import { computed, watch } from 'vue'
import { useStore } from 'vuex'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.less'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      topTitle: {
        title1: '有温度、有互动的',
        title2: '美好社区',
        description1: '道路千万条',
        description2: '安全第一条'
      },
      bottomExplain: {
        partImage: part1,
        explain1: '儿童游乐堡',
        explain2: '幼儿启蒙 感知成长阶段 小小探险家'
      }
    }
  },
  methods: {
    activeIndexChange (swiper) {
      switch (swiper.activeIndex) {
        case 0:
          this.topTitle = {
            title1: '有温度、有互动的',
            title2: '美好社区',
            description1: '精细化科学分区',
            description2: '给家长提供专享看护区域'
          }
          this.bottomExplain = {
            partImage: part1,
            explain1: '儿童游乐堡',
            explain2: '幼儿启蒙 感知成长阶段 小小探险家'
          }
          break
        case 1:
          this.topTitle = {
            title1: '有温度、有互动的',
            title2: '美好社区',
            description1: '建立社交共享空间',
            description2: '帮你找到灵魂好友'
          }
          this.bottomExplain = {
            partImage: part2,
            explain1: '邻里客厅',
            explain2: '社区会客厅 宅间花园'
          }
          break
        case 2:
          this.topTitle = {
            title1: '有温度、有互动的',
            title2: '美好社区',
            description1: '专属适老化娱乐空间',
            description2: '让长者融入集体'
          }
          this.bottomExplain = {
            partImage: part3,
            explain1: '颐享之地',
            explain2: '康体活动 萌宠乐园 棋牌娱乐'
          }
          break
        case 3:
          this.topTitle = {
            title1: '有温度、有互动的',
            title2: '美好社区',
            description1: '多功能模块布局',
            description2: '让全家人找到运动乐趣'
          }
          this.bottomExplain = {
            partImage: part4,
            explain1: '运动基地',
            explain2: '分龄泳池 环跑步道 健身俱乐部'
          }
          break
      }
    },
    init (swiper) {
      for (let i = 0; i < swiper.slides.length; i++) {
        swiper.slides.eq(i).css('zIndex', 100 - i) // 设置slide的z-index层级
      }
    },
    resize (swiper) {
      swiper.update()
    },
    setTranslate (swiper) {
      const offsetAfter = swiper.width * 0.95 // 每个slide的位移值
      for (let i = 0; i < swiper.slides.length; i++) {
        const slide = swiper.slides.eq(i)
        const progress = swiper.slides[i].progress
        if (progress <= 0) { // 右边slide位移
          slide.transform('translate3d(' + (progress) * offsetAfter + 'px, 0, 0) scale(' + (1 - Math.abs(progress) / 20) + ')')
          slide.css('opacity', (progress + 3)) // 最右边slide透明
        }
        if (progress > 0) {
          slide.transform('rotate(' + (-progress) * 5 + 'deg)') // 左边slide旋转
          slide.css('opacity', 1 - progress) // 左边slide透明
        }
      }
    },
    setTransition (swiper, transition) {
      for (let i = 0; i < swiper.slides.length; i++) {
        swiper.slides.eq(i).transition(transition)
      }
    }
  },
  setup () {
    const store = useStore()
    const sliderSwiperName = computed(() => store.state.sliderSwiperName)

    watch(sliderSwiperName, (newVal, oldVal) => {
      if (newVal === 'communityImplementation') {
        animateCSS('.implementationTitleAnimate', ['animate__fadeIn'], 0)
        setTimeout(() => {
          animateCSS('.implementationDescriptionAniamte', ['animate__fadeIn'], 0)
        }, 500)
        setTimeout(() => {
          dealAddClass('.implementationLineAnimate1', 'animationLine1', 0)
          dealAddClass('.implementationLineAnimate2', 'animationLine2', 0)
          dealAddClass('.implementationShortLineAnimate', 'animationShortLine', 0)
        }, 1000)
        setTimeout(() => {
          animateCSS('.communityImplementationSwiperBoxAnimate', ['animate__fadeIn'], 0)
          animateCSS('.bottomExplainAnimate', ['animate__fadeIn'], 0)
        }, 2000)
      }
    })

    return {}
  }
}
</script>
<style lang="less" scoped>
.community_implementation{
  height: 100%;
  overflow: hidden;
  .community_implementation_title{
    position: relative;
    padding: 40px 40px;
    height: 305px;
    .title_box{
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
  .community_implementation_swiper_box{
    height: 50%;
    margin-top: 5px;
    .community_swiper{
      height: 100%;
    }
    .community_swiper_image_box{
      margin: 0 0 0 70px;
      width: 75%;
      .community_swiper_image{
        width: 100%;
      }
    }
  }
  .bottom_explain{
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 32px;
    font-weight: 500;
    font-family: 'PingFang SC';
    color: rgb(51,51,51);
    .image_box{
      margin-right: 20px;
      width: 110px;
      img{
        width: 100%;
      }
    }
    .explain{
      p{
        height: 32px;
        line-height: 32px;
      }
      p:nth-child(2){
        margin-top: 12px;
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
    width: 79.5%;
  }
}
.animationLine2{
  animation: animationLine2 1500ms ease-in-out forwards;
}
@keyframes animationLine2 {
  to {
    width: 38%;
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
