// Default, Rest, and Spread are three new features
// related to functions parameters.

// ============================================================++++++++++++++++++++++++++++++++++

// The DEFAULT feature allows you to set a default value to
// the function parameter:


console.log(' example 1 - default value:')
// TODO uncomment below
function add(x, y = 0) {
    return x;
}
// function add(x, y) {
//     return x + y;
// }
console.log(add(1));
console.log(add(1,2));
// In this example, the value of y will be set to 0 if a value is
// not passed or is set to undefined.

// ============================================================++++++++++++++++++++++++++++++++++

// The REST feature allows you to pass an array as trailing
// arguments as follows:
console.log(' example 2 - REST value:')

// TODO uncomment below
function userFriends(user, ...friends) {
    console.log(user + ' has ' + friends.length + ' friends');
}
// function userFriends(user, friend1, friend2) {
//     let friends = new Array(friend1, friend )
//     console.log(user + ' has ' + friends.length + ' friends');
// }
userFriends('User', 'Bob', 'Alice', 'aaaa', 'dddd');


// ============================================================++++++++++++++++++++++++++++++++++

console.log(' example 3 - SPREAD value:')
// The SPREAD feature turns an array into a call argument:
function userTopFriends(firstFriend, secondFriend, thirdFriends) {
    console.log(firstFriend);
    console.log(secondFriend);
    console.log(thirdFriends);
}
userTopFriends(...['Alice', 'Bob', 'Michelle']);

// ============================================================++++++++++++++++++++++++++++++++++


console.log(' example 4 - the three dot syntax:')
// We can also use the three dot syntax to collect function arguments as an array. 
// When used in a function, these are called rest parameters. 
// Here, we build a function that takes in n number of arguments using the spread operator, and then uses those arguments to print some console messages: 
function directions(...args) { 
   //  let [user, ...friends] =
    let [startwwwwww, ...remaining] = args; 
    let [finish, ...stops] = remaining.reverse(); 


    console.log('remaining: ', remaining)

    console.log(`drive through ${args.length} towns`); 
    console.log(`start in ${startwwwwww}`); 
    console.log(`the destination is ${finish}`); 
    console.log(`stopping ${stops.length} times in between`); 
} 

directions("- 1 Truckee", "Tahoe City", "Sunnyside", "Homewood", " - 5 Tahoma"); 

// ============================================================++++++++++++++++++++++++++++++++++


console.log(' example 5 - SPREAD :')

// SPREAD operator allows us to combine the contents of arrays. 
// For example, if we had two arrays, we could make a third array that combines the two arrays into one: 
const peaks = ["Tallac", "Ralston", "Rose"]; 
const canyons = ["Ward", "Blackwood"]; 
const tahoe = [...peaks, ...canyons]; 
console.log(tahoe);
console.log(tahoe.join(", ")); // Tallac, Ralston, Rose, Ward, Blackwood 

// ============================================================++++++++++++++++++++++++++++++++++


console.log(' example 6 - SPREAD :')


// All of the items from peaks and canyons are pushed into a new array called tahoe.
// The spread operator can also be used to get the remaining items in the array: 
const lakes = ["Donner", "Marlette", "Fallen Leaf", "Cascade"]; 
const [first, ...others] = lakes; 
console.log('first = ', first);
console.log('others = ', others);
console.log(others.join(", ")); // Marlette, Fallen Leaf, Cascade 

const [ddd, second, ...sss] = lakes; 
console.log('ddd = ', ddd, ' second = ', second, ' ...sss = ', sss)


// ============================================================++++++++++++++++++++++++++++++++++

console.log(' example 7 - Destructuring :')

// Destructuring assignment allows you to locally scope fields within an object and to declare which values will be used. 
// Consider the sandwich object:
const sandwich = {
    bread: "dutch crunch",
    meat: "tuna",
    cheese: "swiss",
    toppings: ["lettuce", "tomato", "mustard"]
};
// It has four keys, but we only want to use the values of two. 
// We can scope bread and meat to be used locally:
const { bread, meat } = sandwich;
console.log(bread, meat); // dutch crunch tuna