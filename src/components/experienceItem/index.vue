<template>
  <div class="experience-item wow fadeInUp">
    <div class="number-box">{{ num < 10 ? `0${num}` : num }}</div>
    <div class="text-box">
      <h4 class="title ellipsis">{{ experienceData.title }}</h4>
      <p class="desc">
        {{ `${experienceData.startTime} ~ ${experienceData.endTime}` }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { ExperienceVo } from '@/commonTypes/commonTypes';

  defineProps<{
    num: number;
    experienceData: ExperienceVo;
  }>();
</script>

<style scoped lang="less">
  .experience-item {
    margin-top: 1.8rem;
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
    padding: 0 1.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 7rem;
    .number-box {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background-color: @main-color;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      font-size: 1.1rem;
      transition: all 0.5s;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #fff;
    }
    .text-box {
      width: calc(100% - 13rem);
      .title {
        font-size: 1rem;
        margin-bottom: 0.8rem;
      }
    }
  }
  .experience-item:hover {
    .number-box {
      background-color: @prominent-color;
      -webkit-text-stroke-color: black;
    }
  }

  @media screen and (max-width: 1199px) {
    .text-box {
      width: calc(100% - 50px);
    }
  }
</style>
