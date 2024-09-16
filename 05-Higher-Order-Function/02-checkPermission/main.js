function checkPermission(role,yes,no) {
    if (role === "ADMIN") yes();
    else no();
}

checkPermission(
    "ADMIN",
    function () {alert('ACCESS GRANTED')},
    function () {alert('ACCESS DENIED')},
)