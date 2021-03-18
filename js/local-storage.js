
let allGames = [
        {id: 0,
         title: "Assassin's Creed Collection",
         price: "99,00",
         image: "images/ezio-big.jpg",
        },

        {id: 1,
         title: "The Last of Us: Part II",
         price: "199,00",
         image: "images/last-big.jpg",
        },

        {id: 2,
         title: "Call of Duty: Modern Warfare",
         price: "129,00",
         image: "images/cod-big.jpg",
        },
        
        {id: 3,
         title: "Halo 5: Guardians",
         price: "105,00",
         image: "images/halo-big.jpg",
        },

        {id: 4,
         title: "The Division 2",
         price: "59,00",
         image: "images/division2-big.jpg",
        },

        {id: 5,
         title: "Red Dead Redemption 2",
         price: "89,00",
         image: "images/rdr-big.jpg",
        },

        {id: 6,
         title: "Ghost of Tsushima",
         price: "559,00",
         image: "images/ghost-big.jpg",
        },

        {id: 7,
         title: "Assassin's Creed - Valhalla",
         price: "649,00",
         image: "images/valhalla-big.jpg",
        },

        {id: 8,
         title: "Crash Bandicoot 4: It's about time",
         price: "649,00",
         image: "images/cb4.jpg",
        }
]

window.localStorage.setItem("games", JSON.stringify(allGames));

let gameTest = JSON.parse(window.localStorage.getItem("games"));

console.log(gameTest);


const gameInfo = document.querySelector(".payment-top-part");
gameInfo.innerHTML = "";

function callGameInfo(){
    for (let i = 0; i < allGames.length; i++) {

        const gameTitle = allGames[i].title;
        const gamePrice = allGames[i].price;
        const gameImg = allGames[i].image;

        gameInfo.innerHTML = `<h1 class="h1-title-p">${gameTitle}</h1>
                                <img class="img-buy-2" src="${gameImg}">
                                <h3 class="h3-price-p" style.color="blue">${gamePrice}</h3>
                                <button class="checkout-button" id="clear-cart">Clear Cart</button>`

    }
}

callGameInfo()
