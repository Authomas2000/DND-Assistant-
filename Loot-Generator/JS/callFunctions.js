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
