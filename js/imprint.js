let blackCover = document.querySelector("#black-cover");
let headline = document.querySelector("#headline");

function updateAnimations(hAnimation) {
    headline.style.animation = hAnimation || "none";
    blackCover.style.animation = "blend_in 3s ease-in-out forwards";
}

function createCursorTail() {
    let cursorTail = document.createElement("div");
    cursorTail.classList.add("cursor-tail");
    cursorTail.style.top = mouseCursor.style.top;
    cursorTail.style.left = mouseCursor.style.left;
    document.body.appendChild(cursorTail);
    setTimeout(() => {cursorTail.remove();}, 1000);
}

window.addEventListener("mousemove", createCursorTail);

document.addEventListener("swipe", (e) => {
    switch(e.detail) {
        case "up":
            updateAnimations("slide-out-down 3s ease-in-out backwards");
            setTimeout(() => {document.location.href = "home.html";}, 3000);
            break;
    }
});

window.addEventListener("load", () => {
    config.CURL = 0;
    config.PRESSURE = 0;
    config.SPLAT_RADIUS = .25;
    config.DENSITY_DISSIPATION = 0.5;
    config.VELOCITY_DISSIPATION = 0.5;
});