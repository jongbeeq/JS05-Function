/*
### การเขียนฟังก์ชันมี 2 แบบหลักๆ

1. Function Declaration / Named Function
2. Function Expression / มักจะถูกเขียนในรูปแบบ Anonymous Function

*/

// 1 define
// function sayHi(name, lastName) {
//     console.log(`Hello ${name} ${lastName}`);
// }

// // 2 call
// sayHi('John',"Doe");
// sayHi('Pavit',"Pimchanagul");


// // 3 return value ผลลัพธ์ที่ได้จากการ run function จนเสร็จ
// // add(5,6) == return value, FN Result
// function add(x,y) {
//     //0 s
//     let result = x + y;
//     //5 s
//     return result;
// }

// console.log(11 === add(5,6));


// let r = add(5,6); // reusable result
// console.log(r);
// console.log(r);

// console.log(add(5,6)); // one time use
// console.log(add(5,6)); // one time use



function isEven(n) {
    // if(n % 2 == 0) {
    //     return true;
    // } else {
    //     return false;
    // }
    // if(n % 2 == 0) {
    //     return true;
    // }         
    // return false;
    return n % 2 == 0;
    //return > expression
    //return 6 % 2 === 0 (true)
    //return 5 % 2 === 0 (false)
}

console.log(isEven(5));
console.log(isEven(6));


// Checkpoint
// -Declare : ประกาศเป็น
// -Params : รับ Input
// -Return : เข้าใจเรื่อง Return
// -Call : รับฟังก์ชัน

// ###### FN EXPRESSION


let a =  5 * 2 + 7;
// variable = expression
/*
expression
- single value : 7
- combine expression : 7 + 2
- FN Result : add(7,2)
*/


// let myFunc = add;
let z = console.log;
// FORMAT : variable = FN (FN Expression)
// FN Expression :  การ assign FN ให้กับ variable

// console.log(myFunc(5,2));
z('Hi'); // z = console.log;

// Anonymous FN

// Syntax = FN Expression
// อธิบาย  :  กำลัง assign Anonymous FN ให้กับตัวแปร sayHello
const sayHello = function (name) {
    console.log('Hi' + name);
};


sayHello('Expression')


// 1.function add () {}
// 2A. let add = function () {}
// 2B. let add = () => {}


const minus = (a,b) => {
    return a-b;
};

const minusTwo = (a) => a-2;

const two = 2;

// console.log(minusTwo(5));
// console