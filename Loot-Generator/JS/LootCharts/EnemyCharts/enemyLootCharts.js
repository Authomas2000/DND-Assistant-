//Zombie Loot Chart (100) (incomplete) (ready to use)
let zombieArray = [
    //Common (%70 chance to draw one of these items) 
    { name: "coins", minRarity: 0, maxRarity: 70, minQty: 1, maxQty: 2, rarity: 3 },

    //Uncommon (%25 chance to draw one of these items) 
    { name: "Iron Dagger", minRarity: 70, maxRarity: 95, minQty: 1, maxQty: 1, rarity: 1 },

    //Rare (%5 chance to draw one of these items) 
    { name: "recipes", minRarity: 95, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3 },
]

//Goblin Loot Chart (100) (incomplete) (ready to use)
let goblinArray = [
    //Common (%80 chance to draw one of these items) 
    { name: "coins", minRarity: 0, maxRarity: 60, minQty: 1, maxQty: 2, rarity: 3 },
    { name: "Iron Scimitar", minRarity: 60, maxRarity: 80, minQty: 1, maxQty: 1, rarity: 1 },

    //Uncommon (%15 chance to draw one of these items) 
    { name: "Bronze Scimitar", minRarity: 80, maxRarity: 85, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Tin Scimitar", minRarity: 85, maxRarity: 90, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Copper Scimitar", minRarity: 90, maxRarity: 95, minQty: 1, maxQty: 1, rarity: 2 },

    //Rare (%5 chance to draw one of these items) 
    { name: "Silver Scimitar", minRarity: 95, maxRarity: 97.5, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "potions", minRarity: 97.5, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3 },
]

//Orc Loot Chart (20) (complete) (ready to use)
let orcArray = [
    //Common (%80 chance to draw one of these items) 
    { name: "coins", minRarity: 0, maxRarity: 60, minQty: 1, maxQty: 3, rarity: 3 },
    { name: "Iron Greataxe", minRarity: 60, maxRarity: 70, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Iron Javelin", minRarity: 70, maxRarity: 80, minQty: 1, maxQty: 2, rarity: 1 },

    //Uncommon (%15 chance to draw one of these items) 
    { name: "Bronze Greataxe", minRarity: 80, maxRarity: 82.5, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Bronze Javelin", minRarity: 82.5, maxRarity: 85, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Tin Greataxe", minRarity: 85, maxRarity: 87.5, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Tin Javelin", minRarity: 87.5, maxRarity: 90, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Copper Greataxe", minRarity: 90, maxRarity: 92.5, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Copper Javelin", minRarity: 92.5, maxRarity: 95, minQty: 1, maxQty: 1, rarity: 2 },

    //Rare (%5 chance to draw one of these items) 
    { name: "Silver Greataxe", minRarity: 95, maxRarity: 96.25, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Silver Javelin", minRarity: 96.25, maxRarity: 97.5, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "potions", minRarity: 97.5, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3 },
]

//Cultist Loot Chart (20) (complete) (ready to use)
let cultistArray = [
    //Common (%80 chance to draw one of these items) 
    { name: "coins", minRarity: 0, maxRarity: 60, minQty: 1, maxQty: 2, rarity: 3 },
    { name: "Silver Belt", minRarity: 60, maxRarity: 62.5, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Iron Scimitar", minRarity: 62.5, maxRarity: 72.5, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Iron Dagger", minRarity: 72.5, maxRarity: 80, minQty: 1, maxQty: 1, rarity: 1 },

    //Uncommon (%15 chancew to draw one of these items) 
    { name: "Bronze Scimitar", minRarity: 80, maxRarity: 82.5, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Bronze Dagger", minRarity: 82.5, maxRarity: 85, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Tin Scimitar", minRarity: 85, maxRarity: 87.5, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Tin Dagger", minRarity: 87.5, maxRarity: 90, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Copper Scimitar", minRarity: 90, maxRarity: 92.5, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Copper Dagger", minRarity: 92.5, maxRarity: 94, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "potions", minRarity: 94, maxRarity: 96.5, minQty: 1, maxQty: 1, rarity: 2 },

    //Rare (%5 chance to draw one of these items) 
    { name: "Silver Dagger", minRarity: 96.5, maxRarity: 96.5, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "magical recipes", minRarity: 97.5, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3 },
]

//Skeleton Loot Chart (20) (incomplete) (ready to use)
let skeletonArray = [
    //Common (%80 chance to draw one of these items) 
    { name: "coins", minRarity: 0, maxRarity: 60, minQty: 1, maxQty: 2, rarity: 3 },
    { name: "Iron Shortsword", minRarity: 60, maxRarity: 70, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Bone Meal", minRarity: 70, maxRarity: 80, minQty: 1, maxQty: 2, rarity: 1 },

    //Uncommon (%15 chance to draw one of these items) 
    { name: "Bronze Shortsword", minRarity: 80, maxRarity: 82.5, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Ash Shortbow", minRarity: 82.5, maxRarity: 85, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Tin Shortsword", minRarity: 85, maxRarity: 87.5, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Oak Shortbow", minRarity: 87.5, maxRarity: 90, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Copper Shortsword", minRarity: 90, maxRarity: 92.5, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Copper Javelin", minRarity: 92.5, maxRarity: 95, minQty: 1, maxQty: 1, rarity: 2 },

    //Rare (%5 chance to draw one of these items) 
    { name: "Silver Greataxe", minRarity: 95, maxRarity: 96.25, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Silver Javelin", minRarity: 96.25, maxRarity: 97.5, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "potions", minRarity: 97.5, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3 },
]