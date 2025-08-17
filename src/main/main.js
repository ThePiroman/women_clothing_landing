import './style.css'

export default class Main {
    constructor(parent) {
        this.parent = parent;
    }

    component() {
        const comp = document.createElement("main");
        comp.classList.add("main");
        return comp;
    }

    render() {
        return this.parent.append(this.component());
    }
}