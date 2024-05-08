var a = 10; // declare in main function scope (global variable)
let b = 20; // declare in main function scope (global variable)

function print() {
    var x = 10; // declare in function scope (local variable)
    let y = 20; // declare in function scope (local variable)

    console.log('Value of x within function scope: ', x);
    console.log('Value of y within function scope: ', y); 
    console.log('Value of a within function scope: ', a);   
    console.log('Value of b within function scope: ', b);
    console.log('Value of i within function scope: ', i); // Hoisitng happen here, but the vaule show undefined
    console.log('Value of j within function scope: ', j); // produce error, let not allow hoisting

    if (true) {
        var i = 'hello from i';
        let j = 'hello from j';
        console.log('Value of x access from another block scope: ', x);
        console.log('Value of y access from another block scope: ', y); 
        console.log('Value of a access from another block scope: ', a);   
        console.log('Value of b access from another block scope: ', b);
        console.log('Value of i within block scope: ', i);
        console.log('Value of j within block scope: ', j);
    }
}
print();

console.log("Value of x access from main function scope:", x); // print error
console.log("Value of y access from main function scope:", y); // print error

