interface User {
    username: string;
    email: string;
}


function validateUser(user: User) : string | boolean {
    const userInput = <HTMLInputElement>document.getElementById('name')
    const emailInput = <HTMLInputElement>document.getElementById('email')
    const userValue = userInput?.value;
    const emailValue = emailInput?.value;
    const regEx = /^[a-zA-Z0-9.]+@+[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/;

    if(userValue.length == 0 || emailValue.length === 0) {
        alert("Username or password cannot be empty")
        return false
    } else if (userValue.length < 5) {
        alert("Username must be at least 5 characters long")
        return false
    } else if (!regEx.test(emailValue)) {
        alert("Please enter a valid email")
        return false
    }else{
        if(user.username === userValue && user.email === emailValue) {
            alert("Login successful")
        }else{
            alert("Invalid username or password")
            return false
        }
    }

    return true
}

const user: User = {
    username: 'farid',
    email: 'farid@one.az'
};

const button = <HTMLButtonElement>document.getElementById('btn');

button?.addEventListener('click', (e) => {
    e.preventDefault()
    validateUser(user)
})