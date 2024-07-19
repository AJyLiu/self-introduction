<template>
  <section class="mian-container experience-box">
    <div class="item-box experience">
      <h1 class="title">工作经历</h1>
      <ExperienceItem
        v-for="(item, index) in experienceList"
        :key="item.id"
        :num="index + 1"
        :experience-data="item"
      ></ExperienceItem>
    </div>
    <div class="item-box skills">
      <h1 class="title">专业技能</h1>
      <SkillItem
        v-for="item in skillList"
        :key="item.name"
        :skill-data="item"
      ></SkillItem>
    </div>
  </section>
  <section ref="targetRef" class="mian-container chart-container wow fadeInUp">
    <div id="workChart" style="width: 100%; height: 30rem"></div>
  </section>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import * as echarts from 'echarts';
  import type { SkillInfoVo } from '@/commonTypes/skill';
  import type { EchartsOption } from '@/commonTypes';
  import {
    useGetChartXData,
    useGetExperienceData,
    useGetWorkYears
  } from './configHooks';
  import skillData from './skill.json';
  import { useIntersectionObserver } from '@vueuse/core';

  const targetRef = ref();
  const experienceList = useGetExperienceData();
  const skillList = ref<SkillInfoVo[]>(skillData.slice(0, 5));

  const xAxis = useGetChartXData();
  let seriesData = ref<string[]>([]);
  seriesData = useGetWorkYears();

  const initEchart = () => {
    const chartDom = document.getElementById('workChart');
    const chart = echarts.init(chartDom);
    const options: EchartsOption = {
      title: {
        text: '工作年限'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['最大年限', '最小年限']
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: false, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: xAxis.value
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLabel: {
            formatter: '{value} 年 '
          }
        }
      ],
      series: [
        {
          name: '工作年限',
          type: 'line',
          data: seriesData.value,
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ],
            itemStyle: {
              color: '#C9F31D'
            },
            label: {
              color: '#ffffff'
            }
          },
          markLine: {
            data: [{ type: 'average', name: '平均值' }],
            itemStyle: {
              color: '#C9F31D'
            }
          }
        }
      ]
    };
    chart.setOption(options);
  };

  useIntersectionObserver(
    targetRef,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        initEchart();
      }
    },
    {
      threshold: 0
    }
  );

  onMounted(() => {});
</script>

<style scoped lang="less">
  .experience-box {
    display: flex;
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
  .chart-container {
    padding-top: 0;
  }
</style>
