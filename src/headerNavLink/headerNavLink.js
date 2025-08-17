import './style.css'

export default class HeaderNavLink {
    constructor(parent, text, link) {
        this.parent = parent;
        this.text = text;
        this.link = link;
    }

    component() {
        const comp = document.createElement("p");
        comp.classList.add("p");
        comp.className = 'headerNavLink'

        const aElem = document.createElement("a");
        aElem.classList.add("a");
        aElem.innerHTML = this.text;
        aElem.href = this.link;
        comp.appendChild(aElem);
        return comp;
    }

    render() {
        return this.parent.append(this.component());
    }
}