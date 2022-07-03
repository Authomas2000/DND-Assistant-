//Array for Gems (50) (complete) (ready to use)
let gemArray = [
    //10gp (%60.4 chance to draw one of these items)
    { name: "Obsidian", minRarity: 1, maxRarity: 40, minQty: 1, maxQty: 3, rarity: 1 },
    { name: "Lapis Lazuli", minRarity: 40, maxRarity: 60.4, minQty: 1, maxQty: 3, rarity: 1 },

    //50gp (%20 chance to draw one of these items)
    { name: "Bloodstone", minRarity: 60.4, maxRarity: 70.4, minQty: 1, maxQty: 3, rarity: 1 },
    { name: "Jasper", minRarity: 70.4, maxRarity: 80.4, minQty: 1, maxQty: 2, rarity: 1 },

    //100gp (%10 chance to draw one of these items)
    { name: "Amber", minRarity: 80.4, maxRarity: 85.4, minQty: 1, maxQty: 2, rarity: 1 },
    { name: "Amethyst", minRarity: 85.4, maxRarity: 90.4, minQty: 1, maxQty: 2, rarity: 1 },

    //500gp (%5 chance to draw one of these items)
    { name: "Peridot", minRarity: 90.4, maxRarity: 92.9, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Topaz", minRarity: 92.9, maxRarity: 95.4, minQty: 1, maxQty: 1, rarity: 2 },

    //1,000gp (%3 chance to draw one of these items)
    { name: "Emerald", minRarity: 95.4, maxRarity: 96.9, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Star Ruby", minRarity: 96.9, maxRarity: 98.4, minQty: 1, maxQty: 1, rarity: 2 },

    //5,000gp (%1 chance to draw one of these items)
    { name: "Diamond", minRarity: 98.4, maxRarity: 98.9, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Ruby", minRarity: 98.9, maxRarity: 99.4, minQty: 1, maxQty: 1, rarity: 3 },

    //7,000gp (%0.4 chance to draw one of these items)
    { name: "Massive Emerald", minRarity: 99.4, maxRarity: 99.6, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Massive Star Ruby", minRarity: 99.6, maxRarity: 99.8, minQty: 1, maxQty: 1, rarity: 3 },

    //20,000gp (%0.2 chance to draw one of these items)
    { name: "Massive Emerald", minRarity: 99.8, maxRarity: 99.9, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Massive Ruby", minRarity: 99.9, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3 },
]

//Array for coins (41.1) (complete) (ready to use)
let coinArray = [
    //common (%10 chance to draw one of these)
    { name: "Copper Piece", minRarity: 1, maxRarity: 10, minQty: 10, maxQty: 40, rarity: 1 },
    //common (%50 chance to draw one of these)
    { name: "Silver Piece", minRarity: 10, maxRarity: 60, minQty: 1, maxQty: 15, rarity: 1 },
    //uncommon (%35 chance to draw one of these)
    { name: "Gold Piece", minRarity: 60, maxRarity: 95, minQty: 1, maxQty: 3, rarity: 2 },
    //rare (%5 chance to draw one of these)
    { name: "Platinum Piece", minRarity: 95, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3 },
]

//Array for bars (41.1) (complete) (ready to use)
let barArray = [
    //common (%55 chance to draw one of these)
    { name: "Iron 1Ib Bar", minRarity: 1, maxRarity: 25, minQty: 1, maxQty: 3, rarity: 1 },
    { name: "Copper 1Ib Bar", minRarity: 25, maxRarity: 40, minQty: 1, maxQty: 2, rarity: 1 },
    { name: "Tin 1Ib Bar", minRarity: 40, maxRarity: 55, minQty: 1, maxQty: 2, rarity: 1 },
    //uncommon (%40 chance to draw one of these)
    { name: "Bronze 1Ib Bar", minRarity: 55, maxRarity: 65, minQty: 1, maxQty: 2, rarity: 2 },
    { name: "Silver 1Ib Bar", minRarity: 65, maxRarity: 75, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Gold 1Ib Bar", minRarity: 75, maxRarity: 85, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Mithril 1Ib Bar", minRarity: 85, maxRarity: 95, minQty: 1, maxQty: 1, rarity: 3 },
    //rare (%5 chance to draw one of these)
    { name: "Platinum 1Ib Bar", minRarity: 95, maxRarity: 97.5, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Admontite 1Ib Bar", minRarity: 97.5, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3 },
]

//Array for bars (41.1) (complete) (ready to use)
let oreArray = [
    //common (%55 chance to draw one of these)
    { name: "Iron Ore", minRarity: 1, maxRarity: 25, minQty: 1, maxQty: 3, rarity: 1 },
    { name: "Copper Ore", minRarity: 25, maxRarity: 40, minQty: 1, maxQty: 2, rarity: 1 },
    { name: "Tin Ore", minRarity: 40, maxRarity: 55, minQty: 1, maxQty: 2, rarity: 1 },
    //uncommon (%40 chance to draw one of these)
    { name: "Bronze Ore", minRarity: 55, maxRarity: 65, minQty: 1, maxQty: 2, rarity: 2 },
    { name: "Silver Ore", minRarity: 65, maxRarity: 75, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Gold Ore", minRarity: 75, maxRarity: 85, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Mithril Ore", minRarity: 85, maxRarity: 95, minQty: 1, maxQty: 1, rarity: 3 },
    //rare (%5 chance to draw one of these)
    { name: "Platinum Ore", minRarity: 95, maxRarity: 97.5, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Admontite Ore", minRarity: 97.5, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3 },
]

//Array for stone (41.1) (complete) (ready to use)
let stoneArray = [
    //common (%50 chance to draw one of these)
    { name: "Stone", minRarity: 1, maxRarity: 25, minQty: 1, maxQty: 3, rarity: 1 },
    { name: "Whetstone", minRarity: 25, maxRarity: 50, minQty: 1, maxQty: 2, rarity: 1 },
    //uncommon (%30 chance to draw one of these)
    { name: "Marble", minRarity: 50, maxRarity: 65, minQty: 1, maxQty: 2, rarity: 2 },
    { name: "Limestone", minRarity: 65, maxRarity: 80, minQty: 1, maxQty: 2, rarity: 2 },
    //rare (%20 chance to draw one of these)
    { name: "Laterite", minRarity: 80, maxRarity: 90, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Quartz", minRarity: 90, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3 },
]

//Array for leather (41.1) (complete) (ready to use)
let leatherArray = [
    //common (%70 chance to draw one of these)
    { name: "Bonded Leather", minRarity: 1, maxRarity: 70, minQty: 1, maxQty: 3, rarity: 1 },
    //uncommon (%20 chance to draw one of these)
    { name: "Top Grain Leather", minRarity: 70, maxRarity: 90, minQty: 1, maxQty: 2, rarity: 2 },
    //rare (%10 chance to draw one of these)
    { name: "Full Grain Leather", minRarity: 90, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3 },
]

//Array for stone (41.1) (complete) (ready to use)
let plankArray = [
    //common (%70 chance to draw one of these)
    { name: "Oak Plank", minRarity: 1, maxRarity: 35, minQty: 1, maxQty: 3, rarity: 1 },
    { name: "Birch Plank", minRarity: 35, maxRarity: 70, minQty: 1, maxQty: 2, rarity: 1 },
    //uncommon (%20 chance to draw one of these)
    { name: "Hickory Plank", minRarity: 70, maxRarity: 80, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Ash Plank", minRarity: 80, maxRarity: 90, minQty: 1, maxQty: 1, rarity: 2 },
    //rare (%7 chance to draw one of these)
    { name: "Red Hickory Plank", minRarity: 90, maxRarity: 97, minQty: 1, maxQty: 1, rarity: 3 },
    //very rare (%3 chance to draw one of these)
    { name: "Blight Shim", minRarity: 97, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3 },
]

//Array for stone (41.1) (complete) (ready to use)
let logArray = [
    //common (%70 chance to draw one of these)
    { name: "Oak Log", minRarity: 1, maxRarity: 35, minQty: 1, maxQty: 3, rarity: 1 },
    { name: "Birch Log", minRarity: 35, maxRarity: 70, minQty: 1, maxQty: 2, rarity: 1 },
    //uncommon (%24 chance to draw one of these)
    { name: "Hickory Log", minRarity: 70, maxRarity: 82, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Ash Log", minRarity: 82, maxRarity: 94, minQty: 1, maxQty: 1, rarity: 2 },
    //rare (%5.5 chance to draw one of these)
    { name: "Red Hickory Log", minRarity: 94, maxRarity: 99.5, minQty: 1, maxQty: 1, rarity: 3 },
    //very rare (%0.5 chance to draw one of these)
    { name: "Blight Wood", minRarity: 99.5, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3 },
]