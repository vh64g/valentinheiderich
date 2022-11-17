let blackCover = document.querySelector("#black-cover");
let headline = document.querySelector("#headline");
let hint = document.querySelector("#swipe-hint");
let about = document.querySelector("#about-text");

function updateAnimations(hAnimation) {
    headline.style.animation = hAnimation || "none";
    hint.style.animation = hAnimation || "none";
    about.style.animation = hAnimation || "none";
    blackCover.style.animation = "blend_in 3s ease-in-out forwards";
}

document.addEventListener("swipe", (e) => {
    switch(e.detail) {
        case "left":
            updateAnimations("slide-out-right 3s ease-in-out forwards", "slide-out-right-hint 3s ease-in-out forwards");
            setTimeout(() => {document.location.href = "pictures.html";}, 3000);
            break;
        case "right":
            updateAnimations("slide-out-left 3s ease-in-out forwards");
            setTimeout(() => {document.location.href = "home.html";}, 3000);
            break;
    }
});