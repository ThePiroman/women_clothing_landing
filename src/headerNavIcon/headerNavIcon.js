import './style.css'

export default class HeaderNavIcon {
    constructor(parent, icon, alt, link) {
        this.parent = parent;
        this.icon = icon;
        this.alt = alt;
        this.link = link;
    }

    component() {
        const comp = document.createElement("img");
        comp.src = this.icon;
        comp.alt = this.alt;

        comp.classList.add("img");
        comp.className = 'headerNavIcon'

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