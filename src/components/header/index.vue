<template>
  <header class="header">
    <div class="header-left">
      <img :src="logoSrc" class="header-logo" alt="logo" />
      <text>JyLiu</text>
    </div>
    <div class="header-right">
      <Menu />
      <a
        class="btn"
        :class="{ unHover: isUnhover }"
        @mouseenter="isUnhover = false"
        @mouseleave="handleMouseleave"
      >
        Sign in
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import logo from '@/assets/images/logo.png';

  const logoSrc = logo;
  const isUnhover = ref<boolean>(false);

  const handleMouseleave = () => {
    isUnhover.value = true;
  };
</script>

<style scoped lang="less">
  .header {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 60px;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    .header-left {
      display: flex;
      align-items: center;
      .header-logo {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
      text {
        font-size: 28px;
        margin-left: 12px;
        font-weight: 700;
        color: @active-color;
      }
    }
    .header-right {
      display: flex;
      .btn {
        border: 1px solid #1c3f39;
        padding: 14px 40px;
        border-radius: 5px;
        margin-left: 120px;
        cursor: pointer;
        transition: 0.5s;
        position: relative;
        background-color: transparent;
      }
      .btn:before {
        position: absolute;
        top: 0;
        left: 50%;
        right: 50%;
        bottom: 0;
        opacity: 0;
        content: '';
        background-color: @active-color;
        border-radius: 5px;
        z-index: -1;
      }
      .unHover:before {
        animation: hoverleave 0.5s ease;
      }
      .btn:hover {
        color: #ffffff;
      }
      .btn:hover:before {
        left: 0;
        right: 0;
        opacity: 1;
        animation: expand 0.5s ease;
      }
    }
  }
  @keyframes expand {
    0% {
      opacity: 0;
      left: 50%;
      right: 50%;
    }
    100% {
      opacity: 1;
      left: 0;
      right: 0;
    }
  }
  @keyframes hoverleave {
    0% {
      opacity: 1;
      left: 0;
      right: 0;
    }
    100% {
      opacity: 0;
      left: 50%;
      right: 50%;
    }
  }
</style>
