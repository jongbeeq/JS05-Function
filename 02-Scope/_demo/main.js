// {
    // GLOBAL - SCOPE
    // let message = 'hi';

    // function sayHi() {
    //     // FUNCTION SCOPE
    //     // let message = 'Hello';
    //     console.log(`## ${message}`);
    // }

    // sayHi();
    // console.log(message);   



// }

// variable : message = identifier
// let message = 'h';
// // let message = 'a';

// const NUM = 5;
// // const NUM = 5;

// var myVar = 5;
// var myVar = 10; // var ไม่มี Rule of identity ไม่ควรใช้

// // function : sayHi == identifier
// function sayHi(m) {
//     let message = 'a';
//     console.log(m);
// }


// for(var i = 0; i < 10; i++) {
//     console.log(i);
// }

// console.log(i + 100);

// let message ='global';

// {
//     // let message = "local";
//     console.log(message);
// }

// console.log(message);


let message = 'GB:Welcome';
function sayHi(user) {
    // Function Scope
    // let message = 'welcome';
    if(user == "admin") {
        // Block IF
        // let message = 'WELCOME'
        console.log(message + 'admin');
    } else {
        // Bloc Else
        console.log(message + 'guest');
    }

}

sayHi('admin');



