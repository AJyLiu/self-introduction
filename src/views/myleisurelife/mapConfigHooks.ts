import { ref } from 'vue';
import type { Ref } from 'vue';
import { mapPointVo, lineVo } from '@/commonTypes';
import mapPoint from './map.json';

export const getPlanePath = (): Ref<string> => {
  // 飞机svg
  return ref<string>(
    'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z'
  );
};

export const useGetMapPoint = (): Ref<mapPointVo[]> => {
  return ref<mapPointVo[]>(mapPoint);
};

export const usetGetMapLines = (): Ref<lineVo[]> => {
  const fromPoint = mapPoint[0].value;
  const toPoint = mapPoint.slice(1, mapPoint.length);

  const result = toPoint.map((item) => {
    return {
      coords: [fromPoint, item.value]
    };
  });
  return ref<lineVo[]>(result);
};
