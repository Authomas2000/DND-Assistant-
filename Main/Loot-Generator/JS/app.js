//Dropdown animation setup
document.addEventListener("click", e => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]")
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

  let currentDropdown
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]")
    currentDropdown.classList.toggle("active")
  }

  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if (dropdown === currentDropdown) return
    dropdown.classList.remove("active")
  })
})

//Dropdown variable setup
biome_dropdown.addEventListener("biome", setBiome);
creature_dropdown.addEventListener("creature", setCreature);
container_dropdown.addEventListener("container", setContainer);
other_dropdown.addEventListener("other", setOther);
amount_dropdown.addEventListener("amount", setAmount);

//Function to setup biome variables based off of dropdown menu (var = biome)
function setBiome(event) {
  if (event.target.id == "none") {
    biome = "";
    fontToNormal(biome_dropdown);
    displayInfoTitle();
  } else {
    biome = event.target.id;
    fontToItalic(biome_dropdown);
    displayInfoTitle();
  }
}

//Function to setup creature variables based off of dropdown menu (var = creature)
function setCreature(event) {
  if (event.target.id == "none") {
    creature = "";
    fontToNormal(creature_dropdown);
    displayInfoTitle();
  } else {
    container = "";
    other = "";
    fontToNormal(container_dropdown);
    fontToNormal(other_dropdown);
    creature = event.target.id;
    fontToItalic(creature_dropdown);
    displayInfoTitle();
  }
}

//Function to setup container variables based off of dropdown menu (var = creature)
function setContainer(event) {
  if (event.target.id == "none") {
    container = "";
    fontToNormal(container_dropdown);
    displayInfoTitle();
  } else {
    creature = "";
    other = "";
    fontToNormal(creature_dropdown);
    fontToNormal(other_dropdown);
    container = event.target.id;
    fontToItalic(container_dropdown);
    displayInfoTitle();
  }
}

//Function to setup container variables based off of dropdown menu (var = creature)
function setOther(event) {
  if (event.target.id == "none") {
    other = "";
    fontToNormal(other_dropdown);
    displayInfoTitle();
  } else {
    creature = "";
    container = "";
    fontToNormal(creature_dropdown);
    fontToNormal(container_dropdown);
    other = event.target.id;
    fontToItalic(other_dropdown);
    displayInfoTitle();
  }
}

//Function to setup amount of loot variables based off of dropdown menu (var = amount)
function setRarity(event) {
  rarity_dropdown.innerHTML = "Rarity [" + event.target.id + "]";
  rarity = Number(event.target.id);
  if (rarity !== 1) {
    fontToItalic(rarity_dropdown);
  } else {
    fontToNormal(rarity_dropdown);
  }
}

//Function to setup amount of loot variables based off of dropdown menu (var = amount)
function setAmount(event) {
  amount_dropdown.innerHTML = "Amount [" + event.target.id + "]";
  amount = Number(event.target.id);
  if (amount !== 1) {
    fontToItalic(amount_dropdown);
  } else {
    fontToNormal(amount_dropdown);
  }
}

function start() {
  //call function to reset reused variables
  resetVariables()

  //set code to equal code input
  code = document.getElementById("code");
  code = code.value;
  console.log(code);

  //call function to see if code input is empty and if so, to use dropdown variables
  checkForCodeInput()

  //call function to randomize loot 
  randomizeLoot()

  //call function to get total and display it
  getTotal()
}

//function to see if code input is empty and if so, to use dropdown variables
function checkForCodeInput() {
  if (code == "") {
    if (biome == "" || biome == "none") {
      code = creature + container + other;
    } else {
      code = biome + " " + creature + container + other;
    }
  }
}

