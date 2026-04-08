//Alexa Gomez 4/8/26//

let userName = prompt(`Enter your name`);
let entryCount = 0;

function calcGasAvg() {
    
    let total = 0;
    let weeklyGas = 0;

    weeklyGas = parseFloat(
        prompt(`Enter your first week's gas total. Enter -1 when you are done.`)
    );

    while (weeklyGas !== -1) {
        entryCount ++;
        total = total + weeklyGas;
        weeklyGas = parseFloat(prompt(`Enter your next weekly gas total cost. Enter -1 when you are done.`));
    }

    if (entryCount > 0) {
        return total / entryCount;
    } 
        
    }
let gas = calcGasAvg();


if (entryCount === 0) {
    confirm("No gas totals were entered.");
} else if (entryCount === 1) {
    confirm(`You entered ${entryCount} gas total`);
} else {
    confirm(`You entered ${entryCount} gas totals.`);
}
confirm(`${userName}'s average weekly gas bill is $${gas.toFixed(2)}`);