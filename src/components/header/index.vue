<template>
  <header class="header fadeIn">
    <div class="header-left">
      <img :src="logoSrc" class="header-logo" alt="logo" />
      <text class="logo-text">JyLiu</text>
    </div>
    <div class="header-right">
      <Menu @menu-click="menuClick" />
      <a class="btn"> Sign in </a>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { defineEmits } from 'vue';
  import logo from '@/assets/images/logo.png';

  const emit = defineEmits(['menu-click']);
  const logoSrc = logo;
  const menuClick = (index: number) => {
    emit('menu-click', index);
  };
</script>

<style scoped lang="less">
  .header {
    height: 7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5rem;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    .header-left {
      display: flex;
      align-items: center;
      .header-logo {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
      }
      text {
        font-size: 2rem;
        margin-left: 0.8rem;
        font-weight: 700;
      }
    }
    .header-right {
      display: flex;
      .btn {
        border: 1px solid #1c3f39;
        padding: 1rem 3rem;
        border-radius: 5px;
        margin-left: 6rem;
        cursor: pointer;
        transition: 0.5s;
        position: relative;
        background-color: transparent;
      }
      .btn::before {
        position: absolute;
        top: 0;
        left: 50%;
        right: 50%;
        bottom: 0;
        opacity: 0;
        content: '';
        background-color: @prominent-color;
        border-radius: 5px;
        z-index: -1;
        transition: all 0.5s;
        -webkit-transition: all 0.5s;
      }
      .btn:hover {
        border: 1px solid @prominent-color;
        background-color: transparent;
        z-index: 1;
      }
      .btn:hover::before {
        right: 0;
        left: 0;
        opacity: 1;
        z-index: -1;
        background-color: @prominent-color;
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
  @media screen and (max-width: 991px) {
    .header {
      padding: 0 10px;
    }
    .btn {
      display: none;
    }
  }
  @media screen and (min-width: 992px) and (max-width: 1199px) {
    .btn {
      display: none;
    }
  }
</style>
