"use strict";
function validateUser(user) {
    const userInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const userValue = userInput === null || userInput === void 0 ? void 0 : userInput.value;
    const emailValue = emailInput === null || emailInput === void 0 ? void 0 : emailInput.value;
    const regEx = /^[a-zA-Z0-9.]+@+[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/;
    if (userValue.length == 0 || emailValue.length === 0) {
        alert("Username or password cannot be empty");
        return false;
    }
    else if (userValue.length < 5) {
        alert("Username must be at least 5 characters long");
        return false;
    }
    else if (!regEx.test(emailValue)) {
        alert("Please enter a valid email");
        return false;
    }
    else {
        if (user.username === userValue && user.email === emailValue) {
            alert("Login successful");
        }
        else {
            alert("Invalid username or password");
            return false;
        }
    }
    return true;
}
const user = {
    username: 'farid',
    email: 'farid@one.az'
};
const button = document.getElementById('btn');
button === null || button === void 0 ? void 0 : button.addEventListener('click', (e) => {
    e.preventDefault();
    validateUser(user);
});
