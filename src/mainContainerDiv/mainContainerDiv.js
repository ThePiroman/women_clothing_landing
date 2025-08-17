import MainContainerButton from '../mainContainerButton/main';
import './style.css'

export default class MainContainerDiv {
    constructor(parent) {
        this.parent = parent;
    }

    component() {
        const comp = document.createElement("div");
        comp.classList.add("div");
        comp.className = "mainContainerDiv"

        const div1 = document.createElement("div");
        div1.classList.add("div");
        div1.className = "mainContainerDivFirst";

        const div2 = document.createElement("div");
        div2.classList.add("div");
        div2.className = "mainContainerDivSecond";

        const text = document.createElement('span');
        text.classList.add('span');
        text.className = "mainContainerText";
        text.textContent = "Elegance In Simplicity, \nEarth's Harmony"


        comp.appendChild(div1);
        comp.appendChild(div2);
        div1.appendChild(text);
        new MainContainerButton(div2).render()

        return comp;
    }

    render() {
        return this.parent.append(this.component());
    }
}