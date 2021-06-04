/*------------------------   Shopping-cart-page -----------------------------*/

const gameInfo = document.querySelector(".payment-top-part");
const priceSum = document.querySelector("#amountSum");
const emptyCart = document.querySelector("#emptyCart");
const btnClear = document.querySelector("#clear-cart");
const removeItem = document.querySelector("#removeItem");
const clickBaitP = document.querySelector(".payment-top-part p")

const cart = JSON.parse(localStorage.getItem("cartAPI"));

let sum = 0;

function callGameInfo(){
    for (let i = 0; i < cart.length; i++) {

        console.log(cart[i]);
        let totalPrice = parseFloat(cart[i].prices.price);
        
        if (!isNaN(totalPrice)) {
            sum += totalPrice;
        }


        btnClear.style.display = "block";
        clickBaitP.style.display = "block";
        emptyCart.style.display = "none";
        gameInfo.innerHTML += `<div class="shopping-checkout-container">
                                <h1 class="shopping-checkout-h1">${cart[i].name}</h1>
                                <img class="shopping-checkout-img" src="${cart[i].images[0].src}">
                                <h4 class="shopping-checkout-h4">${cart[i].prices.price} ${cart[i].prices.currency_code}</h4>
                                <i class="far fa-times-circle" id="removeItem">
                                </div>`;
        priceSum.innerHTML = ` ${sum}kr`;
        
        
    }
}
callGameInfo()



function removeItems() {
    let xBtn = document.querySelectorAll(".shopping-checkout-container i")
    let gamesInCart = localStorage.getItem("cart");

    gamesInCart = JSON.parse(gamesInCart);

    for (let i = 0; i < xBtn.length; i++) {
        
        xBtn[i].addEventListener("click", delItem)
        
        function delItem() {

            let gameId = xBtn[i].parentElement;
            
            delete gamesInCart[gameId];
            localStorage.setItem("cart", JSON.stringify(gamesInCart));
        }
    }
}

removeItems()
      





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
        clearAll();
    }   else {
        success.style.display = "none";
    }


}




/*------------------------   Clear Cart Function -----------------------------*/
const clearCartButton = document.querySelector("#clear-cart");

clearCartButton.addEventListener("mousedown", clearAll);

function clearAll() {
    localStorage.removeItem("cartAPI");
    counter.innerHTML = 0;
    gameInfo.innerHTML = `<h2 id="emptyCart">Your shopping cart is empty</h2>`;
    priceSum.innerHTML = ` <span id="amountSum">0kr</span>` 
}



/*------------------------   Clear Document Function -----------------------------*/

document.addEventListener('mouseup', clear)

function clear() {
    const clickToRemove = document.querySelector("#paymentSuccess");
    if (!clickToRemove.contains(clear.target)) {
        clickToRemove.style.display = 'none';
    }
};



