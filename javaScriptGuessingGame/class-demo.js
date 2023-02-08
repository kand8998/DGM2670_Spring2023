// // make a class... a type of object; you can declare them and then use them later
// class Car {
//     make = '';
//     model = '';
//     year = 0;

//     startEngine() {
//         return `Vroom! The ${this.make} ${this.model}'s engine is running.`;
//       }
// }

// //declare a new instance of the car so the computer has something to work with
// // assign the variables and call the func
// const myCar = new Car();
// myCar.make = "Toyota";
// myCar.model = "Camry";
// myCar.year = 2020;
// console.log(myCar.startEngine());

// function test_function() {
//     console.log("test");
// }


// class Bird {
//     type = "";
//     age = 0;
//     color = "";
// }

class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    startEngine() {
      return `Vroom! The ${this.make} ${this.model}'s engine is running.`;
    }
  }

const myCar2 = new Car2("Ford", "Camry", 2020);
console.log(myCar2.startEngine);

// Json object
const myObj = {
    things: 1,
    things: 2,
    array: [
        {
            obj1: 1,
            obj2: 2,
        }
    ]
};