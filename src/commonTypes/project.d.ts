export interface ProjectVo {
	id: string;
	workExperienceId: string; // 工作经历Id
	title: string; // 标题
	subTitle: string; // 子标题
	decription: string; // 项目描述
	duty: string | string[]; // 项目职责
	skills: string[]; // 使用技术
	developmentCycle: string; // 项目周期 
	isSecret?: boolean; // 是否保密
	projectHighlights: string | string[], // 项目亮点
	achieved: string | string[] // 取得成就
}