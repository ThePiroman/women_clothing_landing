import './style.css'

export default class HeaderNav {
    constructor(parent, margin, gap) {
        this.parent = parent;
        this.margin = String(margin + '%');
        this.gap = String(gap + '%');
    }

    component() {
        const comp = document.createElement("nav");
        comp.classList.add("nav");

        if (this.margin) {
            comp.style.marginLeft = this.margin;
        }

        if (this.gap) {
            comp.style.gap = this.gap;
        }
        
        return comp;
    }

    render() {
        return this.parent.append(this.component());
    }
}