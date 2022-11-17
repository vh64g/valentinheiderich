let xPositions = [];
let yPositions = [];

let touchesX = [];
let touchesY = [];

let mouseDown = false;

function clearPositions() {
    xPositions = [];
    yPositions = [];
    touchesX = [];
    touchesY = [];
}

function mousedownHandler() {
    clearPositions();
    mouseDown = true;
}

function mouseupHandler() {
    mouseDown = false;
    let widthTrigger = window.innerWidth / 2;
    let heightTrigger = window.innerHeight / 2;
    let direction = "";
    if(xPositions[0] - xPositions[xPositions.length - 1] > widthTrigger && Math.abs(yPositions[0] - yPositions[yPositions.length - 1]) < heightTrigger) {direction = "left";}
    if(xPositions[0] - xPositions[xPositions.length - 1] < -widthTrigger && Math.abs(yPositions[0] - yPositions[yPositions.length - 1]) < heightTrigger) {direction = "right";}
    if(yPositions[0] - yPositions[yPositions.length - 1] > heightTrigger && Math.abs(xPositions[0] - xPositions[xPositions.length - 1]) < widthTrigger) {direction = "up";}
    if(yPositions[0] - yPositions[yPositions.length - 1] < -heightTrigger && Math.abs(xPositions[0] - xPositions[xPositions.length - 1]) < widthTrigger) {direction = "down";}
    clearPositions();
    document.dispatchEvent(new CustomEvent("swipe", {detail: direction}));
}

function touchstartHandler(e) {
    clearPositions();
    touchesX.push(e.changedTouches[0].screenX);
    touchesY.push(e.changedTouches[0].screenY);
}

function touchmoveHandler(e) {
    touchesX.push(e.changedTouches[0].screenX);
    touchesY.push(e.changedTouches[0].screenY);
}

function touchendHandler() {
    let widthTrigger = window.innerWidth / 2;
    let heightTrigger = window.innerHeight / 2;
    let direction = "";
    if(touchesX[0] - touchesX[touchesX.length - 1] > widthTrigger && Math.abs(touchesY[0] - touchesY[touchesY.length - 1]) < heightTrigger) {direction = "left";}
    if(touchesX[0] - touchesX[touchesX.length - 1] < -widthTrigger && Math.abs(touchesY[0] - touchesY[touchesY.length - 1]) < heightTrigger) {direction = "right";}
    if(touchesY[0] - touchesY[touchesY.length - 1] > heightTrigger && Math.abs(touchesX[0] - touchesX[touchesX.length - 1]) < widthTrigger) {direction = "up";}
    if(touchesY[0] - touchesY[touchesY.length - 1] < -heightTrigger && Math.abs(touchesX[0] - touchesX[touchesX.length - 1]) < widthTrigger) {direction = "down";}
    clearPositions();
    document.dispatchEvent(new CustomEvent("swipe", {detail: direction}));
}

function updatePositions(e) {
    if(!mouseDown) {return;}
    xPositions.push(e.pageX);
    yPositions.push(e.pageY);
}

window.addEventListener("mousemove", updatePositions);
window.addEventListener("mousedown", mousedownHandler);
window.addEventListener("mouseup", mouseupHandler);
window.addEventListener("touchstart", touchstartHandler);
window.addEventListener("touchmove", touchmoveHandler);
window.addEventListener("touchend", touchendHandler);