const formCreateAccount = document.querySelector(".create-account-form");
const fullName = document.querySelector("#full-name");
const fullNameError = document.querySelector("#full-nameError");
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
checkBox.addEventListener("click", enableButton);

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
    if (checkBox.checked) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}



function formValidation(event) {
    event.preventDefault();

    if (checkLength(userName.value, 5) === true) {
        userNameError.style.display = "none";
    } else {
        userNameError.style.display = "block";
    }

    if (checkLength(password.value, 7) === true) {
        passwordError.style.display = "none";
    } else {
        passwordError.style.display = "block";
    }

    if (checkEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (password.value === repeatPassword.value) {
        repeatPasswordError.style.display = "none";
    } else {
        repeatPasswordError.style.display = "block";
    }

    if (checkLength(fullName.value, 1) === true) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (checkLength(country.value, 1) === true) {
        countryError.style.display = "none";
    } else {
        countryError.style.display = "block";
    }

    if (checkLength(city.value, 1) === true) {
        cityError.style.display = "none";
    } else {
        cityError.style.display = "block";
    }

    if (checkLength(userName.value, 5) && checkLength(password.value, 7) && checkEmail(email.value) && password.value === repeatPassword.value && checkLength(fullName.value, 1) && checkLength(country.value, 1) && checkLength(city.value, 1)) {
        formCreateAccount.reset();
        button.disabled;
    }

}
