/*------------------------   Show the item counter over the cart button -----------------------------*/
const counter = document.querySelector("#counter");
const cartAPI = JSON.parse(localStorage.getItem("cartAPI")) || []

function showCount() {
    counter.innerHTML = cartAPI.length;
}

showCount()