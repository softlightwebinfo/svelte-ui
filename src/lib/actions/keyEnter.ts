export const keyEnter = (node: any, options = {}) => {
    const handler = (e) => {
        if (!['Enter', options.separator].includes(e.key)) return;
        node.dispatchEvent(new CustomEvent("enter"));
    }

    node.addEventListener("keydown", handler, true);
    
    return {
        destroy() {
            node.removeEventListener("keydown", handler)
        },
    };
}