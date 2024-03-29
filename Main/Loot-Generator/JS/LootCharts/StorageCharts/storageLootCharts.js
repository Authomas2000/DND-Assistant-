//Book loot array (measured by 100) (incomplete) (ready to use)
let bookArray = [
    //common (%100 chance to draw one of these items)
    //{ name: "songs", minRarity: 1, maxRarity: 20, minQty: 1, maxQty: 1, rarity: 3   },
    { name: "magical recipes", minRarity: 20, maxRarity: 50, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "weapon recipes", minRarity: 50, maxRarity: 95, minQty: 1, maxQty: 1, rarity: 3 },
    //{ name: "magical books", minRarity: 95, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3   },
    //Uncommon (%0 chance to draw one of these items)
    //Rare (%0 chance to draw one of these items)
]

//Chest Loot Chart (measured by 100) (incomplete) (ready to use)
let sorcererPouchArray = [
    //common (%80 chance to draw one of these items)
    { name: "plants", minRarity: 0, maxRarity: 45, minQty: 1, maxQty: 2, rarity: 3   },
    //Uncommon (%45 chance to draw one of these items)
    { name: "coins", minRarity: 45, maxRarity: 70, minQty: 2, maxQty: 4, rarity: 3 },
    //Rare (%20 chance to draw one of these items)
    { name: "gems", minRarity: 70, maxRarity: 90, minQty: 1, maxQty: 2, rarity: 3 },
    { name: "potions", minRarity: 90, maxRarity: 100, minQty: 1, maxQty: 2, rarity: 3   },
]

//Chest Loot Chart (measured by 10) (incomplete) (ready to use)
let cultistPouchArray = [
    //common (%80 chance to draw one of these items)
    { name: "coins", minRarity: 0, maxRarity: 80, minQty: 1, maxQty: 2, rarity: 3 },
    //uncommon (%10 chance to draw one of these items)
    { name: "Autharius Token", minRarity: 80, maxRarity: 90, minQty: 1, maxQty: 2, rarity: 1 },
    //rare (%5 chance to draw one of these items)
    { name: "gems", minRarity: 90, maxRarity: 94, minQty: 1, maxQty: 1, rarity: 3 },
    //very rare (% chance to draw one of these items)
    { name: "Cultist Copper Emblem", minRarity: 94, maxRarity: 97, minQty: 1, maxQty: 1, rarity: 2 },
    //extremely rare (% chance to draw one of these items)
    { name: "Cultist Silver Emblem", minRarity: 97, maxRarity: 98.5, minQty: 1, maxQty: 1, rarity: 2 },
    //mythical (% chance to draw one of these items)
    { name: "Cultist Gold Emblem", minRarity: 98.5, maxRarity: 99.5, minQty: 1, maxQty: 1, rarity: 3 },
    //legendary (% chance to draw one of these items)
    { name: "Cultist Blood Red Emblem", minRarity: 99.5, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3 },
]

//Chest Loot Chart (measured by 10) (incomplete) (ready to use)
let pouchArray = [
    //common (%94 chance to draw one of these items)
    { name: "coins", minRarity: 0, maxRarity: 94, minQty: 1, maxQty: 2, rarity: 3 },
    //rare (%5 chance to draw one of these items)
    { name: "gems", minRarity: 94, maxRarity: 99, minQty: 1, maxQty: 1, rarity: 3 },
    //very rare (%1 chance to draw one of these items)
    { name: "geva token", minRarity: 99, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3 },
]

//Chest Loot Chart (measured by 10) (incomplete) (ready to use)
let chestArray = [
    //common (%60 chance to draw one of these items)
    { name: "pouch", minRarity: 0, maxRarity: 30, minQty: 3, maxQty: 6, rarity: 3 },
    { name: "bars", minRarity: 30, maxRarity: 60, minQty: 2, maxQty: 4, rarity: 3 },
    //uncommon (%30 chance to draw one of these items)
    { name: "ores", minRarity: 60, maxRarity: 75, minQty: 2, maxQty: 4, rarity: 3 },
    { name: "weapons", minRarity: 75, maxRarity: 90, minQty: 1, maxQty: 1, rarity: 3 },
    //rare (%8 chance to draw one of these items)
    { name: "weapon recipes", minRarity: 90, maxRarity: 94, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "magical recipes", minRarity: 94, maxRarity: 98, minQty: 1, maxQty: 1, rarity: 3 },
    //very rare (%2 chance to draw one of these items)
    { name: "potions", minRarity: 98, maxRarity: 99, minQty: 1, maxQty: 2, rarity: 3 },
    { name: "magical items", minRarity: 99, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3 },
]