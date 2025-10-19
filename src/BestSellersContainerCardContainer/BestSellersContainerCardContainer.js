import './style.css'

export default class BestSellersContainerCardContainer {
    constructor(parent) {
        this.parent = parent;
    }

    component() {
        const comp = document.createElement('div');
        comp.classList.add('div');
        comp.className = 'bestSellersContainerCardContainer';
        return comp;
    }

    render() {
        return this.parent.append(this.component());
    }
}