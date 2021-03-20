/*------------------------   Add to cart counter Mobile-----------------------------*/
const counterMobile = document.querySelector("#counter2")

const cartMobile = JSON.parse(localStorage.getItem("cart")) || [];

counterMobile.innerHTML = cart.length;
counterMobile.style.display = "block";



// putInCartButton.onclick = countItems;
// function countItems() {  
    
//     cart.push(allGames[0]);
//     localStorage.setItem("cart", JSON.stringify(cart));
    
    
//     counter.style.display = "block";
//     counter.innerHTML = cart.length;
// }


