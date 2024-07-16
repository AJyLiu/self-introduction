<template>
    <div class="experience-item">
        <div class="number-box">{{ num < 10 ? `0${num}` : num }}</div>
        <div class="text-box">
            <h4 class="title ellipsis">{{ experienceData.title }}</h4>
            <p class="desc">{{ `${experienceData.startTime} ~ ${experienceData.endTime}` }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ExperienceVo } from '@/commonTypes/commonTypes'

defineProps<{
    num: number;
    experienceData: ExperienceVo;
}>();

</script>

<style scoped lang="less">

.experience-item {
    margin-top: 30px;
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
    padding: 30px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .number-box {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: @main-color;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        font-size: 20px;
        transition: all 0.5s;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #fff;
        font-weight: 700;
    }
    .text-box {
        width: calc(100% - 150px);
        .title {
            font-size: 18px;
            margin-bottom: 10px;
        }
    }
}
.experience-item:hover {
    .number-box {
        background-color: @prominent-color;
        -webkit-text-stroke-color: black;
    }
}
</style>
  