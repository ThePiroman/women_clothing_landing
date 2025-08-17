import './style.css'

export default class MainContainerButton {
    constructor(parent) {
        this.parent = parent;
    }

    component() {
        const comp = document.createElement("button");
        comp.classList.add("button");
        comp.textContent = 'New In'

        return comp;
    }

    render() {
        return this.parent.append(this.component());
    }
}