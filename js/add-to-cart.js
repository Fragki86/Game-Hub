const putInCartButton = document.querySelector(".buy-now");
const counter = document.querySelector("#counter");


// putInCartButton.addEventListener("click", countClicks);


let ClickCounter = 0;

putInCartButton.onclick = function() {
    ClickCounter += 1;
    console.log(ClickCounter);
    counter.innerHTML = ClickCounter;
    counter.style.display = "block";
}