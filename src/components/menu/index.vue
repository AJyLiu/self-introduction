<template>
  <Expand
    class="icon-menu"
    style="width: 26px; height: 26px"
    @click="openMenu"
  />
  <menu class="menu">
    <li
      v-for="(item, index) in menuList"
      class="menu-item"
      :key="index"
      :class="{ active: activeIndex === index }"
      @click="handleClick(index)"
    >
      {{ item }}
    </li>
  </menu>
  <div v-if="isShowMenu" class="phone-menu">
    <div class="phone-menu-close">
      <Close
        style="width: 26px; height: 26px; color: #c9f31d"
        @click="closeMenu"
      />
    </div>
    <menu class="phone-menu-item">
      <li
        v-for="(item, index) in menuList"
        class="menu-item"
        :key="index"
        :class="{ active: activeIndex === index }"
        @click="handleClickPhoneMenu(index)"
      >
        {{ item }}
      </li>
    </menu>
  </div>
</template>

<script setup lang="ts">
  import { ref, defineEmits } from 'vue';

  const emit = defineEmits(['menu-click']);

  const isShowMenu = ref(false);
  const menuList = ref([
    '首页',
    '关于我',
    '工作经历',
    '项目经历',
    '学习经历',
    '专业技能'
  ]);
  const activeIndex = ref<number>(0);

  const handleClick = (index: number) => {
    activeIndex.value = index;
    emit('menu-click', index);
  };

  const handleClickPhoneMenu = (index: number) => {
    closeMenu();
    activeIndex.value = index;
    emit('menu-click', index);
  };

  const openMenu = () => {
    isShowMenu.value = true;
  };

  const closeMenu = () => {
    isShowMenu.value = false;
  };
</script>

<style scoped lang="less">
  .menu {
    display: flex;
    align-items: center;
    font-size: 16px;
    .menu-item {
      margin: 0 14px;
      cursor: pointer;
      position: relative;
    }
    .menu-item:hover,
    .active {
      color: @active-color;
      transition: 0.6s;
    }
    .menu-item:hover:after,
    .active:after {
      content: '';
      position: absolute;
      width: 100%;
      left: 0;
      bottom: -12px;
      border-bottom: 4px solid @active-color;
      animation: menuin 0.6s ease;
    }
  }

  .phone-menu {
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #00000088;
    z-index: 99999;
    .phone-menu-close {
      padding: 20px 20px;
      text-align: right;
      background-color: black;
    }
    .phone-menu-item {
      padding: 10px 20px;
      .menu-item {
        padding: 15px 20px;
        font-size: 16px;
        color: #fff;
        border-bottom: 1px solid #cccccc9d;
      }
    }
  }
  @keyframes menuin {
    from {
      left: 50%;
      width: 0;
    }
    to {
      left: 0;
      width: 100%;
    }
  }
  @media screen and (max-width: 991px) {
    .menu {
      display: none;
    }
    .icon-menu {
      display: inline-block;
    }
  }
  @media screen and (min-width: 992px) {
    .icon-menu {
      display: none;
    }
  }
</style>
