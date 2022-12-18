let pr_button = document.getElementById("pr-btn");
let ga_button = document.getElementById("ga-btn");
let pu_button = document.getElementById("pu-btn");
let po_button = document.getElementById("po-btn");
let ne_button = document.getElementById("ne-btn");

let content = document.getElementById("content");

pr_button.addEventListener("click", function() {
    //Programming projects
    content.innerHTML = "";
});
ga_button.addEventListener("click", function() {
    //Game projects
    content.innerHTML = "";
});
pu_button.addEventListener("click", function() {
    //Publications
    content.innerHTML = "";
});
po_button.addEventListener("click", function() {
    //Politics
    content.innerHTML = "";
});
ne_button.addEventListener("click", function() {
    //News
    content.innerHTML = "";
});