let output = document.getElementById("out");
let btn = document.getElementById("csrtd");
let tds_btn = document.getElementById("switch-mode");
let tdi1 = document.getElementById("tdi1");
let tdi2 = document.getElementById("tdi2");

let output_lc = document.getElementById("out1");
let btn_lc = document.getElementById("csrlc");
let lcs_btn = document.getElementById("switch-mode-lc");
let lci1 = document.getElementById("lci1");
let lci2 = document.getElementById("lci2");

let c = 299792458;
let c2 = c ** 2;

let tds = true;
let lcs = true;

tds_btn.addEventListener("click", function () {
    tds = !tds;
    if (tds) {
        tds_btn.innerHTML = "Stationary";
    } else {
        tds_btn.innerHTML = "Moving";
    }
});

lcs_btn.addEventListener("click", function () {
    lcs = !lcs;
    if (lcs) {
        lcs_btn.innerHTML = "Stationary";
    } else {
        lcs_btn.innerHTML = "Moving";
    }
});

btn.addEventListener("click", function () {
    let tdi1v = tdi1.value;
    let tdi2v = tdi2.value;

    tdi1v = tdi1v ** 2;

    tdi1v = tdi1v / c2;
    tdi1v = 1- tdi1v;
    tdi1v = Math.sqrt(tdi1v);

    let out;
    if (tds) {out=tdi2v/tdi1v;}
    else {out=tdi2v*tdi1v;}

    output.innerHTML = out;
});

btn_lc.addEventListener("click", function () {
    let lci1v = lci1.value;
    let lci2v = lci2.value;

    lci1v = lci1v ** 2;

    lci1v = lci1v / c2;
    lci1v = 1 - lci1v;
    lci1v = Math.sqrt(lci1v);

    let out;
    if (lcs) {out=lci2v*lci1v;}
    else {out=lci2v/lci1v;}

    output_lc.innerHTML = out;
});