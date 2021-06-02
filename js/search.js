const searchAPI = "https://georgiosf.no/game-hub-api/wp-json/wc/store/products";
const searchInput = document.querySelector("#search-desktop");
const searchArea = document.querySelector(".search-div");
const searchAreaMobile = document.querySelector(".search-div-mob");
const searchResults = document.querySelector(".search-results");
const searchResultsMobile = document.querySelector(".search-results-mob");
const searchMobile = document.querySelector("#search");


searchInput.addEventListener("input", () => showResults(searchInput.value));
searchMobile.addEventListener("input", () => showResults(searchMobile.value));

const showResults = async (checkAll) => {
    try {
        const response = await fetch(searchAPI);
        const results = await response.json();

        console.log(results);

        let gameCheck = results.filter((games) => {
            const regex = new RegExp(`${checkAll}`, "gi");
            return (
                games.name.match(regex)
            );
        });

        if (checkAll.length === 0) {
            gameCheck = [];
            searchResults.innerHTML = "";
            searchResultsMobile.innerHTML = "";
            searchArea.style.display = "none";
            searchAreaMobile.style.display = "none";
        }
        deliverHTML(gameCheck);




    } catch(error) {
        console.log("ERROR")
    }
}


const deliverHTML = (gameCheck) => {
    if (gameCheck.length > 0) {
        const finalResult = gameCheck
        .map((match) => `
        <a href="game-details.html?id=${match.id}">
            <li>${match.name} <img src="${match.images[0].src}" class="search-img"></li>
        </a>`)
        .join("");
        searchResults.innerHTML = finalResult;
        searchResultsMobile.innerHTML = finalResult;
        searchArea.style.display = "block";
        searchAreaMobile.style.display = "block";
    }
}
