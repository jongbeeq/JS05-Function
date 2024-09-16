let isPrime = (i) => {
    for (let j = 2; j < i; i++) {
        let prime = true;
        if (i % j == 0) {
            prime = false;
        }
        if (prime) return `${i} is Prime`; 
    }
}