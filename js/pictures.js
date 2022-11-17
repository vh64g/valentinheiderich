let body = document.querySelector('body');
let hint = document.querySelector("#swipe-hint");
let blackCover = document.querySelector("#black-cover");
let gallery_s = document.querySelectorAll(".gallery");

function updateAnimations(hAnimation) {
    hint.style.animation = hAnimation || "none";
    blackCover.style.animation = "blend_in 3s ease-in-out forwards";
}

document.addEventListener("swipe", (e) => {
    switch(e.detail) {
        case "right":
            updateAnimations("slide-out-left 3s ease-in-out forwards");
            setTimeout(() => {document.location.href = "about.html";}, 3000);
            break;
    }
});

for (let i = 0; i < gallery_s.length; i++) {
    gallery_s[i].addEventListener("click", function() {
        let gallery = gallery_s[i];
        let gallery_img = gallery.querySelector(".gallery-img");
        let gallery_img_src = gallery_img.getAttribute("src");
        body.style.backgroundImage = "url(" + gallery_img_src + ")";
    });
}