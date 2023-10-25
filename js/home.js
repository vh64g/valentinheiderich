let headline = document.querySelector("#headline");
let sub = document.querySelector("#swipe-hint");
let cover = document.querySelector("#black-cover");
let default_opacity = 1;
const min_opacity = 0;
const max_opacity = 1;

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);


function scroll_effect(event) {
    let scroll = event.deltaY * -0.001;
    default_opacity += scroll;
    default_opacity = clamp(default_opacity, min_opacity, max_opacity);
    headline.style.opacity = default_opacity;
    sub.style.opacity = default_opacity;
    cover.style.opacity = 1-default_opacity;
    if (default_opacity <= 0) {
        window.location.href = "nav_menu.html";
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

window.addEventListener( "pageshow", function ( event ) {
    const historyTraversal = event.persisted || (typeof window.performance != "undefined" && window.performance.navigation.type === 2);
    if ( historyTraversal ) {
        // Handle page restore.
        window.location.reload();
    }
});