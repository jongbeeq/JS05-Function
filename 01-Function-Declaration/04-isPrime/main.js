function isPrime(num) {

    let canDivide = true

    for (let divider = 2; divider < num; divider++) {
        if (num % divider === 0) {
            canDivide = false
            break;
        }
    }
    if (canDivide) {
        console.log(`${num} is Prime`)
    } else {
        console.log(`${num} is not Prime`)
    }
}

// DESIGN FN
// 1-INPUT ? => number ที่ใช้เช็ค
// 2-LOGIC IMPLEMENT ?
// 3-OUTPUT ? => boolean true,false
// number => boolean


// ABSTRACTION
// - simple ideas => one idea
// - hiding complexity
// - simple interaction