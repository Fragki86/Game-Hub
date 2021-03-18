/*------------------------   Shopping-cart-page -----------------------------*/
// const container = document.querySelector(".payment-top-part");
// const allGames = document.location.search;
// const callGames = new URLSearchParams(allGames);

// callGames.get("title")

// console.log(allGames);
// console.log(callGames);





// const gameInfo = document.querySelector(".payment-top-part");
// gameInfo.innerHTML = "";

// function callGameInfo(){
//     for (let i = 0; i < allGames.length; i++) {

//         const gameTitle = allGames[i].title;
//         const gamePrice = allGames[i].price;
//         const gameImg = allGames[i].image;

//         gameInfo.innerHTML += `<h1 class="h1-title-p">${gameTitle}<h1>
//                                 <img src="${gameImg}">
//                                 <h3 class="h3-price">${gamePrice}</h3>`

//         console.log(gamePrice);   


//     }
// }

// callGameInfo()






/*------------------------   Payment Form Validation -----------------------------*/
const formPayment = document.querySelector(".form-payment");
const nameOnCard = document.querySelector("#name-on-card");
const nameOnCardError = document.querySelector("#name-on-card-error");
const cardNumber = document.querySelector("#card-number");
const cardNumberError = document.querySelector("#card-number-error");
const expirationDate = document.querySelector("#expiration-date");
const expirationDateError = document.querySelector("#expiration-date-error");
const cvv = document.querySelector("#cvv");
const cvvError = document.querySelector("#cvv-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const address = document.querySelector("#address");
const addressError = document.querySelector("#address-error");
const cityTown = document.querySelector("#city-town");
const cityTownError = document.querySelector("#city-town-error");
const poCode = document.querySelector("#po-code");
const poCodeError = document.querySelector("#po-code-error");
const checkOutButton = document.querySelector(".checkout-button");
const success = document.querySelector(".succesfull-message");

formPayment.addEventListener("submit", formValidationPayment);
// formPayment.addEventListener("submit", (evt) => { console.log("aa"); evt.preventDefault(); })


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

function formValidationPayment(event) {
    event.preventDefault();
    
    if (checkLength(nameOnCard.value, 1) === true) {
        nameOnCardError.style.display = "none";
    } else {
        nameOnCardError.style.display = "block";
    }

    if (checkLength(cardNumber.value, 15) === true) {
        cardNumberError.style.display = "none";
    } else {
        cardNumberError.style.display = "block";
    }

    if (checkEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(address.value, 5) === true) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }

    if (checkLength(cityTown.value, 1) === true) {
        cityTownError.style.display = "none";
    } else {
        cityTownError.style.display = "block";
    }

    if (checkLength(poCode.value, 1) === true) {
        poCodeError.style.display = "none";
    } else {
        poCodeError.style.display = "block";
    }

    if (checkLength(nameOnCard.value, 1) && checkLength(cardNumber.value, 15) && checkEmail(email.value) && checkLength(address.value, 5) && checkLength(cityTown.value, 1) && checkLength(poCode.value, 1)) {
        formPayment.reset();
        success.style.display = "block";
    }   else {
        success.style.display = "none";
    }

}


/*------------------------   Payment Form Validation -----------------------------*/
const clearCartButton = document.querySelector("#clear-cart");

clearCartButton.addEventListener("mousedown", clearAll);

function clearAll() {
    localStorage.removeItem("cart");
    counter.innerHTML = 0;
}