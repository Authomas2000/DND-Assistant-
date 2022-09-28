//magical recipe Loot Chart (100) (incomplete) (ready to use)
let magicalItemsArray = [
    //Common (%70 chance to draw one of these items)
    { name: "magical worn accessories", minRarity: 0, maxRarity: 35, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "magical odd items", minRarity: 35, maxRarity: 70, minQty: 1, maxQty: 1, rarity: 3 },
    //Uncommon (%20 chance to draw one of these items)
    { name: "magical tools", minRarity: 70, maxRarity: 75, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "magical lures", minRarity: 75, maxRarity: 80, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "magical sentries", minRarity: 80, maxRarity: 85, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "scrolls", minRarity: 85, maxRarity: 90, minQty: 1, maxQty: 1, rarity: 3 },
    //Rare (%10 chance to draw one of these items)
    { name: "magical handles", minRarity: 90, maxRarity: 95, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "magical gems", minRarity: 95, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3 },
]

//magical odd items array (100) (incomplete) (ready to use)
let magicalOddItemsArray = [
    //Common (%80 chance to draw one of these items)
    { name: "Sheep Staff", minRarity: 0, maxRarity: 10, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Lantern of Tracking", minRarity: 10, maxRarity: 20, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Candle of the Deep", minRarity: 20, maxRarity: 30, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Enduring Spell Book", minRarity: 30, maxRarity: 40, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Everbright Lantern", minRarity: 40, maxRarity: 50, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Ersatz Eye", minRarity: 50, maxRarity: 60, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Perfume of Bewitching", minRarity: 60, maxRarity: 70, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Ear Horn of Hearing", minRarity: 70, maxRarity: 80, minQty: 1, maxQty: 1, rarity: 1 },
    //Uncommon (%15 chance to draw one of these items)
    { name: "Alchemy Jug", minRarity: 80, maxRarity: 83, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Inmovable Rod", minRarity: 83, maxRarity: 85, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Decanter of Endless Water", minRarity: 85, maxRarity: 87, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Bag of holding", minRarity: 87, maxRarity: 89, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Stone of Good Luck", minRarity: 89, maxRarity: 91, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Sending Stones", minRarity: 91, maxRarity: 93, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Lantern of Revealing", minRarity: 93, maxRarity: 95, minQty: 1, maxQty: 1, rarity: 2 },
    //Rare (%5 chance to draw one of these items)
    { name: "Vile blood", minRarity: 95, maxRarity: 95.83, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Dimensional Shackles", minRarity: 95.83, maxRarity: 96.66, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Horn of Blasting", minRarity: 96.66, maxRarity: 97.49, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Portable Hole", minRarity: 97.49, maxRarity: 98.32, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Horseshoes of Speed", minRarity: 98.32, maxRarity: 99.15, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Feather Token", minRarity: 99.15, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3 },
]

//Magical Armament Recipes Array (100) (complete) (ready to use)
let magicalWornAccessoriesArray = [
    //Common (%78.5 chance to draw one of these items)
    { name: "Dread Helm", minRarity: 0, maxRarity: 6.5, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Hat of Vermin", minRarity: 6.5, maxRarity: 13, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Hat of Wizardry", minRarity: 13, maxRarity: 19.5, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Wand Sheath", minRarity: 19.5, maxRarity: 26, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Heward's Handy Spice Pouch", minRarity: 26, maxRarity: 32.5, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Clothes of Mending", minRarity: 32.5, maxRarity: 39, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Dark Shard Amulet", minRarity: 39, maxRarity: 45.5, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Cloak of Many Fashions", minRarity: 45.5, maxRarity: 52, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Clockwork Amulet", minRarity: 52, maxRarity: 58.5, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Band of Loyalty", minRarity: 58.5, maxRarity: 65, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Armor of Gleaming", minRarity: 65, maxRarity: 71.5, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Glamerweave clothes", minRarity: 71.5, maxRarity: 78.5, minQty: 1, maxQty: 1, rarity: 1 },
    //Uncommon (%15 chance to draw one of these items)
    { name: "Amulet of the Drunkard", minRarity: 78.5, maxRarity: 80, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Earring of Whisper", minRarity: 80, maxRarity: 81.5, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Boots of Elvenkind", minRarity: 81.5, maxRarity: 83, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Boots of Winterlands", minRarity: 83, maxRarity: 84.5, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Boots of Striding and Springing", minRarity: 84.5, maxRarity: 86, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Amulet of the Devout", minRarity: 86, maxRarity: 87.5, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Amulet of Proof against Detection and Location", minRarity: 87.5, maxRarity: 89, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Winged Boots", minRarity: 89, maxRarity: 89.5, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Nature's Mantle", minRarity: 89.5, maxRarity: 91, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Bracers of Archery", minRarity: 91.5, maxRarity: 93, minQty: 1, maxQty: 1, rarity: 2 },
    //Rare (%5 chance to draw one of these items)
    { name: "Boots of speed", minRarity: 93, maxRarity: 93.31, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Cape of the Mountebank", minRarity: 93.31, maxRarity: 93.62, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Cloak of Displacement", minRarity: 93.62, maxRarity: 93.93, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Belt of Dwarvenkind", minRarity: 93.93, maxRarity: 94.24, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Belt of Hill Giant Strength", minRarity: 94.24, maxRarity: 94.55, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Boots of Levitation", minRarity: 94.55, maxRarity: 94.86, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Bracer of Flying Daggers", minRarity: 94.86, maxRarity: 95.17, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Bridle of Capturing", minRarity: 95.17, maxRarity: 95.48, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Cloak of the Bat", minRarity: 95.48, maxRarity: 95.79, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Hell Hound Cloak", minRarity: 95.79, maxRarity: 96.1, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Helm of Teleportation", minRarity: 96.1, maxRarity: 96.41, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Knaves Eye Patch", minRarity: 96.41, maxRarity: 96.72, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Necklace of Fireballs", minRarity: 96.72, maxRarity: 97.03, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Ring of Animal Influence", minRarity: 97.03, maxRarity: 97.34, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Ring of Feather Falling", minRarity: 97.34, maxRarity: 97.65, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Ring of Evasion", minRarity: 97.65, maxRarity: 98.5, minQty: 1, maxQty: 1, rarity: 3 },
    //Very Rare (%1 chance to draw one of these items)
    { name: "Belt of Stone Giant Strength", minRarity: 98.5, maxRarity: 98.83, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Belt of Fire Giant Strength", minRarity: 98.83, maxRarity: 99.16, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Helm of Brilliance", minRarity: 99.16, maxRarity: 99.5, minQty: 1, maxQty: 1, rarity: 3 },
    //Legendary (%0.5 chance to draw one of these items)
    { name: "Belt of Cloud Giant Strength", minRarity: 99.5, maxRarity: 99.6, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Belt of Storm Giant Strength", minRarity: 99.6, maxRarity: 99.7, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Black Dragon Mask", minRarity: 99.7, maxRarity: 99.8, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Cloak of Invisibility", minRarity: 99.8, maxRarity: 99.9, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Gloves of Soul Catching", minRarity: 99.9, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3 },
]

//Chest Loot Chart (100) (incomplete) (not ready to use)
let magicalToolsArray = [
    { name: "Legend Harvest Pickaxe", minRarity: 1, maxRarity: 33.34, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Legend Harvest Axe", minRarity: 33.34, maxRarity: 63.67, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Legend Harvest Sickle", minRarity: 63.67, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3 },
]

//Magical Lures Recipes Chart (100) (incomplete) (ready to use)
let magicalLuresArray = [
    //common (%90 chance to draw one of these items)
    { name: "Beast Lure", minRarity: 1, maxRarity: 90, minQty: 1, maxQty: 1, rarity: 3 },
    //uncommon (%10 chance to draw one of these items)
    { name: "Dragon Lure", minRarity: 90, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3 },
]

//Magical Sentry Recipes Chart (100) (incomplete) (ready to use)
let magicalSentriesArray = [
    //common (%70 chance to draw one of these items)
    { name: "Fire Sentry", minRarity: 1, maxRarity: 20, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Poison Sentry", minRarity: 20, maxRarity: 40, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Lightning Sentry", minRarity: 40, maxRarity: 55, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Spirit Sentry", minRarity: 55, maxRarity: 70, minQty: 1, maxQty: 1, rarity: 3 },
    //uncommon (%30 chance to draw one of these items)
    { name: "Flame Sentry", minRarity: 70, maxRarity: 80, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Lethal Poison Sentry", minRarity: 80, maxRarity: 90, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Thunder & Lightning Sentry", minRarity: 90, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3 },
]

//Magical gem recipes chart (100) (incomplete) (ready to use)
let magicalGemsArray = [
    //common (%80 chance to draw one of these items)
    { name: "Soul Gem", minRarity: 1, maxRarity: 30, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Quickness Gem (LVL1)", minRarity: 30, maxRarity: 55, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Reenchant Gem (LVL1)", minRarity: 55, maxRarity: 80, minQty: 1, maxQty: 1, rarity: 3 },
    //uncommon (%20 chance to draw one of these items)
    { name: "Quickness Gem (LVL2)", minRarity: 80, maxRarity: 90, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Reenchant Gem (LVL2)", minRarity: 90, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3 },
]

//Magical handle recipes chart (100) (incomplete) (ready to use)
let magicalHandlesArray = [
    //Rare (%60 chance to draw one of these items)
    { name: "Blight Handle", minRarity: 1, maxRarity: 60, minQty: 1, maxQty: 1, rarity: 3 },
    //Rare (%30 chance to draw one of these items)
    { name: "Soul Handle", minRarity: 60, maxRarity: 90, minQty: 1, maxQty: 1, rarity: 3 },
    //Rare (%10 chance to draw one of these items)
    { name: "Dragon Soul Handle", minRarity: 90, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3 },
]

//Magical handle recipes chart (100) (incomplete) (ready to use)
let scrollArray = [
    //Rare (%60 chance to draw one of these items)
    { name: "Poison Scroll", minRarity: 1, maxRarity: 20, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Fire Scroll", minRarity: 20, maxRarity: 40, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Lightning Scroll", minRarity: 40, maxRarity: 60, minQty: 1, maxQty: 1, rarity: 1 },
    //Rare (%30 chance to draw one of these items)
    { name: "Speed Scroll", minRarity: 60, maxRarity: 75, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Soul Scroll", minRarity: 75, maxRarity: 90, minQty: 1, maxQty: 1, rarity: 2 },
    //Rare (%10 chance to draw one of these items)
    { name: "Dragon Scroll", minRarity: 90, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3 },
]