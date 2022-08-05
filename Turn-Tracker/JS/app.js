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
character_dropdown.addEventListener("character", setCharacter);
creature_dropdown.addEventListener("creature", setCreature);

//Function to setup biome variables based off of dropdown menu (var = biome)
function setCharacter(event) {
  if (event.target.id == "none") {
    character = "";
    character_dropdown.innerHTML = "Characters";
    fontToNormal(character_dropdown);
  } else {
    character = event.target.id;
    character_dropdown.innerHTML = capitalize(event.target.id);
    fontToItalic(character_dropdown);
  }
}

//Function to setup creature variables based off of dropdown menu (var = creature)
function setCreature(event) {
  if (event.target.id == "none") {
    creature = "";
    fontToNormal(creature_dropdown);
    creature_dropdown.innerHTML = "Creatures";
  } else {
    creature = event.target.id;
    fontToItalic(creature_dropdown);
    creature_dropdown.innerHTML = capitalize(event.target.id);
  }
}

function start() {
  //Set AC
  AC = document.getElementById("AC").value;

  //Set Initiative
  initiative = Number(document.getElementById("initiative").value);

  if (character !== "") {
    Name = character;
  } else if (creature !== "") {
    Name = creature;
  } else {
    Name = document.getElementById("name").value;
  }

  //Check for name and set other attributes
  let i = 0;
  while (i < selectionArray.length) {
    if (Name == selectionArray[i].Name) {
      if (AC !== "") {
        //Keep inputed AC
      } else {
        AC = selectionArray[i].AC;
      }

      if (initiative !== 0) {
        //Keep inputed initiative
      } else {
        initiative = selectionArray[i].initiative + getRandomIntBetween(0, 20);
      }
      break;
    }
    i++
  }
  if (initiative == 0) {
    initiative = getRandomIntBetween(0, 20);
  }

  //Add creature to array
  i = 0;
  while (i < infoArray.length) {
    if (infoArray[i].Name == "") {
      infoArray[i].Name = Name;
      infoArray[i].AC = AC;
      infoArray[i].initiative = initiative;
      break;
    }
    i++
  }

  //Display creatures
  i = 0;
  while (i < infoArray.length) {
    if (infoArray[i].Name !== "") {
      document.getElementById(infoArray[i].id).innerHTML = capitalize(infoArray[i].Name) + " | AC: " + infoArray[i].AC + " | Initiative: " + infoArray[i].initiative;
    } else {
      break;
    }
    i++
  }
}

function organize() {
  sortedByInitiative = infoArray.sort(function (a, b) {
    return b.initiative - a.initiative;
  });

  i = 0;
  while (i < sortedByInitiative.length) {
    if (sortedByInitiative[i].Name !== "") {
      console.log(i);
      let num = i + 1;
      num = num.toString()
      document.getElementById("Text" + num).innerHTML = capitalize(sortedByInitiative[i].Name) + " | AC: " + sortedByInitiative[i].AC + " | Initiative: " + sortedByInitiative[i].initiative;
    } else {
      break;
    }
    i++
  }
}


