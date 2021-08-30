'use srict'
//Для унификации создан отдельный класс Product (его свойства и методы буду дальше расширять)
//класс корзина позволяет работать с продуктами в корзине, далее также буду расширять


class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}


class Basket {
    constructor(prod, count) {
        this.bask = [];
    }

    add_product(prod, count) {
        for (let i = 0; i < this.bask.length; i++) {
            if (this.bask[i]['Product'] == prod) {
                this.bask[i]['Count'] += count;
                return;
            }
        }
        this.bask.push({ 'Product': prod, 'Count': count });
    }
    countBasketPrice() {
        return this.bask.reduce(function (acc, elem) {
            return acc + elem['Product'].price * elem['Count'];
        }, 0);
    }
}

p1 = new Product('Ноутбук', 40000);
p2 = new Product('Наушники', 700);
p3 = new Product('Телефон', 20000);

console.log(p1, p2, p3);

bask = new Basket();
console.log(bask);
bask.add_product(p1, 1);
bask.add_product(p2, 1);
bask.add_product(p1, 1);
bask.add_product(p3, 1);
console.log(bask);

console.log(bask.countBasketPrice())

