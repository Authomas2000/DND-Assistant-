//Chart Selections
let chartArray = [
    //--------------------------------------------------------------------------------------------------------------------------
    //Loot Generation

    //Animal Charts

    //Enemy Charts
    { name: "zombie", lootDesc: "Corpse ", title: "Zombie Loot Findings:", chart: zombieArray },
    { name: "goblin", lootDesc: "Corpse ", title: "Goblin Loot Findings:", chart: goblinArray },
    { name: "orc", lootDesc: "Corpse ", title: "Orc Loot Findings:", chart: orcArray },
    { name: "cultist", lootDesc: "Corpse ", title: "Cultist Findings:", chart: cultistArray },
    { name: "skeleton", lootDesc: "Corpse ", title: "skeleton Findings:", chart: skeletonArray },
    //{ name: "forest goblin", lootDesc: "Corpse ", title: "Goblin Findings:", chart: forestGoblinArray },
    //{ name: "forest orc", lootDesc: "Corpse ", title: "Orc Loot Findings:", chart: forestOrcArray },
    //{ name: "forest cultist", lootDesc: "Corpse ", title: "Cultist Findings:", chart: forestCultistArray },
    //{ name: "forest skeleton", lootDesc: "Corpse ", title: "skeleton Findings:", chart: forestSkeletonArray },

    //Material Charts
    { name: "coins", lootDesc: "coin ", title: "Coin Findings:", chart: coinArray },
    { name: "gems", lootDesc: "coin ", title: "Gem Findings:", chart: gemArray },
    { name: "bars", lootDesc: "Bar ", title: "Metal Ore Findings:", chart: barArray },
    { name: "ores", lootDesc: "Ore ", title: "Metal Bar Findings:", chart: oreArray },
    { name: "stone", lootDesc: "Stone ", title: "Stone Findings:", chart: stoneArray },
    { name: "leather", lootDesc: "Leather ", title: "Leather Findings:", chart: leatherArray },
    { name: "planks", lootDesc: "Plank ", title: "Plank Findings:", chart: plankArray },
    { name: "logs", lootDesc: "Log ", title: "Long Findings:", chart: logArray },
    //{ name: "meat", lootDesc: "Meat ", title: "Meat Findings:", chart: meatArray },
    //{ name: "cave meat", lootDesc: "Meat ", title: "Meat Findings:", chart: caveMeatArray },
    //{ name: "forest pelts", lootDesc: "Pelt ", title: "Pelt Findings:", chart: forestPeltsArray },
    //{ name: "forest claws", lootDesc: "Claw ", title: "Claw Findings:", chart: forestClawsArray },
    //{ name: "grassland pelts", lootDesc: "Pelt ", title: "Pelt Findings:", chart: grasslandPeltsArray },
    //{ name: "grassland claws", lootDesc: "Claw ", title: "Claw Findings:", chart: grasslandClawsArray },
    //{ name: "cave creature drops", lootDesc: "Item ", title: "Item Findings:", chart: caveCreatureDropArray },

    //Magic Item Charts
    //{ name: "magical items", lootDesc: "Item ", title: "Item Findings:", chart: magicalItemsArray },
    //{ name: "magical odd items", lootDesc: "Item ", title: "Item Findings:", chart: magicalOddItemsArray },
    //{ name: "magical worn accessories", lootDesc: "Accessory ", title: "Accessory Findings:", chart: magicalWornAccessorieArray },
    //{ name: "magical melee weapons", lootDesc: "Weapon ", title: "Weapon Findings:", chart: magicalMeleeWeaponsArray },
    //{ name: "magical ranged weapons", lootDesc: "Weapon ", title: "Weapon Findings:", chart: magicalRangedWeaponsArray },
    //{ name: "magical books", lootDesc: "Book ", title: "Book Findings:", chart: magicalBookArray },
    //{ name: "dragon shouts", lootDesc: "Shout ", title: "Shout Findings:", chart: dragonShoutsArray },
    //{ name: "scrolls", lootDesc: "Scroll ", title: "Scroll Findings:", chart: scrollArray },

    //Plant Life Charts
    //{ name: "plants", lootDesc: "Plant ", title: "Plant Findings:", chart: plantArray },
    //{ name: "forest plants", lootDesc: "Plant ", title: "Plant Findings:", chart: forestPlantArray },
    //{ name: "grassland plants", lootDesc: "Plant ", title: "Plant Findings:", chart: grasslandPlantArray },

    //Recipe Charts
    { name: "weapon recipes", lootDesc: "Recipe ", title: "Recipe Findings:", chart: weaponRecipesArray },
    { name: "small weapon recipes", lootDesc: "recipe ", title: "recipe Findings:", chart: smallWeaponRecipesArray },
    { name: "medium weapon recipes", lootDesc: "recipe ", title: "recipe Findings:", chart: mediumWeaponRecipesArray },
    { name: "big weapon recipes", lootDesc: "recipe ", title: "recipe Findings:", chart: bigWeaponRecipesArray },
    { name: "magical recipes", lootDesc: "Recipe ", title: "Recipe Findings:", chart: magicalRecipesArray },
    { name: "magical tool recipes", lootDesc: "Recipe ", title: "Recipe Findings:", chart: magicalToolRecipesArray },
    { name: "magical armament recipes", lootDesc: "Recipe ", title: "Recipe Findings:", chart: magicalArmamentRecipesArray },
    { name: "magical lure recipes", lootDesc: "Recipe ", title: "Recipe Findings:", chart: magicalLureRecipesArray },
    { name: "magical sentry recipes", lootDesc: "Recipe ", title: "Recipe Findings:", chart: magicalSentryRecipesArray },
    { name: "magical gem recipes", lootDesc: "Recipe ", title: "Recipe Findings:", chart: magicalGemsRecipesArray },
    { name: "magical handle recipes", lootDesc: "Recipe ", title: "Recipe Findings:", chart: magicalHandleRecipesArray },
    { name: "soul magic recipes", lootDesc: "Recipe ", title: "Recipe Findings:", chart: soulMagicRecipesArray },
    { name: "lost magic recipes", lootDesc: "Recipe ", title: "Recipe Findings:", chart: lostMagicRecipesArray },
    //{ name: "weapon enchantment recipes", lootDesc: "recipe ", title: "recipe Findings:", chart: weaponEnchantmentRecipesArray },
    //{ name: "armor enchantment recipes", lootDesc: "recipe ", title: "recipe Findings:", chart: armorEnchantmentRecipesArray },

    //Storage Charts
    //{ name: "book", lootDesc: "Book ", title: "Book Loot Findings:", chart: bookArray },
    //{ name: "sorcerers pouch", lootDesc: "Pouch ", title: "Pouch Loot Findings:", chart: sorcererPouchArray },
    //{ name: "pouch", lootDesc: "Pouch ", title: "Pouch Loot Findings:", chart: pouchArray },
    //{ name: "chest", lootDesc: "Item ", title: "Chest Loot Findings:", chart: chestArray },
    //{ name: "big chest", lootDesc: "Item ", title: "Chest Loot Findings:", chart: bigChestArray },
    //{ name: "skeleton chest", lootDesc: "Item ", title: "Chest Loot Findings:", chart: skeletonChestArray },
    //{ name: "lich chest", lootDesc: "Item ", title: "Chest Loot Findings:", chart: lichChestArray },
    //{ name: "dragon chest", lootDesc: "Item ", title: "Chest Loot Findings:", chart: dragonChestArray },
    //{ name: "barrel", lootDesc: "Barrel ", title: "barrel Loot Findings:", chart: barrelArray },
    //{ name: "big barrel", lootDesc: "Barrel ", title: "barrel Loot Findings:", chart: bigBarrelArray },
    //{ name: "forest barrel", lootDesc: "Barrel ", title: "Forest barrel Loot Findings:", chart: forestBarrelArray },
    //{ name: "forest big barrel", lootDesc: "Barrel ", title: "Forest Big barrel Loot Findings:", chart: forestBigBarrelArray },
    //{ name: "cave barrel", lootDesc: "Barrel ", title: "Cave barrel Loot Findings:", chart: caveBarrelArray },
    //{ name: "cave big barrel", lootDesc: "Barrel ", title: "Cave Big barrel Loot Findings:", chart: caveBigBarrelArray },
    //{ name: "grassland barrel", lootDesc: "Barrel ", title: "Cave barrel Loot Findings:", chart: grasslandBarrelArray },

    //Weapon Charts
    { name: "weapons", lootDesc: "recipe ", title: "recipe Findings:", chart: smallWeaponsArray },
    { name: "small weapons", lootDesc: "recipe ", title: "recipe Findings:", chart: smallWeaponsArray },
    { name: "medium weapons", lootDesc: "recipe ", title: "recipe Findings:", chart: mediumWeaponsArray },
    { name: "big weapons", lootDesc: "recipe ", title: "recipe Findings:", chart: bigWeaponsArray },

    //Other Charts
    //{ name: "liquids", lootDesc: "Liquid ", title: "Liquid Findings:", chart: liquidsArray },
    //{ name: "common liquids", lootDesc: "Liquid ", title: "Liquid Findings:", chart: commonLiquidsArray },
    //{ name: "drinks", lootDesc: "Liquid ", title: "Liquid Findings:", chart: liquidsArray },
]