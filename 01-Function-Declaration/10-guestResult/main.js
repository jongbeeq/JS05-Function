function sayHi(age) {
    if (age < 12) alert('Hi kid');
}
console.log(sayHi); // * undefine เนื่องจากไม่มีการกำหนดค่าที่จะ return กลับมาของ console.log
console.log(sayHi(10)); // ** output เป็น undefine เนื่องจากไม่มีการกำหนดค่าที่จะ return กลับมาของ console.log และ console.log ก็พิม undefine เนื่องจาก sayHi(10) ไม่มีการกำหนด return และ alert 'Hi kid'


