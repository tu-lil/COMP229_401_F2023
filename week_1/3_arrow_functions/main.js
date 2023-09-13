// arrows are also very helpful because they share
// the same lexical this as their scope.

// Arrow functions are mainly used in two forms.
let numbers = [1, 2, 3, 4, 5, 6];
// One is using an expression body:
const squares = numbers.map(n => n * n);
console.log('numbers 1: ', numbers);


let evens = [];
// Another form is using a statement body:
numbers.forEach(n => {
    if (n % 2 === 0) {
        evens.push(n);
    }
});
console.log('numbers 2: ', numbers);
console.log('evens: ', evens);


// An example of using the shared lexical this would be:
const author = {
    fullName: "Bob Alice",
    books: [],
    printBooks() {
        this.books.forEach(book => console.log(book + ' by ' +
        this.fullName));
    }
};
// If used as a regular function, this would be the book object
// and not the author.
