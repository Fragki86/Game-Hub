/*------------------------   Add to cart counter -----------------------------*/
const putInCartButton = document.querySelector(".buy-now");
const counter = document.querySelector("#counter");

let ClickCounter = 0;


putInCartButton.onclick = function() {
    
    
    ClickCounter += 1;
    window.localStorage.setItem("totalCount", ClickCounter);
    let saved = localStorage.getItem("totalCount");
        
    counter.innerHTML = saved;
    counter.style.display = "block";
    
    console.log(saved);
    console.log(ClickCounter);

}