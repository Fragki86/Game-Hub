const detailsContainer = document.querySelector(".game-details-container")
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

const gameDetails = "https://georgiosf.no/game-hub-api/wp-json/wc/store/products/" + id;


async function getGameDetails() {
    try {
        const response = await fetch(gameDetails);
        const detailedInfo = await response.json();

        detailsContainer.innerHTML = "";

        newDetails(detailedInfo);

    } catch(error) {
        console.log("Error");
    }
}




function newDetails(detailedInfo) {
    detailsContainer.innerHTML +=
    `<div class="grid">
        <h1 class="h1-title">${detailedInfo.name}</h1>
        <img class="img-buy-2" src="${detailedInfo.images[0].src}">
        <h2 class="h2-platform-select">Available Platforms</h2>
        <div class="checkbox">
            <label for="PC" class="pc"><input type="checkbox" name="PC" value="PC" id="PC"/>PC</label>
            <label for="Playstation" class="playstation"><input type="checkbox" name="Playstation" value="Playstation" id="Playstation" />Playstation</label>
            <label for="Xbox" class="xbox"><input type="checkbox" name="Xbox" value="Xbox" id="Xbox" />Xbox</label>
        </div>
        <h2 class="h2-description">Description</h2>
        <div class="p-description">${detailedInfo.description}</div>
        <h3 class="h3-on-sale-by"><u><strong>On Sale by:</strong></u> Georgios Fragkias</h3>
        <label for="buy-now">
            <button class="buy-now" aria-label="link to checkout">Put in cart</button>
        </label>
        <h2 class="h2-price">${detailedInfo.prices.currency_code} ${detailedInfo.prices.price},00</h2>
    </div>`
}

getGameDetails().then(() => {
    const putInCartButton = document.querySelector(".buy-now");
    const counter = document.querySelector("#counter");
  
    const cartAPI = JSON.parse(localStorage.getItem("cartAPI")) || [];
  
    counter.innerHTML = cartAPI.length;
    counter.style.display = "block";
  
  
    putInCartButton.addEventListener("click", countItems);
  
  
    function countItems() {  
      cartAPI.push("detailedInfo");
      localStorage.setItem("cartAPI", JSON.stringify(cartAPI));
      
      counter.style.display = "block";
      counter.innerHTML = cartAPI.length;
  
      putInCartButton.disabled = true;
      putInCartButton.textContent = "Already in cart";
      putInCartButton.style.background = "linear-gradient(45deg, #34433A, #269252)";
      putInCartButton.style.boxShadow = "0px 0px 5px inset black";
    }
  });