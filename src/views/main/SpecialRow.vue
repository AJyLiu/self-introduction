<template>
  <section class="special-row">
    <DigitalCard
      v-for="item in rowDataList"
      :key="item.id"
      :card-data="item"
    ></DigitalCard>
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
      num: 90.0,
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
    display: flex;
    justify-content: space-between;
    height: 140px;
    padding: 110px 20% 50px 20%;
  }
  @media screen and (min-width: 992px) and (max-width: 1320px) {
    .special-row {
        padding: 110px 0 50px 0;
    }
  }
</style>
