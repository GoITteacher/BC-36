/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50, count: 10}
 * { name: '🍇', price: 70, count: 10 }
 * { name: '🍋', price: 60, count: 10 }
 * { name: '🍓', price: 110, count: 10 }
 */

const cart = {
  items: [],

  getItems() {
    return this.items;
  },

  add(product) {
    this.items.push(product);
  },

  remove(productName) {
    let index = -1;
    let i = 0;
    for (const item of this.items) {
      if (item.name === productName) {
        index = i;
        break;
      }
      i++;
    }

    /* //let index = -1;
    for (let i = 0; i < this.items.length; i++) {
      if (item.name === productName) {
        index = i;
        break;
      }
    }
 */
    if (index != -1) this.items.splice(index, 1);
  },

  clear() {
    this.items = [];
  },

  getTotalPrice() {
    let sum = 0;
    for (let item of this.items) {
      sum += item.price * item.count;
    }
    return sum;
  },

  increaseQuantity(productName, count = 1) {
    for (const item of this.items) {
      if (item.name === productName) {
        item.count += count;
        break;
      }
    }
  },
  decreaseQuantity(productName, count = 1) {
    for (const item of this.items) {
      if (item.name === productName) {
        if (item.count - count >= 0) item.count -= count;
        break;
      }
    }
  },
};

cart.add({ name: '🍎', price: 50, count: 1 });
cart.add({ name: '🍋', price: 60, count: 1 });
cart.add({ name: '🍋', price: 60, count: 1 });
cart.add({ name: '🍓', price: 110, count: 1 });

console.log(cart.getItems());

cart.remove('123123');

console.log(cart.getItems());
console.log(cart.getTotalPrice());

cart.increaseQuantity('🍎', 5);
cart.decreaseQuantity('🍎', 3);
cart.decreaseQuantity('🍎', 5);
console.log(cart.getItems());
