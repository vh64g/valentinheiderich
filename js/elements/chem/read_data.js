import file from "../../../data/chemistry/data.json" assert { type: "json" };

let field_mapping = {}

function getFields(json) {
    Object.keys(json[0]).forEach(function (key) {
        field_mapping[key.toLowerCase()] = key;
    });
}

function searchJson(json, field, value) {
    let results = [];
    let field_name = field_mapping[field.toLowerCase()];
    for (let i = 0; i < json.length; i++) {
        if (json[i][field_name].toString().toLowerCase() === value.toString().toLowerCase()) {
            results.push(json[i]);
        }
    }
    return results;
}

let data = file;
getFields(data);
let hash = window.location.hash;
let hashData = hash.split("#");
let element;

if (hashData[1] === undefined) {element = data;}
else if (hashData[1].toString().includes("&") && hashData[1].toString().includes("=")) {
    let targetField = hashData[1].split("&")[1].split("=")[0].toString();
    let targetValue = hashData[1].split("&")[1].split("=")[1].toString();
    if (targetField !== undefined && targetValue !== undefined) {element = searchJson(data, targetField, targetValue);}
}else {
    element = data[hashData[1].split("&")[0]-1];
    if (element === undefined) {element = data;}
}

// create the editor
const container = document.getElementById("jsoneditor")
const options = {}
const editor = new JSONEditor(container, options)

// set json
const initialJson = element
editor.set(initialJson)


window.addEventListener("hashchange", function () {
    location.reload();
});

