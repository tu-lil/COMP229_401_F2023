// import – to make the module available to use
import { halfOf, multiply } from './lib.js';
import doSomething from './doSomething.js';
import { flag, touch } from './validator.js';

window.onload = function () {

    // example 1
    let resultOfHalf = halfOf(84);
    console.log(resultOfHalf);
    let demoOfHalf = document.getElementById("demo_half");
    demoOfHalf.textContent = `result of calculation: ${ resultOfHalf }`;

    // example 2
    let resultOfMultiply = multiply(21, 2);
    let demoOfMultiply = document.getElementById("demo_multiply");
    demoOfMultiply.textContent = `result of calculation: ${ resultOfMultiply }`;

    // example 3
    doSomething();

    // example 4
    console.log(flag);
    touch();
    console.log(flag);
}