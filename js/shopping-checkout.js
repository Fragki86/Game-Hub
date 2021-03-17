/*------------------------   Shopping-cart-page -----------------------------*/
const gameInfo = document.querySelector(".payment-top-part");
gameInfo.innerHTML = "";

function callGameInfo(){
    for (let i = 0; i < allGames.length; i++) {

        const gameTitle = allGames[i].title;
        const gamePrice = allGames[i].price;
        const gameImg = allGames[i].image;

        gameInfo.innerHTML += `<h1 class="h1-title-p">${gameTitle}<h1>
                                <img src="${gameImg}">
                                <h3 class="h3-price">${gamePrice}</h3>`

        console.log(gamePrice);   


    }
}

callGameInfo()