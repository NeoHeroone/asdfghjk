// function Car(brand, model) {
//   this.brand = brand;
//   this.model = model;
//   this.start = function () {
//     console.log(`${this.brand} ${this.model} ishga tushdi!`);
//   };
//   this.start2 = function () {
//     this.brand2 = "What"
//     this.model2 = "What"
//     console.log(`${this.brand2} ${this.model2} ishga tushdi!`);
//   };
//   this.start3 = function () {
//     this.brand3 = "Who"
//     this.model3 = "What"
//     console.log(`${this.brand3} ${this.model3} ishga tushdi!`);
//   };
// }

// const myCar = new Car("Honda", "Civic");
// myCar.start();
// myCar.start2();
// myCar.start3();

// function Bus(brand, model) {
//   this.brand = brand;
//   this.model = model;
//   this.start = function () {
//     console.log(`${this.brand} ${this.model} ishga tushdi!`);
//   };
//   this.start2 = function () {
//     this.brand2 = "Which"
//     this.model2 = "Why"
//     console.log(`${this.brand2} ${this.model2} ishga tushdi!`);
//   };
//   this.start3 = function () {
//     this.brand3 = "Wait"
//     this.model3 = "Waauw"
//     console.log(`${this.brand3} ${this.model3} ishga tushdi!`);
//   };
// }

// const myCar2 = new Bus("Man", "3 eshiklik");
// myCar2.start();
// myCar2.start2();
// myCar2.start3();

// function Motik(brand, model) {
//   this.brand = brand;
//   this.model = model;
//   this.start = function () {
//     console.log(`${this.brand} ${this.model} ishga tushdi!`);
//   };
//   this.start2 = function () {
//     this.brand2 = "Waaaaat"
//     this.model2 = "Nima"
//     console.log(`${this.brand2} ${this.model2} ishga tushdi!`);
//   };
//   this.start3 = function () {
//     this.brand3 = "Qaysi"
//     this.model3 = "Kim"
//     console.log(`${this.brand3} ${this.model3} ishga tushdi!`);
//   };
// }

// const myCar3 = new Car("Honda", "Ducatti");
// myCar3.start();
// myCar3.start2();
// myCar3.start3();

// function Bicycle(brand, model) {
//   this.brand = brand;
//   this.model = model;
//   this.start = function () {
//     console.log(`${this.brand} ${this.model} ishga tushdi!`);
//   };
//   this.start2 = function () {
//     this.brand2 = "Nimaga"
//     this.model2 = "Kimga"
//     console.log(`${this.brand2} ${this.model2} ishga tushdi!`);
//   };
//   this.start3 = function () {
//     this.brand3 = "Qanaqasiga"
//     this.model3 = "Shunaqasiga"
//     console.log(`${this.brand3} ${this.model3} ishga tushdi!`);
//   };
// }

// const myCar4 = new Bicycle("Nimadir", "Nimadir");
// myCar4.start();
// myCar4.start2();
// myCar4.start3();

// class

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  displayInfo() {
    return `${this.brand} ${this.model}, ${this.year}-yil`;
  }
}

const car1 = new Car("Toyota", "Supra", 1992);
const car2 = new Car("Honda", "Monalisa", 2002);

console.log(car1.displayInfo());
console.log(car2.displayInfo()); 


// inheritance

class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    console.log(`${this.name} nimadir dedi`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); 
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} nima devossan`);
  }
}

const myDog = new Dog("Rex", "Labrador");
myDog.sound();
myDog.bark();



// polymorfizm

class Animal {
  speak() {
    console.log("Hayvon nimadir qivotti");
  }
}

class Dog extends Animal {
  speak() {
    console.log("It huradimi rostan???");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Mushuk miyovlaydida kaneshna akkilamaydiku");
  }
}

const animals = [new Animal(), new Dog(), new Cat()];
animals.forEach((animal) => animal.speak());

// abstrakshin

class Shape {
  constructor(name) {
    if (this.constructor === Shape) {
      throw new Error("Abstrakt klassdan obyekt yaratib bo'lmaydi.");
    }
    this.name = name;
  }

  getArea() {
    throw new Error("getArea() metodi o'rnatilishi kerak.");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

const circle = new Circle(5);
console.log(`${circle.name} maydoni: ${circle.getArea().toFixed(2)}`);


// inkapsulayshin

class BankAccount {
  #balance; 

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Hisobingizga ${amount} qo'shildi. Hozirgi balans: ${this.#balance}`);
    } else {
      console.log("Miqdor noto'g'ri.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Hisobingizdan ${amount} yechildi. Hozirgi balans: ${this.#balance}`);
    } else {
      console.log("Yetarli mablag' mavjud emas yoki miqdor noto'g'ri.");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(100);
account.deposit(50); 
account.withdraw(30);
console.log(account.getBalance());