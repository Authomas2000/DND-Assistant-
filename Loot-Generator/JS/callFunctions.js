//Function to reset reused variables
function resetVariables() {
    i = 0;
    while (i < infoArray.length){
        infoArray[i].loot = "";
        infoArray[i].Qty = 0;
        totalArray[i].loot = "";
        totalArray[i].Qty = 0;
        let relay = document.getElementById(infoArray[i].name);
        relay.innerHTML = infoArray[i].loot;
        i++
    }
    activeLoot2 = {};
    total.innerHTML = "";
    checkRarity = 0;
    checkRarity2 = 0;
    lootName = "";
    lootName2 = "";
    i = 0;
    i1 = 0;
    i2 = 0;
    i3 = 0;
    i4 = 0;
    i5 = 0;
}

//Random number between values
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

//Random number between values
function getRandomIntBetween(min, max) {
    let value = Math.random() * (max - min) + min;
    return Math.round(value);
}

//Random number generator
function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

//Random number generator
function getMaxInt(array) {
    i = array.length;
    let max = array[i-1].maxRarity;
    return max;
}

//Random number generator
function getNumberForRarity(rarity, i) {
    if (rarity == 1) {
        i = 0;
      } else if (rarity == 2) {
        i = 1;
      } else if (rarity == 3) {
        i = 2;
      } else if (rarity == 4) {
        i = 3;
      } else if (rarity == 5) {
        i = 4;
      } else if (rarity == 6) {
        i = 5;
      } else if (rarity == 7) {
        i = 6;
      } else if (rarity == 8) {
        i = 7;
      } else if (rarity == 9) {
        i = 8;
      } else if (rarity == 10) {
        i = 9;
      }
      return i;
}


