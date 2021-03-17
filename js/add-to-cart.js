/*------------------------   Add to cart counter -----------------------------*/
const putInCartButton = document.querySelector(".buy-now");
const counter = document.querySelector("#counter");

let ClickCounter = 1;


putInCartButton.addEventListener("click", save);
putInCartButton.addEventListener("click", load);


function save() {
    localStorage.setItem("totalCount", ClickCounter);
    
}


function load() {
    ClickCounter += 1;
   let all = localStorage.getItem("totalCount");
   counter.innerHTML = all;
   counter.style.display = "block";

   console.log(all);
}





// putInCartButton.onclick = countItems;
// function countItems() {

//     ClickCounter += 1;
    
//     localStorage.setItem("totalCount", ClickCounter);
    
//     counter.style.display = "block";
    
//     let saved = localStorage.getItem("totalCount");

//     counter.innerHTML = saved;


//     console.log(saved);
//     console.log(ClickCounter);
// }


