import './style.css'

export default class BestSellersContainerTextDiv {
    constructor(parent) {
        this.parent = parent;
    }

    component() {
        const comp = document.createElement("div");
        comp.classList.add("div");
        comp.className = "bestSellersContainerTextDiv";

        const p1 = document.createElement('p');
        p1.classList.add('p');
        p1.className = 'bestSellersContainerTextHeadText';
        p1.textContent = "Best Sellers"

        const p2 = document.createElement("p");
        p2.classList.add("p");
        p2.className = 'bestSellersContainerTextLink';

        const aElem = document.createElement("a");
        aElem.classList.add("a");
        aElem.innerHTML = 'View All';
        aElem.href = '#';

        comp.appendChild(p1);
        comp.appendChild(p2);
        p2.appendChild(aElem);

        return comp;
    }

    render() {
        return this.parent.append(this.component());
    }
}