const gameListContainer = document.querySelector(".game-list-container");
const callAPI = "https://georgiosf.no/game-hub-api/wp-json/wc/store/products";

async function getGames() {
    try {
        const response = await fetch(callAPI);
        const results = await response.json();
        createList(results);
    } catch(error) {
        console.log("Error");
    }

}

getGames();

function createList(games) {
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


