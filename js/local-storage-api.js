const callAPI = "http://georgiosf.no/game-hub-api/wp-json/wc/store/products";



async function getGames() {
    try {
        const response = await fetch(callAPI);
        let results = await response.json();
        window.localStorage.setItem("gamesAPI", JSON.stringify(results));
    } catch(error) {
        console.log("Error");
    }

}

getGames();




// let gameTest = JSON.parse(window.localStorage.getItem("games"));

// let test2 = JSON.parse(window.localStorage.getItem("gamesAPI"))



