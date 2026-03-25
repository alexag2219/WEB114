//Alexa Gomez 3/25/26//
"use strict"
let favMonth = prompt("What is your favorite month?");
favMonth = favMonth.toLowerCase();

switch (favMonth) {
    case "january":
        alert("You love the winter months!");
        break;
    case "february":
        alert("You love the winter months!");
        break;
    case "march":
        alert("Spring is nice with everything blooming.");
        break;
    case "april":
        alert("Spring is nice with everything blooming.");
        break;
    case "may":
        alert("Spring is nice with everything blooming.");
        break; 
    case "june":
        alert("You enjoy the summer months!");
        break;   
    case "july":
        alert("You enjoy the summer months!");
        break;     
    case "august":
        alert("You enjoy the summer months!");
        break;   
    case "september":
        alert("Fall is fun with all of the pretty colors.");
        break;  
    case "october":
        alert("Fall is fun with all of the pretty colors.");
        break;    
    case "november":
        alert("Fall is fun with all of the pretty colors.");
        break;    
    case "december":
        alert("You love the winter months!");
        break;  
    
    default:
        console.log("Not a valid month.");
}
    //season logic//

//if (favMonth === "december" || favMonth === "january" || favMonth === "february") {
    //console.log("You love the winter months!");
//} else if (favMonth === "june" || favMonth === "july" || favMonth === "august") {
   // console.log("You enjoy the summer months!");
//} else {
    //console.log("Other months are interesting too!");
//}

