import type { IItem } from "../IItem";

export interface IBreadCrumb {
	items: IItem[];
	home?: IItem;
	isDefault?: boolean;
}
