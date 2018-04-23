export class Itens {
    description: string;
    itens: Array<Itens>;
    files: Array<any>;
    expanded: boolean;
    checked: boolean;
    constructor(description, itens, subitens) {
        this.description = description;
        this.files = subitens;
        this.itens = itens;
        this.expanded = false;
        this.checked = false;
    }
    toggle() {
        this.expanded = !this.expanded;
    }
    check() {
        let newState = !this.checked;
        this.checked = newState;
        this.checkRecursive(newState);
    }
    checkRecursive(state) {
        this.itens.forEach(d => {
            d.checked = state;
            d.checkRecursive(state);
        })
        this.files.forEach(d => {
            d.checked = state;
            d.checkRecursive(state);
        })
    }
}
