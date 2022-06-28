//Biome variables
let biome_dropdown = document.getElementById("biome-dropdown");
let biome = "";

//creature variables
let creature_dropdown = document.getElementById("creature-dropdown");
let creature = "";

//creature variables
let amount_dropdown = document.getElementById("amount-dropdown");
let amount = 0;

//other variables
let activeLoot = {};
let activeLootTable = [];
let activeLootTable2 = [];
let code = "";
let maxInt = 0;
let maxInt2 = 0;
let randomInt = 0;
let randomInt2 = 0;
let randomInt3 = 0;
let randomQty = 0;
let randomQty2 = 0;
let i = 0;
let i1 = 0;
let i2 = 0;
let i3 = 0;
let i4 = 0;
let i5 = 0;
let i6 = 0;

//table for relaying loot to user
let totalArray = [
    { name: "Text1", loot: "", Qty: 0},
    { name: "Text2", loot: "", Qty: 0},
    { name: "Text3", loot: "", Qty: 0},
    { name: "Text4", loot: "", Qty: 0},
    { name: "Text5", loot: "", Qty: 0},
    { name: "Text6", loot: "", Qty: 0},
    { name: "Text7", loot: "", Qty: 0},
    { name: "Text8", loot: "", Qty: 0},
    { name: "Text9", loot: "", Qty: 0},
    { name: "Text10", loot: "", Qty: 0},
]

//table for relaying loot to user
let infoArray = [
    { name: "Text1", loot: "", Qty: 0},
    { name: "Text2", loot: "", Qty: 0},
    { name: "Text3", loot: "", Qty: 0},
    { name: "Text4", loot: "", Qty: 0},
    { name: "Text5", loot: "", Qty: 0},
    { name: "Text6", loot: "", Qty: 0},
    { name: "Text7", loot: "", Qty: 0},
    { name: "Text8", loot: "", Qty: 0},
    { name: "Text9", loot: "", Qty: 0},
    { name: "Text10", loot: "", Qty: 0},
]