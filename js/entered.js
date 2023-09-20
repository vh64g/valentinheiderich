let body = document.querySelector(".body");
mouseCursor = document.querySelector(".cursor");

window.addEventListener( "pageshow", function ( event ) {
    const historyTraversal = event.persisted || (typeof window.performance != "undefined" && window.performance.navigation.type === 2);
    if ( historyTraversal ) {
        // Handle page restore.
        window.location.reload();
    }
});

window.onload = function() {
    window.open("https://valentinheiderich.com/pages/home.html", "_self");
}

window.onmousemove = function(e) {
    const x = (window.innerWidth*-0.15) + e.pageX * 1.3;
    mouseCursor.animate({
        left: x + "px",
    }, {duration: 100, fill: "forwards"});
}