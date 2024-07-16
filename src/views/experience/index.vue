<template>
    <section class="experience-box">
        <div class="item-box experience">
            <h1 class="title">工作经历</h1>
            <ExperienceItem v-for="(item, index) in experienceList" :key="item.id" :num="index + 1" :experience-data="item"></ExperienceItem>
        </div>
        <div class="item-box skills">
            <h1 class="title">专业技能</h1>
            <SkillItem v-for="item in skillList" :key="item.name" :skill-data="item"></SkillItem>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ExperienceVo } from '@/commonTypes/commonTypes'
import type { SkillInfoVo } from '@/commonTypes/skill'
import experienceData from './experience.json'
import skillData from './skill.json'

const experienceList = ref<ExperienceVo[]>(experienceData.reverse())
const skillList = ref<SkillInfoVo[]>(skillData.slice(0, 5))
</script>

<style scoped lang="less">
.experience-box {
    display: flex;
    padding: 80px 20%;
    .item-box {
        width: 50%;
        .title {
            font-size: 22px;
        }
    }
    .experience {
        margin-right: 20px;
       
    }
    .skills {
        margin-left: 20px;
    }
}
</style>
  