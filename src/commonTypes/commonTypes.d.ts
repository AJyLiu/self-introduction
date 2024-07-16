export type DigitalCardType = {
  id: string;
  num: number;
  unit: string;
  desc: string;
  fixed: number;
};

export interface ExperienceVo {
	id: string;
	title: string;
	position: string;
	startTime: string;
	endTime: string;
	content: string | string[];
}