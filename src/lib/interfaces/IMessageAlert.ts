import type { TThemeColor } from "./TThemeColor";

export interface IMessageAlert {
	id?: number | string;
	theme?: TThemeColor;
	message?: string;
	isCloseable?: boolean;
	showIcon?: boolean;
	customIcon?: boolean;
	description?: string;
}
