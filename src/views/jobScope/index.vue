<template>
<section class="layout-bg">
    <div class="mian-container job-scope">
        <div class="header-box wow fadeInUp">
            <h1>服务</h1>
            <h5>打撒啊啊啊啊啊啊啊啊啊啊啊啊啊啊第三方的点点滴滴滴答滴答哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒</h5>
        </div>
        <div class="service-list">
            <Service v-for="(item, index) in sreviceList" :key="item.id" :service-data="item" :card-animation="handleAnimation(index)"></Service>
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
    return animations[index] || ''
}
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
            margin-top: 2rem;
        }
    }
    .service-list {
        margin-top: 3rem;
        display: flex;
        justify-content: space-between;
    }
}
</style>
  