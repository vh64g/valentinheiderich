//Variables
mouseCursor = document.querySelector(".cursor");
let body = document.querySelector(".body");
let cover = document.querySelector(".cover");
let button = document.querySelector(".button");
let bubbleSwitch = document.querySelector(".switchCheckbox");
let hexString = "0123456789ABCDEF";
let bubbles = [];
let movingBubbles = [];

//Functions
function randomColor(){
    let hexCode = "#";
    for(let i=0; i<6; i++){hexCode += hexString[Math.floor(Math.random() * hexString.length)];}
    let alpha = Math.random();
    return `${hexCode} ${alpha*100}%`;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function isCollide(a, b) {
    return !(
        ((a.y + a.height) < (b.y)) ||
        (a.y > (b.y + b.height)) ||
        ((a.x + a.width) < b.x) ||
        (a.x > (b.x + b.width))
    );
}

function generateGrad(){
    let colorOne = randomColor();
    let colorTwo = randomColor();
    let angle = Math.floor(Math.random() * 360);
    return `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo})`;
}

function generateComplexGrad(){
    let simpleGrads = [];
    for(let i=0; i<10; i++){simpleGrads.push(generateGrad());}
    return simpleGrads.join(", ");
}

function applyGrad(){
    body.style.background = generateComplexGrad();
}

function spawnBubbleByCursor(event){
    if(!bubbleSwitch.checked){return;}
    if(movingBubbles.length < 15) {
        let bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.style.left = event.clientX + "px";
        bubble.style.top = event.clientY + "px";
        bubble.style.backgroundBlendMode = "lighten";
        bubble.style.zIndex = '-1';
        bubble.target = [getRandomInt(0, window.innerWidth), getRandomInt(0, window.innerHeight)];
        cover.appendChild(bubble);
        bubbles.push(bubble);
        movingBubbles.push(bubble);
    }
}

function spawnBubbleRandomly(){
    if(!bubbleSwitch.checked){return;}
    if(bubbles.length < 150) {
        let bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.style.left = Math.floor(Math.random() * 90 + 5) + '%';
        bubble.style.top = Math.floor(Math.random() * 90 + 5) + '%';
        bubble.style.backgroundBlendMode = "lighten";
        bubble.style.zIndex = '-1';
        if(bubbles.length < 5){
            bubble.target = [getRandomInt(0, window.innerWidth), getRandomInt(0, window.innerHeight)];
            bubble.style.zIndex = '-1';
            movingBubbles.push(bubble);
        }else {
            bubble.style.zIndex = '-2';
        }
        body.appendChild(bubble);
        bubbles.push(bubble);
    }
}

function updateBubbles(){
    movingBubbles.forEach(bubble => {
        if(Math.abs(bubble.target[0] - bubble.offsetLeft) < 100 && Math.abs(bubble.target[1] - bubble.offsetTop) < 100){bubble.target  = [getRandomInt(0, window.innerWidth), getRandomInt(0, window.innerHeight)];}
        bubble.style.left = parseInt(bubble.style.left) + (bubble.target[0] - parseInt(bubble.style.left))/90 + "px";
        bubble.style.top = parseInt(bubble.style.top) + (bubble.target[1] - parseInt(bubble.style.top))/90 + "px";
        if(isCollide(bubble.getBoundingClientRect(), mouseCursor.getBoundingClientRect())){bubble.target = [getRandomInt(0, window.innerWidth), getRandomInt(0, window.innerHeight)];}
    });
    requestAnimationFrame(updateBubbles);
}

function bubbleSwitchClicked() {
    if (!bubbleSwitch.checked) {
        let bubbles = document.querySelectorAll(".bubble");
        bubbles.forEach(bubble => {bubble.remove()});
    }
    bubbles = [];
    movingBubbles = [];
}

function openWebsite(){
    cover.style.zIndex = "201";
    cover.style.animation = "blend_out 1s ease-in-out forwards";
    button.style.animation = "blend_out .5s ease-in-out forwards";
    bubbleSwitch.style.animation = "blend_out .5s ease-in-out forwards";
    setTimeout(function(){document.location.href="pages/entered.html";}, 1000);
}

//Event Listeners
window.addEventListener("load", applyGrad);
window.addEventListener("click", spawnBubbleByCursor);
bubbleSwitch.addEventListener("click", bubbleSwitchClicked);

//Loops
setInterval(spawnBubbleRandomly, 30);
requestAnimationFrame(updateBubbles);

window.addEventListener( "pageshow", function ( event ) {
    const historyTraversal = event.persisted || (typeof window.performance != "undefined" && window.performance.navigation.type === 2);
    if ( historyTraversal ) {
        // Handle page restore.
        window.location.reload();
    }
});