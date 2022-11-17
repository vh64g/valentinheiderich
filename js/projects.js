let pr_button = document.getElementById("pr_button");
let ga_button = document.getElementById("bl_button");
let pu_button = document.getElementById("pu_button");
let po_button = document.getElementById("po_button");
let ne_button = document.getElementById("ne_button");

let content = document.getElementById("content");

pr_button.addEventListener("click", function() {
    //Programming Btn clicked
    content.appendChild(document.createElement("br"));
});
ga_button.addEventListener("click", function() {
    //Games Btn clicked
});
pu_button.addEventListener("click", function() {
    //Publications Btn clicked
});
po_button.addEventListener("click", function() {
    //Politics Btn clicked
});
ne_button.addEventListener("click", function() {
    //News Btn clicked
});