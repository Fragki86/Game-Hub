const carouselContainer = document.querySelector(".carousels");
const justArrivedContainer = document.querySelector(".landing-page-game");
const comingSoonContainer = document.querySelector(".coming-soon-games");
const callAPI = "https://georgiosf.no/game-hub-api/wp-json/wc/store/products";


async function getGames() {
    try {
        const response = await fetch(callAPI);
        const results = await response.json();

        console.log(results);

        for (let i = 0; i < results.length; i++) {
            const name = results[i].name;
            const description = results[i].description;
            const image = results[i].images[0].src;
            
            carouselContainer.innerHTML =
            `<div class="carousel-mix">
                <div id="carousel">
                    <figure>
                        <a href="game-details.html?id=${results[8].id}"><img src="${results[8].images[0].src}"></a>
                        <a href="game-details.html?id=${results[5].id}"><img src="${results[5].images[0].src}"></a>
                        <a href="game-details.html?id=${results[4].id}"><img src="${results[4].images[0].src}"></a>
                        <a href="game-details.html?id=${results[3].id}"><img src="${results[3].images[0].src}"></a>
                        <a href="game-details.html?id=${results[8].id}"><img src="${results[8].images[0].src}"></a>         
                    </figure>
                </div>
                <div id="carousel-2">
                    <figure>
                        <div class="carousel-2-pack">
                            <div>
                            <h2 class="carousel-2-h2">${results[8].name}</h2>
                            <div class="carousel-2-p">${results[8].description}</div>
                            </div>
                            <div>
                            <h2 class="carousel-2-h2">${results[5].name}</h2>
                            <div class="carousel-2-p">${results[5].description}</div>
                            </div>
                            <div>
                            <h2 class="carousel-2-h2">${results[4].name}</h2>
                            <div class="carousel-2-p">${results[8].description}</div>
                            </div>
                            <div>
                            <h2 class="carousel-2-h2">${results[3].name}</h2>
                            <div class="carousel-2-p">${results[3].description}</div>
                            </div>
                            <div>
                            <h2 class="carousel-2-h2">${results[8].name}</h2>
                            <div class="carousel-2-p">${results[8].description}</div>
                            </div>
                        </div>
                    </figure>
            <div>`

            justArrivedContainer.innerHTML = 
            `<a href="game-details.html?id=${results[0].id}"><img class="landing-page-game-img" src="${results[0].images[0].src}"></a>
             <div class="landing-page-game-des">
                <h2 class="landing-page-game-tit">${results[0].name}</h2>
                <div>${results[0].description}
                <p>Pre-order it from the Game Hub and gain 150 points as a gift, so you can trade them as you want.</p>
                </div>
             </div>`


            comingSoonContainer.innerHTML =
            `<a href="game-details.html?id=${results[1].id}"><img src="${results[1].images[0].src}" class="coming-soon-img"></a>
             <a href="game-details.html?id=${results[2].id}"><img src="${results[2].images[0].src}" class="coming-soon-img"></a>`
        }
    } catch(error) {
        console.log("Error");
    }
}
getGames();