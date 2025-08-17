import './style.css'

export default class HeaderLogo {
    constructor(parent, icon) {
        this.parent = parent;
        this.icon = icon
    }

    component() {
        const comp = document.createElement("img");
        comp.classList.add("img");
        comp.className = 'headerLogo'
        comp.src = this.icon;
        comp.alt = 'logo';
        return comp;
    }

    render() {
        return this.parent.append(this.component());
    }
}