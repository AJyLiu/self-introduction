<template>
  <div v-if="isShowBackTop" class="back-top" @click="backTop">
    <Top style="width: 1.5rem; height: 1.5rem" />
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  import { debounce } from '@/utils/commonUitls';

  const isShowBackTop = ref<boolean>(false);

  const backTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    const innerHeight = window.innerHeight;
    if (window.scrollY > innerHeight) {
      isShowBackTop.value = true;
    } else {
      isShowBackTop.value = false;
    }
  };

  onMounted(() => {
    document.addEventListener('scroll', debounce(handleScroll, 400));
  });

  onUnmounted(() => {
    document?.removeEventListener('scroll', debounce(handleScroll, 400));
  });
</script>

<style scoped lang="less">
  .back-top {
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: @main-color;
    z-index: 1;
    cursor: pointer;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;
    border: 1px solid @main-color;
  }
  .back-top:hover {
    background-color: @prominent-color;
    color: @main-color;
    border: 1px solid @main-color;
    z-index: 1;
  }
  .back-top::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    bottom: 50%;
    right: 50%;
    left: 50%;
    opacity: 0;
    border-radius: 50%;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    background-color: @prominent-color;
  }
  .back-top:hover::before {
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    opacity: 1;
    z-index: -1;
    background-color: @prominent-color;
  }
  @media screen and (max-width: 1199px) {
    .back-top {
      right: 1rem;
    }
  }
</style>
