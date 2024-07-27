import { ref } from 'vue';
import type { Ref } from 'vue';
import type { ExperienceVo } from '@/commonTypes';
import experienceData from './experience.json';
import { getMonthDifference } from '@/utils/commonUitls';

const getExperienceData = (): ExperienceVo[] => {
  return JSON.parse(JSON.stringify(experienceData));
};

export const useGetExperienceData = (): Ref<ExperienceVo[]> => {
  const value = getExperienceData().reverse();
  return ref<ExperienceVo[]>(value);
};

export const useGetChartXData = (): Ref<string[]> => {
  const ySearice = ref<string[]>([]);
  ySearice.value = getExperienceData().map((item) => item.title);
  return ySearice;
};

export const useGetWorkYears = (): string[] => {
  const workYears = ref<string[]>([]);
  workYears.value = getExperienceData().map((item) => {
    return (getMonthDifference(item.startTime, item.endTime) / 12).toFixed(1);
  });
  return workYears.value;
};
