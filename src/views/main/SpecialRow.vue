<template>
  <section class="layout-bg">
    <div class="mian-container special-row">
      <ElRow :span="24">
        <ElCol
          :xs="24"
          :sm="12"
          :md="12"
          :lg="6"
          :xl="6"
          v-for="item in rowDataList"
          :key="item.id"
        >
          <DigitalCard :card-data="item"></DigitalCard>
        </ElCol>
      </ElRow>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  const rowDataList = ref([
    {
      id: '1',
      num: 12,
      unit: '个',
      desc: '完成项目',
      fixed: 0
    },
    {
      id: '2',
      num: 94.35,
      unit: '%',
      desc: '满意度',
      fixed: 2
    },
    {
      id: '3',
      num: 5,
      unit: '个',
      desc: '待过的公司',
      fixed: 0
    },
    {
      id: '4',
      num: 7.9,
      unit: '年',
      desc: '工作年限',
      fixed: 1
    }
  ]);
</script>

<style scoped lang="less">
  .special-row {
    margin-top: 5rem;
    width: 100%;
  }
</style>
