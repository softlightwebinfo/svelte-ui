import type { TThemeColor } from "./TThemeColor";
import type { TSize } from "./TSize";

export interface IButton {
	block?: boolean;
	href?: string;
	label?: string;
	icon?: string;
	theme?: TThemeColor;
	size?: TSize;
}
