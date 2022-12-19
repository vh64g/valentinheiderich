let blackCover = document.querySelector("#black-cover");
let headline = document.querySelector("#headline");

function updateAnimations(hAnimation) {
    blackCover.style.animation = "blend_in 3s ease-in-out forwards";
}

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

window.addEventListener( "pageshow", function ( event ) {
    const historyTraversal = event.persisted || (typeof window.performance != "undefined" && window.performance.navigation.type === 2);
    if ( historyTraversal ) {
        // Handle page restore.
        window.location.reload();
    }
});