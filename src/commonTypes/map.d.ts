import { AnyRecord } from dns;

export type Point = [number, number];

export type mapPointVo = {
    name: string;
    value: number[];
    itemStyle: AnyRecord;
}

export type lineVo = {
    coords: number[][];
}