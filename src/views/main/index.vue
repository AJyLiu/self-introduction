<template>
  <Header id="home" @menu-click="menuClick" />
  <Home></Home>
  <About id="about"></About>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import Home from '@/views/home/index.vue';
  import About from '@/views/about/index.vue';

  const ids = ref(['home', 'about']);
  const menuClick = (index: number) => {
    const dom = document.getElementById(ids.value[index]);
    if (dom) {
      dom.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
</script>

<style scoped lang="less"></style>
