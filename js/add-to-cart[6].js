/*------------------------   Add to cart counter -----------------------------*/
const putInCartButton = document.querySelector(".buy-now");
const counter = document.querySelector("#counter");

const cart = JSON.parse(localStorage.getItem("cart")) || [];

counter.innerHTML = cart.length;
counter.style.display = "block";



putInCartButton.onclick = countItems;
function countItems() {  
    
    // for (let i = 0; i < allGames.length; i++) {

    //     console.log(allGames[i].id);
    // }

    cart.push(allGames[6]);
    localStorage.setItem("cart", JSON.stringify(cart));
    
    
    counter.style.display = "block";
    counter.innerHTML = cart.length;
}


