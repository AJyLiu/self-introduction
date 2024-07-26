<template>
  <section class="layout">
    <swiper
      :modules="modules"
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :loop="true"
      :slides-per-view="3"
      :space-between="0"
      :speed="1000"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      loopFillGroupWithBlank="true"
      :pagination="{
        type: 'progressbar'
      }"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      }"
      class="swiper-container"
    >
      <swiper-slide
        v-for="(item, i) in state.banner"
        :key="i"
        style="background-color: #f6f7fd"
      >
        <img
          v-lazy-load="item.url"
          style="width: 100%; height: 100%; object-fit: cover"
        />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import {
    Navigation,
    Pagination,
    Autoplay,
    EffectCoverflow
  } from 'swiper/modules';
  import pic1 from '@/assets/images/myPhoto/psc1.jpg';
  import pic2 from '@/assets/images/myPhoto/psc2.jpg';
  import pic3 from '@/assets/images/myPhoto/psc3.jpg';
  import pic4 from '@/assets/images/myPhoto/psc4.jpg';
  import pic5 from '@/assets/images/myPhoto/psc5.jpg';
  import pic6 from '@/assets/images/myPhoto/psc6.jpg';
  import pic7 from '@/assets/images/myPhoto/psc7.jpg';

  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  const state = reactive({
    banner: [
      {
        url: pic1
      },
      {
        url: pic2
      },
      {
        url: pic3
      },
      {
        url: pic4
      },
      {
        url: pic5
      },
      {
        url: pic6
      },
      {
        url: pic7
      }
    ]
  });

  const modules = [Autoplay, Pagination, Navigation, EffectCoverflow];
</script>

<style scoped lang="less">
  .swiper-container {
    height: 25rem;
    max-width: 1807px;
    margin: 0 auto;
    :deep(.swiper-pagination-progressbar) {
      top: unset;
      bottom: 0;
    }
    :deep(.swiper-pagination-progressbar-fill) {
      background-color: @prominent-color;
    }
    .swiper-button {
      color: @prominent-color;
    }
  }

  @media screen and (max-width: 768px) {
    .swiper-container {
      height: 8rem;
    }
  }

  @media screen and (min-width: 768px) {
    .swiper-container {
      height: 12rem;
    }
  }

  @media screen and (min-width: 1199px) {
    .swiper-container {
      height: 16rem;
    }
  }

  @media screen and (min-width: 1520px) {
    .swiper-container {
      height: 17rem;
    }
  }
  @media screen and (min-width: 1730px) {
    .swiper-container {
      height: 19rem;
    }
  }
  @media screen and (min-width: 1900px) {
    .swiper-container {
      height: 23rem;
    }
  }
</style>
