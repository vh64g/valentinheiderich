
document.addEventListener("swipe", (e) => {
    switch(e.detail) {
        case "left":
            document.location.href = "home.html";
            break;
        case "right":
            break;
        case "up":
            break;
        case "down":
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