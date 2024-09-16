let factorial = n => {
    let multiply = 1

    for (let i = 1; i <= n; i++) {

        multiply = multiply * i;
        console.log(multiply);
    }

    console.log("n!" + multiply);
};

factorial(5);