// /*------------------------   Add to cart counter -----------------------------*/
const putInCartButton = document.querySelector(".buy-now");
const counter = document.querySelector("#counter");

const cartAPI = JSON.parse(localStorage.getItem("cartAPI")) || [];

counter.innerHTML = cartAPI.length;
counter.style.display = "block";


putInCartButton.addEventListener("click", countItems);

function countItems() {  
    
    cartAPI.push(allProducts[i].id);
    localStorage.setItem("cartAPI", JSON.stringify(cart));
    
    counter.style.display = "block";
    counter.innerHTML = cart.length;

    putInCartButton.disabled = true;
    putInCartButton.textContent = "Already in cart";
    putInCartButton.style.background = "linear-gradient(45deg, #34433A, #269252)";
    putInCartButton.style.boxShadow = "0px 0px 5px inset black";
}



