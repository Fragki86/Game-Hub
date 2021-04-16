const carouselContainer = document.querySelector(".carousels");
const api = "https://georgiosf.no/game-hub-api/wp-json/wc/store/products";

async function getFeatured() {
    try {
        const response = await fetch(api);
        const results = await response.json();
        console.log(results);
        createCarousels(results);
        
    } catch(error) {
        console.log("Error");
    }

}

getFeatured();

function createCarousels(featured) {
    featured.forEach(function(pickGames){
        carouselContainer.innerHTML = 
        `<div class="carousel-mix">
            <div id="carousel">
                <figure>
                    <img src="${pickGames.images[0].src}">
                    <img src="${pickGames.images[0].src}">
                </figure>
            </div>
        <div>`
    })
}
