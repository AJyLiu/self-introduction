<template>
  <section class="layout-bg">
    <div class="mian-container job-scope">
      <div class="header-box wow fadeInUp">
        <h1>业务</h1>
        <h5>
          主要涉及三大模块开发，web端toC、toB项目，H5页面开发，小程序应用开发
        </h5>
      </div>
      <div class="service-list">
        <Service
          v-for="(item, index) in sreviceList"
          :key="item.id"
          :service-data="item"
          :card-animation="handleAnimation(index)"
        ></Service>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import Service from './service.vue';
  import type { ServiceVo } from '@/commonTypes';
  import ServiceData from './service.json';

  const sreviceList = ref<ServiceVo[]>(ServiceData);

  const handleAnimation = (index: number): string => {
    const animations = ['fadeInLeft', 'fadeInUp', 'fadeInRight'];
    return animations[index] || '';
  };
</script>

<style scoped lang="less">
  .job-scope {
    .header-box {
      width: 30rem;
      text-align: center;
      margin: 0 auto;
      h1 {
        font-size: 2rem;
      }
      h5 {
        font-weight: 100;
        margin-top: 1rem;
      }
    }
    .service-list {
      margin-top: 3rem;
      display: flex;
      justify-content: space-between;
    }
  }
  @media screen and (max-width: 768px) {
    .job-scope {
      .header-box {
        width: 100%;
      }
      .service-list {
        flex-direction: column;
      }
    }
  }
</style>
