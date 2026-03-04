//Alexa Gomez Character 3/4/26 wk 2 hw//

let welcomePage = alert("Welcome to the Adventure Realm! Let's create your hero!");

const characterName = prompt("What is your character's name?");

let age = prompt(`What is ${characterName}'s age?`);
let newAge = parseInt(age) + 20;

const pet = prompt(`What kind of pet does ${characterName} have? (dragon, wolf, robot, unicorn, phoenix, etc.)`,"dragon");

const superPower = prompt(`What is ${characterName}'s special superpower?`);

const likesFighting = confirm(`Does ${characterName} like fighting monsters? 
    Click OK for Yes 
    Click Cancel for NO`);

let loadMessage = alert(`Gathering magic for ${characterName}... almost ready!`);

let finalStory = alert(`===========================
Name: ${characterName}
Pet: ${pet}
Current age: ${age}
Future age: ${newAge}
Superpower: ${superPower}
Monster Fighter? ${likesFighting ? "Yes" : "No"}
In a faraway land, ${characterName} rides a mighty ${pet}, 
wielding the incredible power of ${superPower}!
The realm awaits your legend...
===========================`);