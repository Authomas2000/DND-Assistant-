//potions Loot Chart (100) (incomplete) (ready to use)
let potionsArray = [
    //Common (%60 chance to draw one of these items)
    { name: "Potion of Healing", minRarity: 1, maxRarity: 60, minQty: 1, maxQty: 3, rarity: 1 },
    //Uncommon (%30 chance to draw one of these items)
    { name: "Potion of Climbing", minRarity: 60, maxRarity: 63.75, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Potion of Greater Healing", minRarity: 63.75, maxRarity: 67.5, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Philter of Love", minRarity: 67.5, maxRarity: 71.25, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Potion of Hill Giant Strength", minRarity: 71.25, maxRarity: 75, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Potion of Poison", minRarity: 75, maxRarity: 78.75, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Potion of Resistance", minRarity: 78.75, maxRarity: 82.5, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Potion of Water Breathing", minRarity: 82.5, maxRarity: 86.25, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Potion of Fire Breath", minRarity: 86.25, maxRarity: 90, minQty: 1, maxQty: 1, rarity: 1 },
    //Rare (%7 chance to draw one of these items)
    { name: "Potion of Superior Healing", minRarity: 90, maxRarity: 90.875, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Elixir of Health", minRarity: 90.875, maxRarity: 91.75, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Potion of Frost Giant Strength", minRarity: 91.75, maxRarity: 92.625, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Potion of Heroism", minRarity: 92.625, maxRarity: 93.5, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Potion of Invulnerability", minRarity: 93.5, maxRarity: 94.375, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Potion of Mind Reading", minRarity: 94.375, maxRarity: 95.25, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Potion of Stone Giant Strength", minRarity: 95.25, maxRarity: 96.125, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Potion of Fire Giant Strength", minRarity: 96.125, maxRarity: 97, minQty: 1, maxQty: 1, rarity: 2 },
    //Very Rare (%2.8 chance to draw one of these items)
    { name: "Potion of Supreme Healing", minRarity: 97, maxRarity: 97.466, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Oil of Sharpness", minRarity: 97.466, maxRarity: 97.932, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Potion of Cloud Giant Strength", minRarity: 97.932, maxRarity: 98.398, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Potion of Invisibility", minRarity: 98.398, maxRarity: 98.864, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Potion of Vitality", minRarity: 98.864, maxRarity: 99.33, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Potion of Flying", minRarity: 99.33, maxRarity: 99.8, minQty: 1, maxQty: 1, rarity: 3 },
    //Legendary (%0.2 chance to draw one of these items)
    { name: "Potion of Storm Giant Strength", minRarity: 99.8, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3 },
]