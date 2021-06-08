<template>
  <div class="opinion">
    <div class="opinion_box">
      <div class="opinion_content">
        <div class="opinion_item" v-for="(item, index) in props.opinionArray" :key="index">
          <template v-if="index === shimIndex">
            <div class="title">{{ item.title }}</div>
            <div class="explain">{{ item.explain }}</div>
            <div class="description">{{ item.description }}</div>
          </template>
        </div>
      </div>
      <div class="opinion_type">
        <div v-for="(item, index) in props.opinionArray" :key="index" @click="handleOpinion(index)">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
  opinionArray: Object
})
const shimIndex = ref(0)

const handleOpinion = (index) => {
  shimIndex.value = index
}
</script>
<style lang="less" scoped>
.opinion{
  height: 100%;
  background-image: url('./../../../assets/background.png');
  background-size: 100%;
  background-repeat: no-repeat;
  .opinion_box{
    .opinion_content{
      overflow: hidden;
      .title{
        margin-top: 90px;
        padding-left: 68px;
        height: 50px;
        line-height: 50px;
        color: #FFFFFF;
        font-size: 50px;
        font-family: "VWText-Regular","HYQiHei-60S";
        font-weight: normal;
      }
      .explain{
        margin-top: 70px;
        padding-left: 40px;
        height: 32px;
        line-height: 32px;
        color: #FFFFFF;
        font-size: 32px;
        font-family: "VWText-Regular","HYQiHei-60S";
        font-weight: normal;
      }
      .description{
        margin-top: 22px;
        padding-left: 40px;
        line-height: 42px;
        font-size: 24px;
        color: rgba(255,255,255,0.8);
        font-family: "VWText-Light","HYQiHei-40S";
        font-weight: normal;
      }
    }
    .opinion_type{
      position: absolute;
      width: 100%;
      top: 70%;
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
        border-bottom: 1px solid rgba(255,255,255,0.3);
        box-sizing: border-box;
        color: #FFFFFF;;
        font-size: 28px;
        font-weight: normal;
        font-family: "VWText-Regular","HYQiHei-60S";
      }
    }
  }
}
</style>
