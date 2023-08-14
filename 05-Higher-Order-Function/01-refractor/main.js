function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    'Do you agree?',// Param1
    function () {alert('I’m agree with you ?');}, // Param2
    function () {alert('whyyyyyyy !');} // Param3
);