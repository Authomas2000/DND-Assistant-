//Zombie Loot Chart (100) (incomplete) (ready to use)
let zombieArray = [
    { name: "Silver Pieces", minRarity: 10, maxRarity: 50, moreQty: 5},
    { name: "Severed Arm ", minRarity: 50, maxRarity: 90, moreQty: 2},
    { name: "", minRarity: 90, maxRarity: 100, moreQty: 0}
]

//Goblin Loot Chart (100) (incomplete) (ready to use)
let goblinArray = [
    //Common (%80 chance to draw one of these items) 
    { name: "Silver Pieces", minRarity: 0, maxRarity: 60, moreQty: 15},
    { name: "Iron Scimitar", minRarity: 60, maxRarity: 80, moreQty: 1},

    //Uncommon (%15 chance to draw one of these items) 
    { name: "Bronze Scimitar", minRarity: 80, maxRarity: 85, moreQty: 1},
    { name: "Tin Scimitar", minRarity: 85, maxRarity: 90, moreQty: 1},
    { name: "Copper Scimitar", minRarity: 90, maxRarity: 95, moreQty: 1},

    //Rare (%5 chance to draw one of these items) 
    { name: "Silver Scimitar", minRarity: 95, maxRarity: 97.5, moreQty: 1},
    { name: "potions", minRarity: 97.5, maxRarity: 100, moreQty: 1},
]

//Goblin Loot Chart (20) (incomplete) (ready to use)
let orcArray = [
    //Common (%80 chance to draw one of these items) 
    { name: "coins", minRarity: 1, maxRarity: 60, moreQty: 2},
    { name: "Iron Greataxe", minRarity: 60, maxRarity: 70, moreQty: 1},
    { name: "Iron Javelin", minRarity: 70, maxRarity: 80, moreQty: 2},

    //Uncommon (%15 chance to draw one of these items) 
    { name: "Bronze Greataxe", minRarity: 80, maxRarity: 82.5, moreQty: 1},
    { name: "Bronze Javelin", minRarity: 82.5, maxRarity: 85, moreQty: 1},
    { name: "Tin Greataxe", minRarity: 85, maxRarity: 87.5, moreQty: 1},
    { name: "Tin Javelin", minRarity: 87.5, maxRarity: 90, moreQty: 1},
    { name: "Copper Greataxe", minRarity: 90, maxRarity: 92.5, moreQty: 1},
    { name: "Copper Javelin", minRarity: 92.5, maxRarity: 95, moreQty: 1},

    //Rare (%5 chance to draw one of these items) 
    { name: "Silver Greataxe", minRarity: 95, maxRarity: 96.25, moreQty: 1},
    { name: "Silver Javelin", minRarity: 96.25, maxRarity: 97.5, moreQty: 1},
    { name: "potions", minRarity: 97.5, maxRarity: 100, moreQty: 1},
]

//Goblin Loot Chart (20) (complete) (ready to use)
let cultistArray = [
    //Common (%80 chance to draw one of these items) 
    { name: "Silver Pieces", minRarity: 1, maxRarity: 60, moreQty: 12},
    { name: "Silver Belt", minRarity: 60, maxRarity: 62.5, moreQty: 1},
    { name: "Iron Scimitar", minRarity: 62.5, maxRarity: 72.5, moreQty: 1},
    { name: "Iron Dagger", minRarity: 72.5, maxRarity: 80, moreQty: 1},

    //Uncommon (%15 chancew to draw one of these items) 
    { name: "Bronze Scimitar", minRarity: 80, maxRarity: 82.5, moreQty: 1},
    { name: "Bronze Dagger", minRarity: 82.5, maxRarity: 85, moreQty: 1},
    { name: "Tin Scimitar", minRarity: 85, maxRarity: 87.5, moreQty: 1},
    { name: "Tin Dagger", minRarity: 87.5, maxRarity: 90, moreQty: 1},
    { name: "Copper Scimitar", minRarity: 90, maxRarity: 92.5, moreQty: 1},
    { name: "Copper Dagger", minRarity: 92.5, maxRarity: 95, moreQty: 1},
    { name: "potions", minRarity: 95, maxRarity: 97.5, moreQty: 1},

    //Rare (%5 chance to draw one of these items) 
    { name: "Silver Dagger", minRarity: 95, maxRarity: 97.5, moreQty: 1},
    { name: "magical recipes", minRarity: 97.5, maxRarity: 100, moreQty: 1},
]

//Goblin Loot Chart (20) (incomplete) (ready to use)
let skeletonArray = [
    //Common (%80 chance to draw one of these items) 
    { name: "Silver Pieces", minRarity: 1, maxRarity: 60, moreQty: 15},
    { name: "Iron Shortsword", minRarity: 60, maxRarity: 70, moreQty: 1},
    { name: "Bone Meal", minRarity: 70, maxRarity: 80, moreQty: 2},

    //Uncommon (%15 chance to draw one of these items) 
    { name: "Bronze Shortsword", minRarity: 80, maxRarity: 82.5, moreQty: 1},
    { name: "Ash Shortbow", minRarity: 82.5, maxRarity: 85, moreQty: 1},
    { name: "Tin Shortsword", minRarity: 85, maxRarity: 87.5, moreQty: 1},
    { name: "Oak Shortbow", minRarity: 87.5, maxRarity: 90, moreQty: 1},
    { name: "Copper Shortsword", minRarity: 90, maxRarity: 92.5, moreQty: 1},
    { name: "Copper Javelin", minRarity: 92.5, maxRarity: 95, moreQty: 1},

    //Rare (%5 chance to draw one of these items) 
    { name: "Silver Greataxe", minRarity: 95, maxRarity: 96.25, moreQty: 1},
    { name: "Silver Javelin", minRarity: 96.25, maxRarity: 97.5, moreQty: 1},
    { name: "potions", minRarity: 97.5, maxRarity: 100, moreQty: 1},    
]