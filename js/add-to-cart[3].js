/*------------------------   Add to cart counter -----------------------------*/
const putInCartButton = document.querySelector(".buy-now");
const counter = document.querySelector("#counter");

const cart = JSON.parse(localStorage.getItem("cart")) || [];

counter.innerHTML = cart.length;
counter.style.display = "block";


putInCartButton.addEventListener("click", countItems);

function countItems() {  
    
    cart.push(allGames[3]);
    localStorage.setItem("cart", JSON.stringify(cart));
    
    counter.style.display = "block";
    counter.innerHTML = cart.length;

    putInCartButton.disabled = true;
    putInCartButton.textContent = "Already in cart";
    putInCartButton.style.background = "linear-gradient(45deg, #34433A, #269252)";
    putInCartButton.style.boxShadow = "0px 0px 5px inset black";
}



