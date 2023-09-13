

// ============================================================++++++++++++++++++++++++++++++++++

// Closures are functions that refer to variables from their
// parent environment.
// To understand them better, let's take a look at the
// following example:

// function parent() {
//     const message = 'Hello World';
//     function child() {
//         alert (message);
//     }
//    child();
// }

// parent();

// ============================================================++++++++++++++++++++++++++++++++++

// In the preceding example, you can see how the child()
// function has access to a constant defined in the parent()
// function.
// However, this is a simple example, so let's look at a more
// interesting one:

function parent() {
    const message = 'Hello World';
    function child() {
        alert (message);
    }
    return child;
}

const childFN = parent();
console.log('childFN ', childFN)
childFN();

//  This time, the parent() function returned the child() function, and the child() function is called after the
// parent() function has already been executed.
//  This is counterintuitive to some developers because usually the parent() function's local members should
// only exist while the function is being executed.
//  This is what closures are all about! A closure is not only the function, but also the environment in which the
// function was created.
//  In this case, childFN() is a closure object that consists of the child() function and the environment members that
// existed when the closure was created, including the message constant.

//  Closures are very important in asynchronous programming because JavaScript functions are first-class
// objects that can be passed as arguments to other functions.
//  This means that you can create a callback function and pass it as an argument to an event handler.
//  When the event will be emitted, the function will be invoked, and it will be able to manipulate any member
// that existed when the callback function was created, even if its parent function was already executed.
//  This means that using the closure pattern will help you utilize event-driven programming without the need to pass
// the scope state to the event handler.

// C# - last semester