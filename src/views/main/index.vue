<template>
  <Header id="home" @menu-click="menuClick" />
  <Home></Home>
  <SpecialRow></SpecialRow>
  <About id="about"></About>
  <Experience id="experience"></Experience>
  <Project id="project"></Project>
  <JobScope></JobScope>
  <MyLeisureLife></MyLeisureLife>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import Home from '@/views/home/index.vue';
  import About from '@/views/about/index.vue';
  import Experience from '@/views/experience/index.vue';
  import Project from '@/views/project/index.vue';
  import SpecialRow from './SpecialRow.vue';
  import JobScope from '@/views/jobScope/index.vue';
  import MyLeisureLife from '@/views/myleisurelife/index.vue';

  const ids = ref(['home', 'about', 'experience', 'project']);
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
