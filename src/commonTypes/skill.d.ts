export type SkillStatus =
  | 'proficiency'
  | 'skilled'
  | 'familiarize'
  | 'understand';

export type SkillInfoVo = {
  name: string;
  status: SkillStatus | string | null;
  percent: number | string;
  textSize: number;
  detail: string;
  data: string | null;
  category: string;
};
