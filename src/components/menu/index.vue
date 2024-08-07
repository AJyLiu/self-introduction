<template>
  <Expand
    v-if="!isShowMenu"
    class="icon-menu"
    style="width: 1.8rem; height: 1.8rem"
    @click="openMenu"
  />
  <Fold
    v-else
    class="icon-menu"
    style="width: 1.8rem; height: 1.8rem"
    @click="closeMenu"
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
  <transition
    enter-active-class="animate__animated animate__fadeInLeft"
    leave-active-class="animate__animated animate__fadeOutLeft"
  >
    <div v-if="isShowMenu" class="phone-menu">
      <div class="phone-menu-close">
        <Close
          style="width: 1.8rem; height: 1.8rem; color: #c9f31d"
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
  </transition>
</template>

<script setup lang="ts">
  import { debounce } from '@/utils/commonUitls';
  import { ref, onMounted, onUnmounted } from 'vue';

  const emit = defineEmits(['menu-click']);

  const isShowMenu = ref(false);
  const menuList = ref([
    '首页',
    '关于我',
    '经历',
    '项目',
    '业务',
    '业余生活',
    '博客'
  ]);
  const activeIndex = ref<number>(0);

  const handleClick = (index: number) => {
    if (index === 6) {
      window.open('http://blog.liujunyao.cn/');
      return;
    }
    activeIndex.value = index;
    emit('menu-click', index);
  };

  const handleClickPhoneMenu = (index: number) => {
    if (index === 6) {
      window.open('http://blog.liujunyao.cn/');
      return;
    }
    activeIndex.value = index;
    closeMenu();
    emit('menu-click', index);
  };

  const openMenu = () => {
    isShowMenu.value = true;
  };

  const closeMenu = () => {
    isShowMenu.value = false;
  };

  const handleScroll = () => {
    const navContents = document.querySelectorAll('.anchor-point');
    const currentOffsetTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const offsetTop: number[] = [];

    navContents.forEach((item: any) => {
      offsetTop.push((item.offsetTop as number) - windowHeight / 2); // 滑动到浏览器中间位置时
    });

    offsetTop.forEach((item, index) => {
      activeIndex.value = currentOffsetTop >= item ? index : activeIndex.value;
    });
  };

  onMounted(() => {
    document.addEventListener('scroll', debounce(handleScroll, 400));
  });

  onUnmounted(() => {
    document?.removeEventListener('scroll', debounce(handleScroll, 400));
  });
</script>

<style scoped lang="less">
  .menu {
    display: flex;
    align-items: center;
    font-size: 1rem;
    .menu-item {
      margin: 0 0.8rem;
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
      bottom: -0.8rem;
      border-bottom: 4px solid @active-color;
      animation: menuin 0.6s ease;
    }
  }

  .phone-menu {
    height: 100vh;
    width: 15rem;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #ffffff;
    z-index: 99999;
    .phone-menu-close {
      padding: 1.3rem;
      text-align: right;
      background-color: @main-color;
    }
    .phone-menu-item {
      padding: 0.8rem 1.3rem;
      .menu-item {
        padding: 1rem 1.3rem;
        font-size: 1rem;
        color: @main-color;
        border-bottom: 1px solid #cccccc9d;
        font-weight: 700;
        cursor: pointer;
      }
      .active {
        color: @active-color;
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
