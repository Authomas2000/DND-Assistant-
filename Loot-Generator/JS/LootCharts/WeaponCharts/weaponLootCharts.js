//Array for small weapons (measured by 100) (complete)
let smallWeaponsArray = [
    // Level 1 weapons (%94 chance to draw one of these items) 
    { name: "Oak Hand Crossbow", minRarity: 1, maxRarity: 25, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Iron Dagger", minRarity: 25, maxRarity: 65.4, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Iron Hand Axe", minRarity: 65.4, maxRarity: 94, minQty: 1, maxQty: 1, rarity: 1 },

    // Level 2 weapons (%5 chance to draw one of these items) 
    { name: "Hickory Crossbow", minRarity: 94, maxRarity: 95, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Mithril Dagger", minRarity: 95, maxRarity: 97, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Mithril Hand Axe", minRarity: 97, maxRarity: 99, minQty: 1, maxQty: 1, rarity: 2 },

    // Level 3 weapons (%1 chance to draw one of these items) 
    { name: "Red Hickory Crossbow", minRarity: 99, maxRarity: 99.33, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Admontite Dagger", minRarity: 99.33, maxRarity: 99.66, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Admontite Hand Axe", minRarity: 99.66, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3 },
]

//Array for medium weapons (measured by 100) (complete)
let mediumWeaponsArray = [
    // Level 1 weapons (%94 chance to draw one of these items) 
    { name: "Oak Club", minRarity: 1, maxRarity: 9.4, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Oak Short Bow", minRarity: 9.4, maxRarity: 18.8, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Oak Light Crossbow", minRarity: 18.8, maxRarity: 28.2, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Iron Short Sword", minRarity: 28.2, maxRarity: 37.6, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Iron Scimitar", minRarity: 37.6, maxRarity: 47, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Iron Rapier", minRarity: 47, maxRarity: 56.4, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Iron Mace", minRarity: 56.4, maxRarity: 65.8, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Iron Spear", minRarity: 65.8, maxRarity: 75.2, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Iron Javelin", minRarity: 75.2, maxRarity: 84.6, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Iron Trident", minRarity: 84.6, maxRarity: 94, minQty: 1, maxQty: 1, rarity: 1 },

    // Level 2 weapons (%5 chance to draw one of these items) 
    { name: "Hickory Club", minRarity: 94, maxRarity: 94.5, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Hickory Short Bow", minRarity: 94.5, maxRarity: 95, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Hickory Light Crossbow", minRarity: 95, maxRarity: 95.5, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Mithril Short Sword", minRarity: 95.5, maxRarity: 96, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Mithril Scimitar", minRarity: 96, maxRarity: 96.5, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Mithril Rapier", minRarity: 96.5, maxRarity: 97, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Mithril Mace", minRarity: 97, maxRarity: 97.5, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Mithril Spear", minRarity: 97.5, maxRarity: 98, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Mithril Javelin", minRarity: 98, maxRarity: 98.5, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Mithril Trident", minRarity: 98.5, maxRarity: 99, minQty: 1, maxQty: 1, rarity: 2 },

    // Level 3 weapons (%1 chance to draw one of these items) 
    { name: "Red Hickory Club", minRarity: 99, maxRarity: 99.1, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Red Hickory Short Bow", minRarity: 99.1, maxRarity: 99.2, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Red Hickory Light Crossbow", minRarity: 99.2, maxRarity: 99.3, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Admontite Short Sword", minRarity: 99.3, maxRarity: 99.4, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Admontite Scimitar", minRarity: 99.4, maxRarity: 99.5, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Admontite Rapier", minRarity: 99.5, maxRarity: 99.6, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Admontite Mace", minRarity: 99.6, maxRarity: 99.7, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Admontite Spear", minRarity: 99.7, maxRarity: 99.8, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Admontite Javelin", minRarity: 99.8, maxRarity: 99.9, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Admontite Trident", minRarity: 99.9, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3 },
]

//Array for big weapons (measured by 100) (complete) (ready to use)
let bigWeaponsArray = [
    // Level 1 weapons (%94 chance to draw one of these items)
    { name: "Oak Long Bow", minRarity: 1, maxRarity: 18.8, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Oak Heavy Crossbow", minRarity: 18.8, maxRarity: 37.6, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Iron Long Sword", minRarity: 37.6, maxRarity: 56.4, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Iron Greataxe", minRarity: 56.4, maxRarity: 75.2, minQty: 1, maxQty: 1, rarity: 1 },
    { name: "Iron Morning Star", minRarity: 75.2, maxRarity: 94, minQty: 1, maxQty: 1, rarity: 1 },

    // Level 2 weapons (%5 chance to draw one of these items)
    { name: "Hickory Long Bow", minRarity: 94, maxRarity: 95, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Hickory Heavy Crossbow", minRarity: 95, maxRarity: 96, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Mithril Long Sword", minRarity: 96, maxRarity: 97, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Mithril Greataxe", minRarity: 97, maxRarity: 98, minQty: 1, maxQty: 1, rarity: 2 },
    { name: "Mithril Morning Star", minRarity: 98, maxRarity: 99, minQty: 1, maxQty: 1, rarity: 2 },

    // Level 3 weapons (%1 chance to draw one of these items)
    { name: "Red Hickory Long Bow", minRarity: 99, maxRarity: 99.2, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Red Hickory Heavy Crossbow", minRarity: 99.2, maxRarity: 99.4, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Admontite Long Sword", minRarity: 99.4, maxRarity: 99.6, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Admontite Greataxe", minRarity: 99.6, maxRarity: 99.8, minQty: 1, maxQty: 1, rarity: 3 },
    { name: "Admontite Morning Star", minRarity: 99.8, maxRarity: 100, minQty: 1, maxQty: 1, rarity: 3  }
]