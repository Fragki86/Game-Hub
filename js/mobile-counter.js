/*------------------------   Add to cart counter -----------------------------*/
const putInCartButton = document.querySelector(".buy-now");
const counter = document.querySelector("#counter");
const counterMobile = document.querySelector("#counter2")

const cart = JSON.parse(localStorage.getItem("cart")) || [];

// counter.innerHTML = cart.length;
counterMobile.innerHTML = cart.length;
counterMobile.style.display = "block";



putInCartButton.onclick = countItems;
function countItems() {  
    
    cart.push(allGames[0]);
    localStorage.setItem("cart", JSON.stringify(cart));
    
    
    counter.style.display = "block";
    counter.innerHTML = cart.length;
}