//function to randomize loot 
function randomizeLoot() {
  AlertCheck = 1;
  //while loop counting down chart length
  while (i1 < chartArray.length) {

    if (code == chartArray[i1].name) {
      activeLootTable = chartArray[i1].chart;
      maxInt = getMaxInt(activeLootTable);
      AlertCheck = 0;
      i2 = 0;

      while (i2 < amount) {
        randomInt = getRandomArbitrary(0, maxInt)

        i3 = 0;
        while (i3 < activeLootTable.length) {

          if (randomInt >= activeLootTable[i3].minRarity && randomInt <= activeLootTable[i3].maxRarity) {

            activeLoot = activeLootTable[i3]; // set activeLoot array to whatever array was selected

            if (activeLoot.rarity >= rarity) {
              i4 = 0; //reset i4 variable

              randomQty = getRandomIntBetween(activeLoot.minQty, activeLoot.maxQty)
              lootName = activeLoot.name;

              //loop to check if there are chart references
              while (i4 < 5) {
                i5 = 0;
                while (i5 < chartArray.length) {
                  if (activeLoot.name == chartArray[i5].name) {
                    activeLootTable2 = chartArray[i5].chart;
                    maxInt2 = getMaxInt(activeLootTable2);

                    checkRarity2 = 1;
                    i = 0;
                    while (checkRarity2 > i) {
                      randomInt2 = getRandomArbitrary(0, maxInt2)

                      i6 = 0;
                      while (i6 < activeLootTable2.length) {


                        if (randomInt2 >= activeLootTable2[i6].minRarity && randomInt2 <= activeLootTable2[i6].maxRarity) {
                          activeLoot = activeLootTable2[i6];

                          if (activeLoot.rarity >= rarity) {
                            randomQty2 = getRandomIntBetween(activeLoot.minQty, activeLoot.maxQty)
                            lootName = activeLoot.name;
                            randomQty = randomQty * randomQty2;
                            checkRarity2 = 0;
                          }
                        }
                        i6++
                      }
                    }
                  }
                  i5++
                }
                i4++
              }
              checkRarity++;
            }
          }
          i3++
        }

        i2 = getNumberForRarity(checkRarity, i2)

        console.log("checkRarity: " + checkRarity + " | " + "i2: " + i2);

        if (checkRarity == i2 + 1) {
          infoArray[i2].loot = lootName;
          infoArray[i2].Qty = randomQty;
          let relay = document.getElementById(infoArray[i2].name)
          relay.innerHTML = infoArray[i2].loot + " x" + (infoArray[i2].Qty)
          activeLoot2 = {};
        }
        i2++
      }

    } else if (i1 == chartArray.length - 1 && AlertCheck == 1) {
      alert("Chart not found, make sure fields are inputed correctly. See the help page for more information.");
      creature = "";
      container = "";
      other = "";
      biome = "";
      fontToNormal(container_dropdown);
      fontToNormal(other_dropdown);
      fontToNormal(creature_dropdown);
      fontToNormal(biome_dropdown);
      displayInfoTitle();
      total.innerHTML = "";
      break;
    }
    i1++
  }
}

//function to get total and display it
function getTotal() {
  if (AlertCheck == 0) {
    //get total for collected loot
    i = 0;
    while (i < 10) {
      i2 = 0;
      while (i2 < 10) {
        if (infoArray[i].loot == totalArray[i2].loot) {
          totalArray[i2].Qty = totalArray[i2].Qty + infoArray[i].Qty;
          totalArray[i2].loot = infoArray[i].loot
          break;
        } else if (i2 == 9) {
          i3 = 0;
          while (i3 < 10) {
            if (totalArray[i3].Qty == 0) {
              totalArray[i3].Qty = infoArray[i].Qty;
              totalArray[i3].loot = infoArray[i].loot;
              break;
            }
            i3++
          }
        }
        i2++
      }
      i++
    }

    //display total for collected loot
    i = 0;
    while (i < 10) {
      if (totalArray[i].loot !== "") {
        total.innerHTML = total.innerHTML + " || " + totalArray[i].loot + " x" + totalArray[i].Qty;
      }
      i++
    }

    total.innerHTML = "Total: " + total.innerHTML + " ||";

    console.log("-------")
  }
}
