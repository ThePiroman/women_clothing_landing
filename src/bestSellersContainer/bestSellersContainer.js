import './style.css'

export default class bestSellersContainer {
    constructor(parent) {
        this.parent = parent;
    }

    component() {
        const comp = document.createElement('div');
        comp.classList.add('div');
        comp.className = 'bestSellersContainer';
        return comp;
    }

    render() {
        return this.parent.append(this.component());
    }
}