function login(username , password) {
    if(username === "admin" && password === "P@ssw0rd") {
        alert("Login Success")
    } else { 
        alert("Login Fail")
    }
}

let username = prompt('Enter username')
let password = prompt('Enter password')
