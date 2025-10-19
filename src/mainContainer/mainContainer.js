import './style.css'

export default class MainContainer {
    constructor(parent) {
        this.parent = parent;
    }

    component() {
        const comp = document.createElement("div");
        comp.classList.add("div");
        comp.className = 'mainContainer';

        return comp;
    }

    render() {
        return this.parent.append(this.component());
    }
}