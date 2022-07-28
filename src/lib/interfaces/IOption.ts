export interface IOption {
    label?: string;
    name?: string;
    value?: string | number;
    icon?: string;
    disabled?: boolean;
}

export interface IOptions extends IOption {
    items: IOptions[];
}