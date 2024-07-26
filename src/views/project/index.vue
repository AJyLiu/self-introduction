<template>
  <section class="layout">
    <div class="mian-container project">
      <div class="wow fadeInUp">
        <h4 class="project-title">我的项目经验</h4>
        <h3 class="project-title-desc">
          项目经验涉及面广泛，如医疗、金融、企业、可视化大屏、小程序、学习、培训、考试、海外项目等
        </h3>
      </div>

      <div class="project-list wow fadeInUp">
        <ProjectCard :projectDataList="projectList"></ProjectCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import type { ProjectVo } from '@/commonTypes';
  import projectData from './project.json';

  const projectList = ref<ProjectVo[]>(projectData.slice(0, 8));
</script>

<style scoped lang="less">
  .project {
    .project-title {
      display: block;
      text-align: center;
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    .project-title-desc {
      width: 30rem;
      text-align: center;
      margin: 0 auto;
      margin-bottom: 3rem;
      font-size: 1rem;
      font-weight: 100;
    }
  }

  @media screen and (max-width: 1199px) {
    .project {
      .project-title-desc {
        width: 100%;
      }
    }
  }
</style>
