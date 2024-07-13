<template>
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
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const menuList = ref([
    '首页',
    '工作经历',
    '项目经历',
    '学习经历',
    '专业技能',
    '自我评价'
  ]);
  const activeIndex = ref<number>(0);

  const handleClick = (index: number) => {
    activeIndex.value = index;
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
      border-bottom: 4px solid #2785ff;
      animation: menuin 0.6s ease;
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
</style>
