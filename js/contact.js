const contactForm = document.querySelector("#contactForm");
const fullName = document.querySelector("#fullNameContact");
const fullNameError = document.querySelector("#fullNameErrorContact");
const email = document.querySelector("#emailContact");
const emailError = document.querySelector("#emailErrorContact");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const usersText = document.querySelector("#usersText");
const usersTextError = document.querySelector("#usersTextError");
const buttonSendMessage = document.querySelector("#contactButton");
const success = document.querySelector(".succesfull-message");
const clickToContactForm = document.querySelector(".contact-span");

contactForm.addEventListener("submit", formValidationContact);


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

function formValidationContact(event) {
    event.preventDefault();
    
    if (checkLength(fullName.value, 1) === true) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (checkLength(subject.value, 1) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (checkEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(usersText.value, 29) === true) {
        usersTextError.style.display = "none";
    } else {
        usersTextError.style.display = "block";
    }

    if (checkLength(fullName.value, 1) && checkLength(subject.value, 1) && checkEmail(email.value) && checkLength(usersText.value, 29)) {
        contactForm.reset();
        success.style.display = "block";
    }   else {
        success.style.display = "none";
    }
}


clickToContactForm.addEventListener("click", openContactForm);

function openContactForm() {
    contactForm.style.display = "block";
}



/*------------------------   Clear Document Function -----------------------------*/

document.addEventListener('mouseup', clear)

function clear() {
    const clickToRemove = document.querySelector("#messageSent");
    if (!clickToRemove.contains(clear.target)) {
        clickToRemove.style.display = "none";
        contactForm.style.display = "none"
    }
};