class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email
  }

  printInfo() {
    console.log(`name: ${this.name} age: ${this.age}, email: ${this.email}`);
  }
}

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  

  printProduct(name, price) {
    console.log(`${this.name} price: ${this.price}`);
  }
}

class Order{
  constructor(user, product, quantuty) {
    this.user = user;
    this.product = product;
    this.quantuty = quantuty;
  }

  printOrderSummary(user, product, quantity) {
  console.log(`${this.user.name} ${this.product.name} : ${this.product.price * this.quantuty}`);
  }
}

const newUser = new User('gildong', 20, 'gildong@gmail.com');
newUser.printInfo();
// name: gildong age: 20, email: gildong@gmail.com

const newProduct = new Product('banana', 1000);
newProduct.printProduct();
// banana price: 1000

const newOrder = new Order(newUser, newProduct, 5);
newOrder.printOrderSummary();
// gildong banana : 5000


