
let allGames = [
        {title: "Assassin's Creed Collection",
         price: "99,00",
         image: "images/ezio-big.png",
        },

        {title: "The Last of Us: Part II",
         price: "199,00"},

        {title: "Call of Duty: Modern Warfare",
         price: "129,00"},

        {title: "Halo 5: Guardians",
         price: "105,00"},

        {title: "The Division 2",
         price: "59,00"},

        {title: "Red Dead Redemption 2",
         price: "89,00"},

        {title: "Ghost of Tsushima",
         price: "559,00"},

        {title: "Assassin's Creed - Valhalla",
         price: "649,00"},

        {title: "Crash Bandicoot 4: It's about time",
         price: "649,00"}
]

window.localStorage.setItem("games", JSON.stringify(allGames));

let gameTest = JSON.parse(window.localStorage.getItem("games"));

console.log(gameTest);









