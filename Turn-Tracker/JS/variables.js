//Biome variables
let character_dropdown = document.getElementById("character-dropdown");
let character = "";

//creature variables
let creature_dropdown = document.getElementById("creature-dropdown");
let creature = "";

//selected character or creature
let selected = {};

//other variables
let Name = "";
let AC = "";
let initiative = "";

//table for relaying info to user
let infoArray = [
    { id: "Text1", Name: "", AC: 0, initiative: 0},
    { id: "Text2", Name: "", AC: 0, initiative: 0},
    { id: "Text3", Name: "", AC: 0, initiative: 0},
    { id: "Text4", Name: "", AC: 0, initiative: 0},
    { id: "Text5", Name: "", AC: 0, initiative: 0},
    { id: "Text6", Name: "", AC: 0, initiative: 0},
    { id: "Text7", Name: "", AC: 0, initiative: 0},
    { id: "Text8", Name: "", AC: 0, initiative: 0},
    { id: "Text9", Name: "", AC: 0, initiative: 0},
    { id: "Text10", Name: "", AC: 0, initiative: 0},
]