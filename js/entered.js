// noinspection JSSuspiciousNameCombination

let body = document.querySelector(".body");
mouseCursor = document.querySelector(".cursor");
let movingStars = [];
let starShowerStars = [];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

if (window.innerWidth > 1180) {
    function createStar() {
        if (movingStars.length < 1000) {
            let star = document.createElement("div");
            star.classList.add("star");
            star.style.left = mouseCursor.style.left;
            star.style.top = mouseCursor.style.top;
            star.target = [getRandomInt(0, window.innerWidth), getRandomInt(0, window.innerHeight)];
            document.body.appendChild(star);
            movingStars.push(star);
            setTimeout(() => {
                star.remove();
                movingStars.splice(movingStars.indexOf(star), 1);
            }, 5000)
        }
    }


    function starShower(word) {
        let word_coors = word;
        for (let i = 0; i < 500; i++) {
            let star = document.createElement("div");
            star.classList.add("star");
            star.style.left = getRandomInt(0, 100) + "vw";
            star.style.top = star.style.left.replace("vw", "vh");
            star.target = word_coors[Math.floor(Math.random() * word_coors.length)]
            document.body.appendChild(star);
            starShowerStars.push(star);
            setTimeout(() => {
                star.remove();
                starShowerStars.splice(starShowerStars.indexOf(star), 1);
            }, Math.random() * 50000)
        }
    }

    function updateStarsOfShower() {
        let ratioW = 1920 / window.innerWidth * 0.75;
        let ratioH = 1080 / window.innerHeight;
        starShowerStars.forEach(star => {
            star.style.left = parseInt(star.style.left) + ((star.target[0] / ratioW) - parseInt(star.style.left)) / 100 + "px";
            star.style.top = parseInt(star.style.top) + ((star.target[1] / ratioH) - parseInt(star.style.top)) / 100 + "px";
        })
    }

    function updateStars() {
        movingStars.forEach(star => {
            star.style.left = parseInt(star.style.left) + (star.target[0] - parseInt(star.style.left)) / 100 + "px";
            star.style.top = parseInt(star.style.top) + (star.target[1] - parseInt(star.style.top)) / 100 + "px";
        })
    }

// Event Listener
    window.addEventListener("mousemove", createStar);
    window.addEventListener("load", () => starShower(welcome));

    //Loops
    setInterval(updateStars, 10);
    setInterval(updateStarsOfShower, 10);
    //setInterval(() => {console.log(word_coors)}, 5000);

    body.style.animation = "fade_color 5s";
}
window.addEventListener("mousedown", () => {
    let hint = document.querySelector(".hint");
    if(hint) {
        starShowerStars.forEach(star => star.style.animation = "blend_out 1s forwards");starShowerStars = [];
        hint.style.animation = "blend_out 1s forwards";
        setTimeout(() => {
            hint.remove()
            document.location.href = "../pages/home.html";
        }, 1000);
    }
});

//...
body.style.background = "black";

if (window.innerWidth > 1180) {
    setTimeout(() => {
        let hint = document.createElement("div");
        hint.classList.add("hint");
        hint.innerHTML = "Click to continue";
        document.body.appendChild(hint);
    }, 5000)
} else {
    let hint = document.createElement("div");
    hint.classList.add("hint");
    hint.innerHTML = "Click to continue";
    document.body.appendChild(hint);
}

window.addEventListener( "pageshow", function ( event ) {
    const historyTraversal = event.persisted || (typeof window.performance != "undefined" && window.performance.navigation.type === 2);
    if ( historyTraversal ) {
        // Handle page restore.
        window.location.reload();
    }
});