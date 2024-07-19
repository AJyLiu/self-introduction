<template>
  <div ref="targetRef" class="digital-card wow fadeIn">
    <div class="digital">
      <h1 class="num">{{ num }}</h1>
      <span>{{ cardData.unit }}</span>
    </div>
    <div class="desc">
      {{ cardData.desc }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useIntersectionObserver } from '@vueuse/core';
  import { useNumberAnimationHook } from '@/utils/commonHooks';
  import type { DigitalCardType } from '@/commonTypes/commonTypes';

  const props = defineProps<{
    cardData: DigitalCardType;
  }>();

  const targetRef = ref();
  const num = ref<string>('0');

  useIntersectionObserver(
    targetRef,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        useNumberAnimationHook({
          from: 0,
          to: props.cardData.num,
          duration: 1500,
          onProgress: (v) => {
            num.value = v.toFixed(props.cardData.fixed);
          }
        });
      }
    },
    {
      threshold: 0
    }
  );
</script>

<style scoped lang="less">
  .digital-card {
    border: 1px solid @prominent-color;
    border-radius: 0.4rem;
    padding: 2rem 2.5rem;
    margin: 0.8rem;
    .digital {
      margin-bottom: 0.6rem;
      color: @titleColor;
      display: flex;
      align-items: baseline;
      .num {
        font-size: 2rem;
        font-weight: 700;
      }
      .unit {
        font-size: 0.8rem;
      }
    }
    .desc {
      color: @descColor;
    }
  }
</style>
