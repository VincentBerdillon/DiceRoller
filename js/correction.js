


let sliderValue = 5; //donne une valeur par défaut

//ARCHITECTURE

//const nbOfDices = prompt ("combien de dés voulez-vous tirer ?");
//play(nbOfDices);

// EVENT SUR LE BOUTTON

//const playButton = document.querySelector("#play");
//playButton.addEventListener('click', newGame);

document.querySelector("#play").addEventListener('click', newGame);

// EVENT SUR LA BARRE D'ESPACE

// document.addEventListener('keyup', function(event){
//     if(event.key===" "){newGame()};
// });

document.addEventListener('keyup', spaceBarHandler);


// EVENT SUR LE SLIDER

//const diceSlider = document.querySelector('#slider');
//diceSlider.addEventListener('change', sliderHandler);

document.querySelector('#slider').addEventListener('change', sliderHandler);

// DIV APP - Event Bubbling, si son parent à le même event ex.click alors il check si le parent à le même event et l'execute

document.querySelector('#app').addEventListener('click', function(event){
    console.log("Michel");
})

//pas de parenthèses à monPremierEcouteur, les parenthèses c'est pour exécuter toute de suite. Ici c'est pour indiquer la cible.



// FONCTIONS

function createDice (targetElement){

const diceElement = document.createElement('div');
diceElement.classList.add("dice"); 
//diceElement.classList.add("dice");
//diceElement.className = "dice";
//diceEmlement.className += "red";
const imageOffset = (getRandom(1,6)-1)*100;
diceElement.style.backgroundPosition = `-${imageOffset}px`;

const playerElement = document.getElementById(targetElement);
playerElement.appendChild(diceElement);

}

function getRandom(min, max){
    return Math.round(Math.random()*(max-min))+min;
}

function play(nbOfDices){
    for (let index = 0; index < Number(nbOfDices); index++) {
        createDice("player");
    }
    setTimeout(dealerTurn,1500); // en millisecondes

}

function dealerTurn(){
    for (let index = 0; index < Number(sliderValue); index++) {
        createDice("dealer");
    }
}


//ECOUTEURS D'EVENTS :

function newGame (){
    document.querySelector("#player").innerHTML = ''; //vider les div créées
    document.querySelector("#dealer").innerHTML = '';
    play(sliderValue);
}


function sliderHandler(event){
    // play(event.target.valueAsNumber);
    sliderValue = event.target.valueAsNumber;
}

function spaceBarHandler (event){
    if(event.key===" "){newGame()};
};




