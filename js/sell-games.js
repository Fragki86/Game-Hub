const formSellGame = document.querySelector(".sell-game-form");
const gameTitle = document.querySelector("#game-title");
const gameTitleError = document.querySelector("#game-titleError");
const price = document.querySelector("#price");
const priceError = document.querySelector("#priceError");
const date = document.querySelector("#date");
const dateError = document.querySelector("#dateError");
const description = document.querySelector("#description-comments");
const descriptionError = document.querySelector("#description-commentsError");
const file = document.querySelector("#file");
const fileError = document.querySelector("#fileError");
const button = document.querySelector(".put-on-sale-button");
const success = document.querySelector(".succesfull-message");


formSellGame.addEventListener("submit", formValidationSell);


function checkLength (value, letters) {
    if (value.trim().length > letters) {
        return true;
    } else {
        return false;
    }
}



function formValidationSell(event) {
    event.preventDefault();

    if (checkLength(gameTitle.value, 1) === true) {
        gameTitleError.style.display = "none";
    } else {
        gameTitleError.style.display = "block";
    }

    if (checkLength(description.value, 19) === true) {
        descriptionError.style.display = "none";
    } else {
        descriptionError.style.display = "block";
    }

    if (checkLength(gameTitle.value, 1) && checkLength(description.value, 19)) {
        formSellGame.reset();
        success.style.display = "block";
    }   else {
        success.style.display = "none";
    }

}



/*------------------------   Clear Document Function -----------------------------*/

document.addEventListener('mouseup', clear)

function clear() {
    const clickToRemove = document.querySelector("#saleSuccess");
    if (!clickToRemove.contains(clear.target)) {
        clickToRemove.style.display = 'none';
    }
};
