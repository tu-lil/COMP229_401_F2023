// The first function will print i after the loop, but the second
// one will throw an error, since i is defined by let.
function iterateVar() {
    for(var i = 0; i < 10; i++) {
        console.log(i);
    }
     console.log(i);
}

function iterateLet() {
    for(let i = 0; i < 10; i++) {
        console.log(i);
    }
    // TODO uncomment below
    // console.log(i);
}

iterateVar();
iterateLet();


// The const keyword forces single assignment.
// So, this code will throw an error as well:
const me = 1;
// TODO uncomment below
// me = 2; //cannot reinitialize
