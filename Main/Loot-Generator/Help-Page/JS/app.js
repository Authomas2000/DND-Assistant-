let Prompt = document.getElementById("Prompt");
let Div = document.getElementById("InformationPrompt");
let promptNum = 0;

start();

function start() {
    if (promptNum == 0) {
        Prompt.innerHTML = "Welcome to the custom loot generator. To generate loot you must first either type in a code for a specific loot table, or generate loot based on perameters.";
        Div.style.width = "500px";
        Div.style.marginTop = "200px";
        Div.style.marginLeft = "500px";
        promptNum++
    } else if (promptNum == 1) {
        Prompt.innerHTML = "The code is inputed here.";
        Div.style.marginTop = "0px";
        Div.style.marginLeft = "50px";
        Div.style.width = "280px";
        promptNum++
    } else if (promptNum == 2) {
        Prompt.innerHTML = "If you dont have a code then you can make a custom loot table using these drop down options!";
        Div.style.marginLeft = "490px";
        Div.style.width = "500px";
        promptNum++
    } else if (promptNum == 3) {
        Prompt.innerHTML = "Biome is optional and changes the creature and container loot tables. The Other dropdown menu contains uncustomizable loot tables.";
        Div.style.marginLeft = "490px";
        Div.style.width = "500px";
        promptNum++
    } else if (promptNum == 4) {
        Prompt.innerHTML = "If you choose to have loot drawn from a creature or container you can add a biome.";
        Div.style.marginLeft = "490px";
        Div.style.width = "400px";
        promptNum++
    } else if (promptNum == 5) {
        Prompt.innerHTML = "Using a biome will add loot specific to the biome, such as plants only located in the selected biome.";
        Div.style.marginLeft = "490px";
        Div.style.width = "400px";
        promptNum++
    } else if (promptNum == 6) {
        Prompt.innerHTML = "After deciding whether you want biome loot or not, you can choose a creature or a container. Each dropdown contains what the label suggests.";
        Div.style.marginLeft = "490px";
        Div.style.width = "400px";
        promptNum++
    } else if(promptNum == 7) {
        Prompt.innerHTML = "The other dropdown menu contains specific loot tables, such as coins, gems, etc. This table can sometimes be paired with biome but most of the time can not.";
        Div.style.marginLeft = "750px";
        Div.style.width = "400px";
        promptNum++
    } else if(promptNum == 8) {
        Prompt.innerHTML = "Rarity changes the rarity of the loot, with 3 being the rarest.";
        Div.style.marginLeft = "930px";
        Div.style.width = "300px";
        promptNum++
    } else if(promptNum == 9) {
        Prompt.innerHTML = "Amount changes how many items will be generated from the loot tables.";
        Div.style.marginLeft = "1050px";
        Div.style.width = "300px";
        promptNum++
    } else if(promptNum == 10) {
        Prompt.innerHTML = "That is how you can use this random loot generator!                                   Any bugs, improvements or questions may be sent to bigdadd5ys@gmail.com and i will get back to you as soon as possible!";
        Div.style.width = "500px";
        Div.style.marginTop = "200px";
        Div.style.marginLeft = "500px";
        document.getElementById("nextButton").innerHTML = "GO BACK";
        promptNum++
    } else{
        window.location.href ="../index.html";
    }
}


//alert("In ");