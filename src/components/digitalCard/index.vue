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
    border-radius: 8px;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    padding: 0 40px;
    margin: 0 20px;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
    .digital {
      margin-bottom: 20px;
      color: @titleColor;
      display: flex;
      align-items: baseline;
      .num {
        font-size: 28px;
        font-weight: 700;
      }
      .unit {
        font-size: 12px;
      }
    }
    .desc {
      color: @descColor;
    }
  }
</style>
