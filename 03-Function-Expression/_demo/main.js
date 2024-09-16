console.log('anonymous');

//#1 : Named fn, FN Declaration
// function add () {}



// #2 : Anonymous


// IIFE : Intermediate Invoke Function Expression

// (function (x, y) {
//     console.log(x + y) 
// })(10, 5)


// console.log(x + y) 
//     (function (x, y) {
//         return x + y;
//     })(10, 5)


// let a = (function (x, y) {
//     return x + y;
// })(10, 5)

// console.log(a);



// // #2B

// // VARIABLE = EXPRESSION
// let myVar = 5 * 6 + 7 / 2


// //Assign anonymous FN to varia
// // VARIABLE = FN (FN == EXPRESSION)
// const myFunc = function (x, y) {
//     return x + y;
// };

// console.log(myFunc(5, 10))

// // ASSIGN named FN to variable
// const a = console.log;
// a('hi');


// ## ANONYM (MODERN : ARROW SYNTAX)

let z = function (x) { return x ** 2; };
// A: Shortest
let a = x => x + 2;

let b = (x, y) => x + y;

// B: Bracket
let c = (x,y) => {
    let result = x + y;
    // return result;
}

// console.log(z(3));
console.log(a(5));
// console.log(b(3, 5));
// console.log(c(3, 5));
