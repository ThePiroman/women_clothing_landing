import './style.css'

export default class Header {
    constructor(parent) {
        this.parent = parent;
    }

    component() {
        const comp = document.createElement("header");
        comp.classList.add("header");
        return comp;
    }

    render() {
        return this.parent.append(this.component());
    }
}