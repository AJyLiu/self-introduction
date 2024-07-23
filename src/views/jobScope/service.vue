<template>
  <div class="service-card wow" :class="cardAnimation">
    <component :is="serviceData.icon" class="card-icon"></component>
    <h2 class="title">{{ serviceData.title }}</h2>
    <p class="desc ellipsis-multiline">{{ serviceData.desc }}</p>
  </div>
</template>

<script setup lang="ts">
  import type { ServiceVo } from '@/commonTypes';

  defineProps<{
    cardAnimation?: string;
    serviceData: ServiceVo;
  }>();
</script>

<style scoped lang="less">
  .service-card {
    width: 19rem;
    border-radius: 0.5rem;
    text-align: center;
    padding: 2rem;
    background-color: #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    .card-icon {
      width: 2.5rem;
      height: 2.5rem;
      margin-bottom: 1rem;
      color: @prominent-color;
    }
    .title {
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }
    .desc {
      font-size: 0.8rem;
    }
  }
  .service-card:hover {
    background-color: @main-color;
    color: #ffffff;
    .card-icon {
      color: #ffffff;
    }
    .desc {
      color: #ffffff8f;
    }
  }
</style>
