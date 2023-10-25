let content = document.querySelector("#content");
let default_opacity = 0;
const min_opacity = 0;
const max_opacity = 1;

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);


function scroll_effect(event) {
    let scroll = event.deltaY * 0.001;
    default_opacity += scroll;
    default_opacity = clamp(default_opacity, min_opacity, max_opacity);
    content.style.opacity = default_opacity;
    if (default_opacity <= 0) {
        window.location.href = "home.html";
    }
}

addEventListener("wheel", (event) => {
    let ticking = false;
    if (!ticking) {
        window.requestAnimationFrame(() => {
            scroll_effect(event);
            ticking = false;
        });ticking = true;
    }
});