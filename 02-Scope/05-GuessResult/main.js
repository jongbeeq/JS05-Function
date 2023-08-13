let message = "Welcome to Thailand";

function logMessage(message) {
  message = "Hello everybody";
  console.log(message); // * "Hello everybody" เพราะ ใช้ message ที่ถูก assign ใน scope ของ FN 
}

logMessage(message);
console.log(message); // ** "Welcome to Thailand" เพราะ ใน scope ที่เรียกใช้ assign message = "Welcome to Thailand"





let name = "John";

function sayHi(input) {
  console.log(name); // *** "John" เพราะ ไม่มีการ assign name ใน scope FN จึงใช้ค่าของ scope ที่คลุม FN ไว้อีกที (Global Scope)
  name = input;
}

sayHi();
console.log(name); // **** undefined เพราะหลังจบการทำงาน FN sayHi() ตัวแปร name ถูก assign เป็น ตัวแปร input ซึ่งไม่มีการกำหนดค่าจึงเป็น undefined


