// Classes are easy-to-use patterns that support
//  instance members
//  static members
//  constructors
//  super calls

class Vehicle {
    // static members
    static staticProperty = 'someValue';
    static staticMethod() {
      return 'static method has been called.';
    }

    // constructors
    constructor(wheels) {

        // instance members
        this.wheels = wheels;
    }

    toString() {
        return "(" + this.wheels + ")";
    }
}


class Car extends Vehicle {

    // constructors
    constructor(color) {

        // super calls
        super(4);

        // instance members
        this.color = color;
    }
    
    toString() {

        // super calls
        return super.toString() + " colored: " + this.color;
    }
}


let car = new Car("blue");
car.toString();
console.log(car instanceof Car);
console.log(car instanceof Vehicle);
console.log('car: ', car);
console.log('staticProperty: ', Car.staticProperty);
console.log('staticMethod(): ', Car.staticMethod());
