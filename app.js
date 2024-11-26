// todo: 1-misol

// class Car {
//   constructor(brand) {
//     this.brand = brand;
//   }

//   calculateSpeed(distance, time) {
//     return `${this.brand} tezlik: ${distance / time} km/soat`;
//   }
// }

// const car1 = new Car("Toyota");
// const car2 = new Car("Honda");

// const speed = car1.calculateSpeed.call(car2, 100, 2); 
// alert(speed); 




// todo: 2-misol

// class age {
//   static findYoungest(ages) {
//     return Math.min.apply(null, ages);
//   }
// }

// const ages = [25, 30, 18, 22, 40];
// const youngest = age.findYoungest(ages);
// alert(`Eng kichik yosh: ${youngest}`);




// todo: 3-misol

// class Product {
//   constructor(price) {
//     this.price = price;
//   }
//   applyDiscount(discount) {
//     return this.price - (this.price * discount) / 100;
//   }
// }

// const product = new Product(200);
// const tenPercentDiscount = product.applyDiscount.bind(product, 10);
// alert(tenPercentDiscount()); 



// todo: 4-misol

// class Person {
//   constructor(name, role) {
//     this.name = name;
//     this.role = role;
//   }
//   greet(greeting) {
//     return `${greeting}, men ${this.name}, ${this.role}!`;
//   }
// }

// let userName = prompt('Please enter your username');
// let userRole = prompt('Please enter your role');
// const person1 = new Person(userName, userRole);
// const person2 = new Person('Abdulloh', 'Developer');
// const greetUser = person1.greet.call(person2, "Salom");
// alert(greetUser);