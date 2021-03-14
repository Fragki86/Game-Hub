const favoriteIcon = document.querySelector(".heart-icon");

favoriteIcon.addEventListener("click", colourChange);

function colourChange() {
    favoriteIcon.style.color = "blue";

    favoriteIcon.reset;
}