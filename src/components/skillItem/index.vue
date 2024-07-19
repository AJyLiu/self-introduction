<template>
  <div ref="targetRef" class="experience-item wow fadeIn">
    <div class="progress-title">
      <h5>{{ skillData.name }}</h5>
      <span>{{ `${skillData.percent}%` }}</span>
    </div>
    <ElProgress
      :stroke-width="10"
      :percentage="percentage"
      :show-text="false"
      :color="'#1C3F39'"
      status="exception"
      class="progress"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import type { SkillInfoVo } from '@/commonTypes/skill';
  import { useIntersectionObserver } from '@vueuse/core';

  const props = defineProps<{
    skillData: SkillInfoVo;
  }>();

  const percentage = ref<string | number>(0);
  const targetRef = ref();

  useIntersectionObserver(
    targetRef,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        percentage.value = props.skillData.percent;
      }
    },
    {
      threshold: 0
    }
  );
</script>

<style scoped lang="less">
  .experience-item {
    margin-top: 30px;
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 7rem;
    .progress-title {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      width: 100%;
      margin-bottom: 17px;
      h5,
      span {
        font-size: 20px;
      }
    }
    .progress {
      width: 100%;
      :deep(.el-progress-bar__outer) {
        border-radius: 0;
      }
      :deep(.el-progress-bar__inner) {
        border-radius: 0;
      }
    }
  }
</style>
