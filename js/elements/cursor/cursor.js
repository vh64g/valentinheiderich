let mouseCursor = document.querySelector(".cursor");

function cursor(e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

function touchCursor(e) {
    mouseCursor.style.top = e.touches[0].pageY + "px";
    mouseCursor.style.left = e.touches[0].pageX + "px";
}

window.addEventListener("mousemove", cursor);
window.addEventListener("touchmove", touchCursor);