const favoriteIcon = document.querySelectorAll(".heart");
const heartFull = document.querySelectorAll(".heart-full");

favoriteIcon.addEventListener("click", fillUp);
heartFull.addEventListener("click", fillDown);



function fillUp() {
    favoriteIcon.style.display = "none";
    heartFull.style.display = "block";
}

function fillDown() {
    favoriteIcon.style.display = "block";
    heartFull.style.display = "none";
}
