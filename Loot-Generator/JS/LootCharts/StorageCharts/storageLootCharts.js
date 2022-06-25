//Book loot array (measured by 100) (incomplete) (ready to use)
let bookArray = [
    //common (%100 chance to draw one of these items)
    { name: "songs", minRarity: 1, maxRarity: 20, moreQty: 1 },
    { name: "magical recipes", minRarity: 20, maxRarity: 50, moreQty: 1 },
    { name: "weapon recipes", minRarity: 50, maxRarity: 95, moreQty: 1 },
    { name: "magical books", minRarity: 95, maxRarity: 100, moreQty: 1 },
    //Uncommon (%0 chance to draw one of these items)
    //Rare (%0 chance to draw one of these items)
]

//Chest Loot Chart (measured by 100) (incomplete) (ready to use)
let sorcererPouchArray = [
    //common (%50 chance to draw one of these items)
    { name: "coins", minRarity: 1, maxRarity: 25, moreQty: 3 },
    { name: "plants", minRarity: 25, maxRarity: 70, moreQty: 2 },
    { name: "gems", minRarity: 70, maxRarity: 90, moreQty: 2 },
    { name: "potions", minRarity: 90, maxRarity: 100, moreQty: 2 },
    //Uncommon (%0 chance to draw one of these items)
    //Rare (%0 chance to draw one of these items)
]

//Chest Loot Chart (measured by 10) (incomplete) (ready to use)
let pouchArray = [
    //common (%50 chance to draw one of these items)
    { name: "coins", minRarity: 1, maxRarity: 80, moreQty: 1 },
    { name: "gems"}
]