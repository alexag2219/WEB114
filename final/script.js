//Alexa Gomez Love Calculator JS 4/29/26//

const playAgain = document.querySelector("#repeatBtn");
let button = document.getElementById("calculate");
let buttons = document.getElementsByClassName("Play-again");
let yourName = document.getElementById("your-name");
let crushName = document.getElementById("crush-name");
let percentage = document.getElementById("result-percentage"); 
let message = document.getElementById("result-message");


// console.log(yourName);
// console.log(crushName);


function calculateLove() {
   //if loop to only allow button click if the names entered are valid & not empty//
    if (yourName != "" && crushName !="") {
        let lovePercentage = Math.floor(Math.random() * 101); // this is to pick a number between 0-.999999 * 101 = 0 - 100.999999 the math floor will get rid of any decimals 
        message.textContent = yourName.value + " and " + crushName.value + "'s chance of love: ";
        percentage.textContent= lovePercentage + "%"; 
        
    }

}
//function to reset the page and content info when play again button is pressed
function resetGame() {
    yourName.value = " ";
    crushName.value = " ";
    percentage.value = " ";

}
playAgain.addEventListener("click", resetGame);
button.addEventListener("click", calculateLove);


//I chose this project for my final as it reminded me of a cute game I played on friv.com when I was younger, I wanted to create my own 
//with my own colors and layout. I made this project with HTML, CSS, and JS, I reffrenced back to multiple previous homeworks and projects 
//to correctly code my buttons and have my html and js functioning correctly. Thank you Mrs.Hanna for a great semester, have a happy summer break!