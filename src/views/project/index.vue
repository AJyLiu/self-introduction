<template>
    <section class="mian-container project">
        <h4 class="project-title">我的项目经验</h4>
        <h3 class="project-title-desc">有丰富的项目经验且涉及面广泛，如医疗、金融、大屏、小程序、学习考试、培训、环保、外贸、海外项目等</h3>
        <div class="project-list">
            <ProjectCard :projectDataList="projectList"></ProjectCard>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { ProjectVo } from '@/commonTypes'
import projectData from './project.json'

const projectList = ref<ProjectVo[]>(projectData.slice(0, 8))
</script>

<style scoped lang="less">
.project {
    .project-title {
        display: block;
        text-align: center;
        font-size: 1rem;
        margin-bottom: 1rem;
    }
    .project-title-desc {
        width: 800px;
        text-align: center;
        margin: 0 auto;
        margin-bottom: 3rem;
        font-size: 1.5rem;
    }
}

</style>
  