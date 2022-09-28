//weapon Recipes Loot Chart (100) (incomplete) (ready to use)
let weaponRecipesArray = [
    //Common (%60 chance to draw one of these items)
    { name: "small weapon recipes", minRarity: 1, maxRarity: 33.3, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "medium weapon recipes", minRarity: 33.3, maxRarity: 66.6, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "big weapon recipes", minRarity: 66.6, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3 },
]
//Array for small weapons (measured by 100) (complete)
let smallWeaponRecipesArray = [
    // Level 1 weapons (%94 chance to draw one of these items) 
    { name: "Oak Hand Crossbow Recipe", minRarity: 1, maxRarity: 25, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Iron Dagger Recipe", minRarity: 25, maxRarity: 65.4, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Iron Hand Axe Recipe", minRarity: 65.4, maxRarity: 94, minQty: 1, maxQty: 1, rarity: 1 },

    // Level 2 weapons (%5 chance to draw one of these items) 
    { name: "Hickory Crossbow Recipe", minRarity: 94, maxRarity: 95, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Mithril Dagger Recipe", minRarity: 95, maxRarity: 97, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Mithril Hand Axe Recipe", minRarity: 97, maxRarity: 99, minQty: 1, maxQty: 1, rarity: 2 },

    // Level 3 weapons (%1 chance to draw one of these items) 
    { name: "Red Hickory Crossbow Recipe", minRarity: 99, maxRarity: 99.33, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Admontite Dagger Recipe", minRarity: 99.33, maxRarity: 99.66, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Admontite Hand Axe Recipe", minRarity: 99.66, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3 },
]

//Array for medium weapons (measured by 100) (complete)
let mediumWeaponRecipesArray = [
    // Level 1 weapons (%94 chance to draw one of these items) 
    { name: "Oak Club Recipe", minRarity: 1, maxRarity: 9.4, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Oak Short Bow Recipe", minRarity: 9.4, maxRarity: 18.8, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Oak Light Crossbow Recipe", minRarity: 18.8, maxRarity: 28.2, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Iron Short Sword Recipe", minRarity: 28.2, maxRarity: 37.6, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Iron Scimitar Recipe", minRarity: 37.6, maxRarity: 47, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Iron Rapier Recipe", minRarity: 47, maxRarity: 56.4, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Iron Mace Recipe", minRarity: 56.4, maxRarity: 65.8, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Iron Spear Recipe", minRarity: 65.8, maxRarity: 75.2, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Iron Javelin Recipe", minRarity: 75.2, maxRarity: 84.6, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Iron Trident Recipe", minRarity: 84.6, maxRarity: 94, minQty: 1, maxQty: 1, rarity: 1 },

    // Level 2 weapons (%5 chance to draw one of these items) 
    { name: "Hickory Club Recipe", minRarity: 94, maxRarity: 94.5, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Hickory Short Bow Recipe", minRarity: 94.5, maxRarity: 95, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Hickory Light Crossbow Recipe", minRarity: 95, maxRarity: 95.5, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Mithril Short Sword Recipe", minRarity: 95.5, maxRarity: 96, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Mithril Scimitar Recipe", minRarity: 96, maxRarity: 96.5, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Mithril Rapier Recipe", minRarity: 96.5, maxRarity: 97, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Mithril Mace Recipe", minRarity: 97, maxRarity: 97.5, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Mithril Spear Recipe", minRarity: 97.5, maxRarity: 98, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Mithril Javelin Recipe", minRarity: 98, maxRarity: 98.5, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Mithril Trident Recipe", minRarity: 98.5, maxRarity: 99, minQty: 1, maxQty: 1, rarity: 2 },

    // Level 3 weapons (%1 chance to draw one of these items) 
    { name: "Red Hickory Club Recipe", minRarity: 99, maxRarity: 99.1, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Red Hickory Short Bow Recipe", minRarity: 99.1, maxRarity: 99.2, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Red Hickory Light Crossbow Recipe", minRarity: 99.2, maxRarity: 99.3, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Admontite Short Sword Recipe", minRarity: 99.3, maxRarity: 99.4, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Admontite Scimitar Recipe", minRarity: 99.4, maxRarity: 99.5, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Admontite Rapier Recipe", minRarity: 99.5, maxRarity: 99.6, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Admontite Mace Recipe", minRarity: 99.6, maxRarity: 99.7, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Admontite Spear Recipe", minRarity: 99.7, maxRarity: 99.8, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Admontite Javelin Recipe", minRarity: 99.8, maxRarity: 99.9, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Admontite Trident Recipe", minRarity: 99.9, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3 },
]

//Array for big weapons (measured by 100) (complete) (ready to use)
let bigWeaponRecipesArray = [
    // Level 1 weapons (%94 chance to draw one of these items)
    { name: "Oak Long Bow Recipe", minRarity: 1, maxRarity: 18.8, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Oak Heavy Crossbow Recipe", minRarity: 18.8, maxRarity: 37.6, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Iron Long Sword Recipe", minRarity: 37.6, maxRarity: 56.4, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Iron Greataxe Recipe", minRarity: 56.4, maxRarity: 75.2, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Iron Morning Star Recipe", minRarity: 75.2, maxRarity: 94, minQty: 1, maxQty: 1, rarity: 1 },

    // Level 2 weapons (%5 chance to draw one of these items)
    { name: "Hickory Long Bow Recipe", minRarity: 94, maxRarity: 95, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Hickory Heavy Crossbow Recipe", minRarity: 95, maxRarity: 96, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Mithril Long Sword Recipe", minRarity: 96, maxRarity: 97, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Mithril Greataxe Recipe", minRarity: 97, maxRarity: 98, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Mithril Morning Star Recipe", minRarity: 98, maxRarity: 99, minQty: 1, maxQty: 1, rarity: 2 },

    // Level 3 weapons (%1 chance to draw one of these items)
    { name: "Red Hickory Long Bow Recipe", minRarity: 99, maxRarity: 99.2, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Red Hickory Heavy Crossbow Recipe", minRarity: 99.2, maxRarity: 99.4, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Admontite Long Sword Recipe", minRarity: 99.4, maxRarity: 99.6, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Admontite Greataxe Recipe", minRarity: 99.6, maxRarity: 99.8, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Admontite Morning Star Recipe", minRarity: 99.8, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3  }
]