<template>
  <div class="optimal">
    <div class="optimal_box">
      <div class="optimal_content">
        <div class="optimal_item">
          <div class="research_top_img"></div>
          <div class="research_bottom_img"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
<style lang="less" scoped>
.optimal{
  height: 100%;
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: rgba(255,255,255,1);
  .optimal_box{
    .optimal_content{
      overflow: hidden;
      .optimal_item{
        padding: 25px 20px 0;
        .research_top_img{
          margin: 50px auto;
          width: 600px;
          height: 450px;
          background-position: 80px -370px;
          background-size: 75%;
          background-image: url(./../../../assets/bing2.gif);
          background-repeat: no-repeat;
        }
        .research_bottom_img{
          margin: 30px auto;
          width: 600px;
          height: 500px;
          background-position: 125px -280px;
          background-size: 60%;
          background-image: url(./../../../assets/zhu1.gif);
          background-repeat: no-repeat;
        }
      }
    }
  }
}
</style>
