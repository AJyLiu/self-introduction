<template>
  <div id="map" class="map-chart"></div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import * as echarts from 'echarts/core';
  import chinaMap from '@/assets/json/china.json';
  import {
    useGetMapPoint,
    usetGetMapLines,
    getPlanePath
  } from './mapConfigHooks';

  const points = useGetMapPoint();
  const linesData = usetGetMapLines();
  const planePath = getPlanePath();

  const initMap = () => {
    const chartDom = document.getElementById('map');
    const chart = echarts.init(chartDom);

    const options = {
      backgroundColor: '#ffffff',
      geo: {
        map: 'china',
        label: {
          // 地图上文字
          normal: {
            show: false,
            textStyle: {
              color: '#ffffff'
            }
          },
          emphasis: {
            // 鼠标悬浮颜色
            textStyle: {
              color: '#ffffff'
            }
          }
        },
        itemStyle: {
          // 地图样式
          normal: {
            borderColor: '#5089EC',
            borderWidth: 1,
            areaColor: {
              // 地图区域颜色
              type: 'radial', // 径向渐变
              x: 0.5, // 圆心
              y: 0.5, // 圆心
              r: 0.8, // 半径
              colorStops: [
                {
                  // 0%处颜色
                  offset: 0,
                  color: 'rgba(0, 102, 154, 0.9)'
                },
                {
                  // 100%处颜色
                  offset: 1,
                  color: 'rgba(0, 102, 154, 1)'
                }
              ]
            }
          },
          emphasis: {
            areaColor: '#2386AD',
            borderWidth: 0
          }
        }
      },
      series: [
        // 散点数据
        {
          type: 'effectScatter', // 涟漪特效动画散点
          coordinateSystem: 'geo', // 该系列使用的坐标系：地理坐标系
          effectType: 'ripple', // 特性类型：涟漪
          showEffectOn: 'render', // 什么时候显示特效：'render'、'emphasis'
          rippleEffect: {
            // 涟漪特效相关配置
            period: 6, // 动画周期 秒
            scale: 4, // 动画波纹最大缩放比例
            brushType: 'fill' // 波纹绘制方式 'fill', 'stroke'
          },
          zlevel: 1,
          data: points.value
        },
        {
          type: 'lines', // 线条数据
          zlevel: 2,
          symbol: ['none', 'arrow'], // 标记的图形：箭头
          symbolSize: 10,
          lineStyle: {
            normal: {
              color: '#93EBF8',
              width: 2.5,
              opacity: 0.6,
              curveness: 0.2
            }
          },
          effect: {
            // 线条特效的配置
            show: true,
            period: 6, // 特效动画的时间，单位s
            trailLength: 0, // 特效尾迹的长度。取值[0,1]值越大，尾迹越重
            symbol: planePath.value, // 特效图形的标记 可选'circle'等
            color: '#C9F31D',
            symbolSize: 15 // 特效标记的大小
          },
          data: linesData.value
        }
      ]
    };
    echarts.registerMap('china', chinaMap as any);
    chart.setOption(options);
    window.addEventListener('resize', function () {
      chart.resize();
    });
  };

  onMounted(() => {
    initMap();
  });
</script>

<style scoped lang="less">
  .map-chart {
    height: 40rem;
    width: 100%;
    margin: 0 auto;
  }
  @media screen and (max-width: 1199px) {
    .map-chart {
      height: 30rem;
    }
  }
</style>
