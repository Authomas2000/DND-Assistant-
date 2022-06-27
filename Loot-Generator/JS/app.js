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
amount_dropdown.addEventListener("amount", setAmount);

//Function to setup biome variables based off of dropdown menu (var = biome)
function setBiome(event) {
  biome_dropdown.innerHTML = "Biome [" + event.target.id + "]";
  biome = event.target.id;
}

//Function to setup creature variables based off of dropdown menu (var = creature)
function setCreature(event) {
  creature_dropdown.innerHTML = "Creature [" + event.target.id + "]";
  creature = event.target.id;
}

//Function to setup amount of loot variables based off of dropdown menu (var = amount)
function setAmount(event) {
  amount_dropdown.innerHTML = "Amount [" + event.target.id + "]";
  amount = Number(event.target.id);
}

function start() {
  //call function to reset reused variables
  resetVariables()

  //set code to equal code input
  code = document.getElementById("code").value;

  //check to see if code input is empty and if so, to use dropdown variables
  if (code == "") {
    if (biome == "") {
      code = creature;
    } else {
      code = biome + " " + creature;
    }
  }

  //while loop counting down chart length
  while (i1 < chartArray.length) {
    //check to see if code is equal to chart array name and if so to get loot
    if (code == chartArray[i1].name) {
      let activeLootTable = chartArray[i1].chart;
      let maxInt = getMaxInt(activeLootTable);
      i2 = 0;
      //while loop counting down from amount
      while (i2 < amount) {
        let randomInt = getRandomArbitrary(0, maxInt)
        i3 = 0;
        while (i3 < activeLootTable.length) {
          if (randomInt >= activeLootTable[i3].minRarity && randomInt <= activeLootTable[i3].maxRarity) {
            i4 = 0; //reset i4 variable

            let activeLoot = activeLootTable[i3]; // set activeLoot array to whatever array was selected

            //loop to check if there are chart references
            while (i4 < 5) {
              i5 = 0;
              while (i5 < chartArray.length) {
                if (activeLoot.name == chartArray[i5].name) {
                  activeLootTable = chartArray[i5].chart;
                  maxInt = getMaxInt(activeLootTable);
                  randomInt = getRandomArbitrary(0, maxInt)
                  i6 = 0;
                  while (i6 < activeLootTable.length) {
                    if (randomInt >= activeLootTable[i6].minRarity && randomInt <= activeLootTable[i6].maxRarity) {
                      activeLoot = activeLootTable[i6];
                    }
                    i6++
                  }
                }
                i5++
              }
              i4++
            }

            i4 = 0; //reset i4 variable
            //send loot info to screen
            while (i4 < infoArray.length) {
              if (infoArray[i4].loot == "") {
                infoArray[i4].loot = activeLoot.name;
                let randomInt2 = getRandomInt(activeLoot.moreQty)
                infoArray[i4].Qty = randomInt2;
                let relay = document.getElementById(infoArray[i4].name)
                relay.innerHTML = activeLoot.name + " x" + (randomInt2)
                break;
              }
              i4++
            }
          }
          i3++
        }
        i2++
      }
    }
    i1++
  }

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
  console.log(totalArray);
}
