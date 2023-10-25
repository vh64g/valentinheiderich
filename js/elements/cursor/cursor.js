let mouseCursor = document.querySelector(".cursor");
let animated_cursor = false

function cursor(e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

function touchCursor(e) {
    mouseCursor.style.top = e.touches[0].pageY + "px";
    mouseCursor.style.left = e.touches[0].pageX + "px";
}

if (animated_cursor) {window.addEventListener("mousemove", animatedCursor);} else {window.addEventListener("mousemove", cursor);window.addEventListener("load", cursor);}
window.addEventListener("touchmove", touchCursor);