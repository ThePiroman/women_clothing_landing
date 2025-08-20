import './style.css'

export default class BestSellersContainerCard {
    constructor(parent, image, title, desc, price, color1, color2, color3) {
        this.parent = parent;
        this.image = image;
        this.title = title;
        this.desc = desc;
        this.price = price;
        this.color1 = color1;
        this.color2 = color2;
        this.color3 = color3;
    }

    component() {
        const comp = document.createElement("div");
        comp.className = "bestSellersContainerCard";

        const img = document.createElement('img');
        img.src = this.image;

        const titleText = document.createElement('p');
        titleText.className = 'bestSellersContainerCardTitle';
        titleText.textContent = this.title;

        const descText = document.createElement('p');
        descText.className = 'bestSellersContainerCardDesc';
        descText.textContent = this.desc;

        const priceText = document.createElement('p');
        priceText.className = 'bestSellersContainerCardPrice';
        priceText.textContent = '$' + this.price;

        const circle1 = document.createElement('div');
        circle1.className = 'bestSellersContainerCardCircle';
        circle1.style.backgroundColor = this.color1;

        const circle2 = document.createElement('div');
        circle2.className = 'bestSellersContainerCardCircle';
        circle2.style.backgroundColor = this.color2;
        circle2.style.marginLeft = "2.5%";

        const circle3 = document.createElement('div');
        circle3.className = 'bestSellersContainerCardCircle';
        circle3.style.backgroundColor = this.color3;
        circle3.style.marginLeft = "2.5%";


        comp.appendChild(img);
        comp.appendChild(titleText);
        comp.appendChild(descText);
        comp.appendChild(priceText);
        comp.appendChild(circle1);
        comp.appendChild(circle2);
        comp.appendChild(circle3);

        return comp;
    }

    render() {
        return this.parent.append(this.component());
    }
}