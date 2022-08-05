//magical recipe Loot Chart (100) (incomplete) (ready to use)
let magicalItemsArray = [
    //Common (%60 chance to draw one of these items)
    { name: "magical gems", minRarity: 1, maxRarity: 50, minQty: 1, maxQty: 1, rarity: 3 },
    //Uncommon (%20 chance to draw one of these items)
    //{ name: "magical worn accessories", minRarity: 60, maxRarity: 70, minQty: 1, maxQty: 1, rarity: 3 },
    //Rare (%20 chance to draw one of these items)
    { name: "magical handles", minRarity: 50, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "magical tools", minRarity: 150, maxRarity: 200, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "magical lures", minRarity: 200, maxRarity: 250, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "magical sentries", minRarity: 250, maxRarity: 300, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "magical gems", minRarity: 300, maxRarity: 350, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "scrolls", minRarity: 350, maxRarity: 400, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "magical odd items", minRarity: 400, maxRarity: 450, minQty: 1, maxQty: 1, rarity: 3 },
]

//magical odd items array (100) (incomplete) (not ready to use)
let magicalOddItemsArray = [
    //Common (%80 chance to draw one of these items)
    { name: "Sheep Staff", minRarity: 1, maxRarity: 50, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Lantern of Tracking", minRarity: 1, maxRarity: 50, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Candle of the Deep", minRarity: 1, maxRarity: 50, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Enduring Spell Book", minRarity: 1, maxRarity: 50, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Everbright Lantern", minRarity: 1, maxRarity: 50, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Ersatz Eye", minRarity: 1, maxRarity: 50, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Perfume of Bewitching", minRarity: 1, maxRarity: 50, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Ear Horn of Hearing", minRarity: 1, maxRarity: 50, minQty: 1, maxQty: 1, rarity: 3 },
    //Uncommon (%15 chance to draw one of these items)
    { name: "Inmovable Rod", minRarity: 1, maxRarity: 50, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Decanter of Endless Water", minRarity: 1, maxRarity: 50, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Bag of holding", minRarity: 1, maxRarity: 50, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Stone of Good Luck", minRarity: 1, maxRarity: 50, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Sending Stones", minRarity: 1, maxRarity: 50, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Lantern of Revealing", minRarity: 1, maxRarity: 50, minQty: 1, maxQty: 1, rarity: 3 },
    //Rare (%5 chance to draw one of these items)
    { name: "Vile blood", minRarity: 50, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Dimensional Shackles", minRarity: 150, maxRarity: 200, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Horn of Blasting", minRarity: 200, maxRarity: 250, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Portable Hole", minRarity: 250, maxRarity: 300, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Horseshoes of Speed", minRarity: 300, maxRarity: 350, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Feather Token", minRarity: 350, maxRarity: 400, minQty: 1, maxQty: 1, rarity: 3 },
]

//Magical Armament Recipes Array (100) (incomplete) (ready to use)
let magicalWornAccessoriesArray = [
    //Common (%78.5 chance to draw one of these items)
    { name: "Dread Helm", minRarity: 0, maxRarity: 7.375, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Hat of Vermin", minRarity: 7.375, maxRarity: 14.75, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Hat of Wizardry", minRarity: 14.75, maxRarity: 22.125, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Wand Sheath", minRarity: 22.125, maxRarity: 29.5, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Heward's Handy Spice Pouch", minRarity: 29.5, maxRarity: 36.875, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Clothes of Mending", minRarity: 36.875, maxRarity: 44.25, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Dark Shard Amulet", minRarity: 44.25, maxRarity: 51.625, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Cloak of Many Fashions", minRarity: 51.625, maxRarity: 59, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Clockwork Amulet", minRarity: 59, maxRarity: 66.375, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Band of Loyalty", minRarity: 66.375, maxRarity: 73.75, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Armor of Gleaming", minRarity: 73.75, maxRarity: 81.125, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Glamerweave clothes", minRarity: 81.125, maxRarity: 88.5, minQty: 1, maxQty: 1, rarity: 1 },
    //Uncommon (%15 chance to draw one of these items)
    { name: "Alchemy Jug", minRarity: 88.5, maxRarity: 90.5, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Amulet of the Drunkard", minRarity: 90.5, maxRarity: 92.5, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Earring of Whisper", minRarity: 92.5, maxRarity: 94.5, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Boots of Elvenkind", minRarity: 94.5, maxRarity: 96.5, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Boots of Winterlands", minRarity: 96.5, maxRarity: 97.5, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Boots of Striding and Springing", minRarity: 97.5, maxRarity: 98.5, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Amulet of the Devout", minRarity: 98.5, maxRarity: 50, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Amulet of Proof against Detection and Location", minRarity: 1, maxRarity: 50, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Winged Boots", minRarity: 1, maxRarity: 50, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Nature's Mantle", minRarity: 1, maxRarity: 50, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Bracers of Archery", minRarity: 1, maxRarity: 50, minQty: 1, maxQty: 1, rarity: 2 },
    //Rare (%5 chance to draw one of these items)
    { name: "Boots of speed", minRarity: 50, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Cape of the Mountebank", minRarity: 150, maxRarity: 200, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Cloak of Displacement", minRarity: 200, maxRarity: 250, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Belt of Dwarvenkind", minRarity: 250, maxRarity: 300, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Belt of Hill Giant Strength", minRarity: 300, maxRarity: 350, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Boots of Levitation", minRarity: 350, maxRarity: 400, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Bracer of Flying Daggers", minRarity: 350, maxRarity: 400, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Bridle of Capturing", minRarity: 350, maxRarity: 400, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Cloak of the Bat", minRarity: 350, maxRarity: 400, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Hell Hound Cloak", minRarity: 350, maxRarity: 400, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Helm of Teleportation", minRarity: 350, maxRarity: 400, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Knaves Eye Patch", minRarity: 350, maxRarity: 400, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Necklace of Fireballs", minRarity: 350, maxRarity: 400, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Ring of Animal Influence", minRarity: 350, maxRarity: 400, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Ring of Feather Falling", minRarity: 350, maxRarity: 400, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Ring of Evasion", minRarity: 350, maxRarity: 400, minQty: 1, maxQty: 1, rarity: 3 },
    //Very Rare (%1 chance to draw one of these items)
    { name: "Belt of Stone Giant Strength", minRarity: 50, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Belt of Fire Giant Strength", minRarity: 150, maxRarity: 200, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Helm of Brilliance", minRarity: 200, maxRarity: 250, minQty: 1, maxQty: 1, rarity: 3 },
    //Lengendary (%0.5 chance to draw one of these items)
    { name: "Belt of Cloud Giant Strength", minRarity: 50, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Belt of Storm Giant Strength", minRarity: 150, maxRarity: 200, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Black Dragon Mask", minRarity: 200, maxRarity: 250, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Cloak of Invisibility", minRarity: 250, maxRarity: 300, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Gloves of Soul Catching", minRarity: 300, maxRarity: 350, minQty: 1, maxQty: 1, rarity: 3 },
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