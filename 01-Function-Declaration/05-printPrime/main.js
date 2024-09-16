function isPrime(num) {
    let canDivide = true

    for (divider = 2; divider < num; divider++) {
        if (num % divider === 0) {
            canDivide = false
            break;
        }
    }
    if (canDivide) {
        num
    }

    return num
}


function printPrime(limit) {
    let print = ""
    for (let n = 2; n <= limit; n++) {
        print = print + ", " + isPrime(n);
    }
    console.log(print);
}

printPrime(17)
