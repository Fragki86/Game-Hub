const gameListContainer = document.querySelector(".game-list-container");
const callAPI = "https://georgiosf.no/game-hub-api/wp-json/wc/store/products";
const sortThem = document.querySelector(".sort-games")


/*------------------------   Fetch Api -----------------------------*/
async function getGames() {
    try {
        const response = await fetch(callAPI);
        const games = await response.json();
        createList(games);

        return games;
    } catch(error) {
        console.log("Error");
    }

}

getGames().then((games) => {
    sortThem.addEventListener("change", () => sorting(games))
});


/*------------------------   Create innerHTML -----------------------------*/
function createList(games) {
    gameListContainer.innerHTML= "";

    games.forEach(function(individualGame){
        gameListContainer.innerHTML += 
        `<a href="game-details.html?id=${individualGame.id}"><h3 class="titles-h3">${individualGame.name}</h3></a>
            <div class="buy-page-boxes">
                <div class="game-box">
                <a href="game-details.html?id=${individualGame.id}"><img class="img-buy-1" src="${individualGame.images[0].src}"></a>
                    <div class="price-fav">
                        <h3 class="price-h3">${individualGame.prices.price} ${individualGame.prices.currency_symbol}</h3>
                        <div class="heart-icon">
                            <label for="favorite" class="heart">
                            <i class="far fa-heart" aria-hidden="true"></i>
                            </label>
                            <div class="heart-full">
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="buy-page-boxes-p">${individualGame.description}</div>
            </div>`
    })
}


/*------------------------   Sort items -----------------------------*/
function sorting(games) {
        let sortPrice = document.querySelector(".sort-games").value;

        if (sortPrice === "all-games") {
            createList(games);
        } else if (sortPrice === "cheapest") {
            const ascending = games.sort((a,b) => parseInt(a.prices.price) > parseInt(b.prices.price) ? 1 : -1);            
            createList(ascending);            
        } else if (sortPrice === "expensive") {
            const descending = games.sort((a,b) => parseInt(a.prices.price) < parseInt(b.prices.price) ? 1 : -1)
            createList(descending);
        }        
}


