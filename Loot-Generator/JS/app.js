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

//Function to setup biome variables based off of dropdown menu
function setBiome(event) {
  biome_dropdown.innerHTML="Biome [" + event.target.id + "]";
  biome = event.target.id;
}

//Function to setup creature variables based off of dropdown menu
function setCreature(event) {
  creature_dropdown.innerHTML="Creature [" + event.target.id + "]";
  creature = event.target.id;
}

//Function to setup amount of loot variables based off of dropdown menu
function setAmount(event) {
  amount_dropdown.innerHTML="Amount [" + event.target.id + "]";
  amount = event.target.id;
}