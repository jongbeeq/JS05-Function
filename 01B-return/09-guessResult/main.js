// function sayHi(age) {
//     if (age < 12) alert("Hi kid");
//   }
//   console.log(sayHi); // *
//   console.log(sayHi(10)); // **


function sayHi(name) {
if (name) {
    alert("Hi " + name);
    return;
} else {
    return "Who are you";
}
}
console.log(sayHi("John")); // ***
console.log(sayHi()); // ****




// * 
//sayHi(age) {
//  if (age < 12) alert("Hi kid");
//}
// แสดง function เพราะ เป็นการเรียก FN เฉยๆ แต่ไม่ได้ใช้งาน

// ** undefined
// เพราะ ไม่มีการกำหนดค่าที่จะ return ใน FN

//*** undefined
// เพราะ ไม่มีการกำหนดค่าที่จะ return ใน FN

//**** Who are you
// เพราะ FN มีการกำหนดว่าถ้าไม่ใส่ input ให้ return "Who are you"