export interface IMenuItem {
    isHeader?: boolean;
	label?: string;
	icon?: string;
	items?: IMenuItem[];
	command?: (event: any) => void;
	href?: string;
	expanded?: boolean;
	disabled?: boolean;
	separator?: boolean;
	style?: string;
	class?: string;
	active?: boolean;
	open?: boolean;
}
