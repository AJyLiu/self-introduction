<template>
  <Header id="home" @menu-click="menuClick" />
  <Home></Home>
  <SpecialRow></SpecialRow>
  <About id="about"></About>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import Home from '@/views/home/index.vue';
  import About from '@/views/about/index.vue';
  import SpecialRow from './SpecialRow.vue';

  const ids = ref(['home', 'about']);
  const menuClick = (index: number) => {
    const dom = document.getElementById(ids.value[index]);
    if (dom) {
      dom.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
</script>

<style scoped lang="less">
  .swiperBox {
    height: 100vh;
  }
</style>
