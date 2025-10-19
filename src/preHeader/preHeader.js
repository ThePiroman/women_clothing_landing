import './style.css'

export default class PreHeader {
    constructor(parent) {
        this.parent = parent;
    }

    component() {
        const comp = document.createElement("div");
        comp.classList.add("div");
        comp.className = 'preHeader'

        const ptext = document.createElement('p');
        ptext.classList.add('p');
        ptext.textContent = 'Enjoy Free Shipping On All Orders';
        comp.appendChild(ptext)

        return comp;
    }

    render() {
        return this.parent.append(this.component());
    }
}