let Prompt = document.getElementById("Prompt");
let Div = document.getElementById("InformationPrompt");
let promptNum = 0;

start();

function start() {
    if (promptNum == 0) {
        Prompt.innerHTML = "First is to choose from a creature or input custom values for a character/creature.";
        Div.style.width = "350px";
        promptNum++
    } else if (promptNum == 1) {
        Prompt.innerHTML = "The creatures dropdown menu contains quick select options and specific creatures";
        Div.style.width = "350px";
        promptNum++
    } else if (promptNum == 2) {
        Prompt.innerHTML = "Both quick select and the creatures in this menu have the armor class and auto generate initiative based on dexterity";
        Div.style.width = "350px";
        promptNum++
    } else if (promptNum == 3) {
        Prompt.innerHTML = "For custom characters/creatures, name and initiative are required and armor class is optional";
        Div.style.width = "400px";
        Div.style.marginLeft = "450px";
        promptNum++
    } else if (promptNum == 4) {
        Prompt.innerHTML = "Next is to add the character/creature to list. A list of up to 10 can be stored.";
        Div.style.width = "200px";
        Div.style.marginLeft = "1050px";
        promptNum++
    } else if (promptNum == 5) {
        Prompt.innerHTML = "Lastly is the organize list button which will sort the list from highest iniative to lowest";
        Div.style.width = "200px";
        Div.style.marginLeft = "1150px";
        promptNum++
    } else if (promptNum == 6) {
        Prompt.innerHTML = "When the encounter is over you can press reset to prepare for your next encounter!";
        Div.style.width = "200px";
        Div.style.marginLeft = "1220px";
        promptNum++
    } else if(promptNum == 7) {
        Prompt.innerHTML = "That is how you can use this initaitive tracker!                                   Any bugs, improvements or questions may be sent to bigdadd5ys@gmail.com and i will get back to you as soon as possible!";
        Div.style.width = "500px";
        Div.style.marginTop = "200px";
        Div.style.marginLeft = "500px";
        document.getElementById("nextButton").innerHTML = "Go Back";
        promptNum++
    } else{
        window.location.href ="../index.html";
    }
}


//alert("In ");