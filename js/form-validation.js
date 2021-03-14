const formCreateAccount = document.querySelector(".create-account-form");
const fullName = document.querySelector("#full-name");
const userName = document.querySelector("#username");
const userNameError = document.querySelector("#usernameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
const repeatPassword = document.querySelector("#repeat-password");
const repeatPasswordError = document.querySelector("#repeat-passwordError");
const country = document.querySelector("#country");
const countryError = document.querySelector("#countryError");
const city = document.querySelector("#city");
const cityError = document.querySelector("#cityError");
const checkBox = document.querySelector("#checkbox-2");
const button = document.querySelector(".sign-up-button");

formCreateAccount.addEventListener("submit", formValidation);

function checkLength (value, letters) {
    if (value.trim().length > letters) {
        return true;
    } else {
        return false;
    }
}

function checkEmail (email) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailCheck = regEx.test(email);
    return emailCheck
}

function enableButton() {
    if (checkLength(userName.value, 6) && checkLength(password.value, 8) && checkEmail(email.value)) {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}

function formValidation(event) {
    event.preventDefault();

    if (checkLength(userName.value, 6) === true) {
        userNameError.style.display = "none";
    } else {
        userNameError.style.display = "block";
    }

    if (checkLength(password.value, 8) === true) {
        passwordError.style.display = "none";
    } else {
        passwordError.style.display = "block";
    }

    if (checkEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    // if (password === repeatPassword) {
    //     repeatPasswordError.style.display = "block";
    // } else {
    //     repeatPasswordError.style.display = "none";
    // }

    form.reset()

}
