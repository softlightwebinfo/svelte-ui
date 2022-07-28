export function typeAction(node: any, type: string) {
    node.type = type;

    return {
        update(type) {
            node.type = type;
            node.focus();
        }
    }
}