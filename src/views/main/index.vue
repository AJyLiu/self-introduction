<template>
  <Header id="home" class="anchor-point" @menu-click="menuClick" />
  <Home></Home>
  <SpecialRow></SpecialRow>
  <About id="about" class="anchor-point"></About>
  <ExperiencePage id="experience-page" class="anchor-point"></ExperiencePage>
  <Project id="project" class="anchor-point"></Project>
  <JobScope id="job-scope" class="anchor-point"></JobScope>
  <MyLeisureLife id="leisure-life" class="anchor-point"></MyLeisureLife>
  <Footer></Footer>
  <BackTop></BackTop>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import Home from '@/views/home/index.vue';
  import About from '@/views/about/index.vue';
  import ExperiencePage from '@/views/experience/index.vue';
  import Project from '@/views/project/index.vue';
  import SpecialRow from './SpecialRow.vue';
  import JobScope from '@/views/jobScope/index.vue';
  import MyLeisureLife from '@/views/myleisurelife/index.vue';
  import Footer from '@/views/footer/index.vue';

  const ids = ref(['home', 'about', 'experience-page', 'project', 'job-scope', 'leisure-life']);
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
