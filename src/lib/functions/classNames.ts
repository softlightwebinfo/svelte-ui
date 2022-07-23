type TclassNamesReturnData = {
    children?: (name: string, modifiers: any) => string;
};
type TClassNamesReturn = [string, TclassNamesReturnData];
export const classNames = (parent: string, modifications = {}): TClassNamesReturn => {
    parent = `UI-${parent}`;
    return [
        parent,
        {
            children: (name: string, modifiers = {}) => {
                return `${parent}__${name}`;
            }
        }
    ]
}