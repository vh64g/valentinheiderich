let headline = document.querySelector("#headline");
let swipeHint = document.querySelector("#swipe-hint");
let blackCover = document.querySelector("#black-cover");

function updateAnimations(hAnimation=null, shAnimation=null, out=false) {
    if (hAnimation) {headline.style.animation = hAnimation || "none";}
    if (shAnimation) {swipeHint.style.animation = shAnimation || "none";}
    if(out) {blackCover.style.animation = "blend_in 3s ease-in-out forwards";}
    else {blackCover.style.animation = "blend_out 0s ease-in-out forwards";}
}

document.addEventListener("swipe", (e) => {
    switch(e.detail) {
        case "left":
            updateAnimations("slide-out-right 3s ease-in-out forwards", "slide-out-right-hint 3s ease-in-out forwards", true);
            setTimeout(() => {document.location.href = "about.html";}, 3000);
            break;
        case "right":
            updateAnimations("slide-out-left 3s ease-in-out forwards", "slide-out-left-hint 3s ease-in-out forwards", true);
            setTimeout(() => {document.location.href = "inDevelopment.html";}, 3000);
            break;
        case "up":
            break;
        case "down":
            updateAnimations("slide-out-up 3s ease-in-out forwards", "slide-out-up-hint 3s ease-in-out forwards", true);
            setTimeout(() => {document.location.href = "imprint.html";}, 3000);
            break;
    }
});

window.addEventListener( "pageshow", function ( event ) {
    const historyTraversal = event.persisted || (typeof window.performance != "undefined" && window.performance.navigation.type === 2);
    if ( historyTraversal ) {
        // Handle page restore.
        window.location.reload();
    }
});