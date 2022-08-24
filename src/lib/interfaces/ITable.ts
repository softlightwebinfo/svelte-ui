export interface ITableRow {
	id: number | string;

	[p: string]: any;
}

export interface ITableColumn {
	key: string;
	label: string;
	type?: string;
	options?: any;
	width?: string;
	styleRow?: string;
	styleHead?: string;
	styleHeadBody?: string;
}
