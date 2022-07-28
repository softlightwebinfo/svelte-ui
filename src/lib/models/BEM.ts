export class BEM {
    data: any;
    parent: string;
    otherClass: string[] = [];
    constructor(parent: string, data: any = {}) {
        this.parent = parent;
        this.data = data;
    }
    append(className: string) { this.otherClass = [...this.otherClass, className] }
    className(className: string, data: any = {}) {
        return Object.entries(data).reduce((prv, [key, value]) => {
            if (value) {
                return [...prv, key]
            };
            return prv
        }, [className]).join(" ");
    }
    toString() {
        return Object.entries(this.data).reduce((prv, [key, value]) => {
            if (value) {
                return [...prv, key]
            };
            return prv
        }, [this.parent, ...this.otherClass]).join(" ");
    }
}