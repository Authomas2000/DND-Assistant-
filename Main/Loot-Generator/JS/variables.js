//Biome variables
let biome_dropdown = document.getElementById("biome-dropdown");
let biome = "";

//creature variables
let creature_dropdown = document.getElementById("creature-dropdown");
let creature = "";

//container variables
let container_dropdown = document.getElementById("container-dropdown");
let container = "";

//various variables
let other_dropdown = document.getElementById("other-dropdown");
let other = "";

//rarity variables
let rarity_dropdown = document.getElementById("rarity-dropdown");
let rarity = 1;

//amount variables
let amount_dropdown = document.getElementById("amount-dropdown");
let amount = 1;

//other variables
let total = document.getElementById("total");
let info = document.getElementById("Info");
let activeLoot = {};
let activeLoot2 = {};
let activeLootTable = [];
let activeLootTable2 = [];
let AlertCheck = 1;
let code = "";
let maxInt = 0;
let maxInt2 = 0;
let randomInt = 0;
let randomInt2 = 0;
let randomInt3 = 0;
let randomQty = 0;
let randomQty2 = 0;
let checkRarity = 0;
let checkRarity2 = 0;
let lootName = "";
let lootName2 = "";
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