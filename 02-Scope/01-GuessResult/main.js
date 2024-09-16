let name = 'John';
function sayHi() {
  alert('Hi, ' + name);
}
name = 'Pete';
sayHi(); // * 

// Hi Pete 
//เนื่องจากไม่มีการกำหนดค่าให้ name ใน Block function
// และ global ตัวสุดท้ายถูก assign เป็น 'Pete'