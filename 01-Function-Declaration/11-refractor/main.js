

function checkAge1(age) {
    if (age > 18) {
      return true;
    }
    return confirm("Did parents allow you?")
}