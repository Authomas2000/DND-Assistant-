//Function to reset reused variables
function resetVariables() {
    i = 0;
    while (i < infoArray.length){
        infoArray[i].loot = "";
        infoArray[i].Qty = "";
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

//Random number generator
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//Random number generator
function getMaxInt(array) {
    i = array.length;
    let max = array[i-1].maxRarity;
    return max;
}
