const square = (n) => {
    n ** 2;
  };
  
  console.log(square(7)); // * undefine เพราะ ในปีกกาไม่มีการกำหนด value ที่จะ return

  

  const calcCircleArea = (r) => Math.PI * r ** 2;
  console.log(calcCircleArea(3)); // ** Math.PI * r ** 2 เพราะ การไม่ใส่ปีกกาให้ expression หลัง => คือ การกำหนด output เป็น expression นั้น