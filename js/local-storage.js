
let allGames = [
        {id: 0,
         title: "Assassin's Creed Collection",
         price: "99,00",
         image: "images/ezio.jpg",
        },

        {id: 1,
         title: "The Last of Us: Part II",
         price: "199,00",
         image: "images/last.jpg",
        },

        {id: 2,
         title: "Call of Duty: Modern Warfare",
         price: "129,00",
         image: "images/cod.jpg",
        },
        
        {id: 3,
         title: "Halo 5: Guardians",
         price: "105,00",
         image: "images/halo.jpg",
        },

        {id: 4,
         title: "The Division 2",
         price: "59,00",
         image: "images/division2.jpg",
        },

        {id: 5,
         title: "Red Dead Redemption 2",
         price: "89,00",
         image: "images/rdr.jpg",
        },

        {id: 6,
         title: "Ghost of Tsushima",
         price: "559,00",
         image: "images/ghost.jpg",
        },

        {id: 7,
         title: "Assassin's Creed - Valhalla",
         price: "649,00",
         image: "images/valhalla.jpg",
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



