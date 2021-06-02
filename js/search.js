const searchAPI = "https://georgiosf.no/game-hub-api/wp-json/wc/store/products";
const searchInput = document.querySelector("#search-desktop");
const searchArea = document.querySelector(".search-div");
const searchResults = document.querySelector(".search-results");


searchInput.addEventListener("input", () => showResults(searchInput.value));

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
            searchArea.style.display = "none";
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
        searchArea.style.display = "block";
    }
}
