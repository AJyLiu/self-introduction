<template>
    <ElRow :span="24" :gutter="20" class="row-list">
        <ElCol :xs="24" :sm="12" :md="8" :lg="6" :xl="6" v-for="(projectData, index) in projectDataList" :key="projectData.id" class="col-item" @mouseenter="handleMouseenter(index)" @mouseleave="handleMouseleave">
            <div class="project-card">
                <div>
                    <Collection class="card-icon"/>
                    <h3 class="title ellipsis">{{ projectData.title }}</h3>
                    <h5 class="title-desc ellipsis">{{ projectData.subTitle }}</h5>
                    <p class="text ellipsis-multiline">
                        {{ projectData.decription }}
                    </p>
                </div>
                <div class="card-num">
                    <span class="num-border">{{ index < 9 ? `0${index+ 1}` : index + 1 }}</span>
                </div>
                <svg class="card-svg" fill="none" viewBox="0 0 87 8">
                    <path :fill="activeIndex === index ? '#ffffff' : '#1C3F39'" d="M86.354 4.354a.5.5 0 000-.708L83.172.464a.5.5 0 10-.707.708L85.293 4l-2.829 2.828a.5.5 0 10.708.708l3.182-3.182zM0 4.5h86v-1H0v1z"></path>
                </svg>
            </div>
        </ElCol>
    </ElRow>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ProjectVo } from '@/commonTypes'

defineProps<{
    projectDataList: ProjectVo[];
}>();

const activeIndex = ref<number>();
const handleMouseenter = (index: number) => {
    activeIndex.value = index
}
const handleMouseleave = () => {
    activeIndex.value = -1
}
</script>

<style scoped lang="less">
.row-list {
    display: flex;
    justify-content: center;
}
.col-item {
    margin-bottom: 1.3rem;
    height: 22rem;
}
.project-card {
    border-radius: 1.3rem;
    border: 1px solid @borderColor;
    padding: 1.7rem !important;
    position: relative;
    transition: 0.4s;
    background: linear-gradient(#1C3F39 0 0) no-repeat;
    background-size: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    height: 100%;
    .card-icon {
        width: 3rem;
        height: 3rem;
        margin-bottom: 1.3rem;
    }
    .title {
        font-size: 1.4rem;
        color: @titleColor;
        margin-bottom: 0.3rem;
        transition: 0.5s;
    }
    .title-desc {
        color: @descColor;
        font-weight: 100;
        font-size: 0.9rem;
        margin-bottom: 0.6rem;
        transition: 0.5s;
    }
    .text {
        margin-bottom: 1.2rem;
    }
    .card-num {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        background-color: @main-color;
        transition: 0.5s;
        .num-border {
            display: inline-block;
            border: 1px dashed #ffffff;
            border-radius: 50%;
            width: 2.5rem;
            height: 2.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ffffff;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: #fff;
            transition: 0.5s;
        }
    }
    .card-svg {
        position: absolute;
        z-index: 1;
        width: 3rem;
        bottom: 2.8rem;
        left: 3rem;
    }
}

.project-card:hover {
    transition: 0.4s;
    color: #ffffff;
    background-size: 100%;
    .title {
        color: #ffffff;
    }
    .title-desc {
        color: #ffffff8f;
    }
    .card-num {
        background-color: @prominent-color;
        .num-border {
            border: 1px dashed @main-color;
            color: @main-color;
            -webkit-text-stroke-color: @main-color;
        }
    }
    
}
</style>
  