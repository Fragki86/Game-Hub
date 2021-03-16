const favoriteIcon = document.querySelector(".heart-icon");
const heartFull = document.querySelector(".heart-full");

favoriteIcon.addEventListener("click", colourChange);

function colourChange() {
    favoriteIcon.style.display = "none";
    heartFull.style.display = "block";
}


// .heart-full {
//     display: none;