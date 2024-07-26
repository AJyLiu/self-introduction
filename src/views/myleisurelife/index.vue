<template>
  <section class="layout">
    <div class="mian-container header-box wow fadeInUp">
      <h1>业余生活</h1>
      <h5>丰富的业余生活，如垂钓、羽毛球、摄影、爱倒腾</h5>
    </div>
    <SwiperPic></SwiperPic>
    <MapChart></MapChart>
  </section>
</template>

<script setup lang="ts">
  import SwiperPic from './SwiperPic.vue';
  import MapChart from './MapChart.vue';
</script>

<style scoped lang="less">
  .header-box {
    width: 30rem;
    text-align: center;
    margin: 0 auto;
    h1 {
      font-size: 2rem;
    }
    h5 {
      font-weight: 100;
      margin-top: 1rem;
    }
  }
  @media screen and (max-width: 1199px) {
    .header-box {
      width: 100%;
    }
  }
</style>
