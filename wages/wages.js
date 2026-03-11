//Alexa Gomez 3/11/26//

"use strict"

let hourlyWage = prompt(`What is your hourly wage? `).trim();

hourlyWage = parseFloat(hourlyWage);
const confirmWage = confirm(`You entered $${hourlyWage} per hour. Is that correct?
    Click OK for yes
    Click Cancel for no `);

let hoursWorked = prompt(`How many hours did you work this week? `).trim();
hoursWorked = parseFloat(hoursWorked);
const confirmHours = confirm(`You entered ${hoursWorked} hours. Is that correct?
    Click Ok for yes
    Click Cancel for no `);

let grossPay = (hourlyWage * hoursWorked);

let taxes = (grossPay * .10);

let netPay = (grossPay - taxes);

console.log(`Your weekly earnings for the week is $${netPay.toFixed(2)}`);

if (hoursWorked > 40){
    console.log(`You worked overtime this week!`);
}

else if (hoursWorked == 40){
    console.log(`You worked exactly 40 hours.`);
}

else{
    console.log(`No overtime this week`);
}

if (netPay >= 800){
    console.log(`Great paycheck this week!`);
}
else {
    console.log(`Keep working towards a bigger paycheck!`)
}



