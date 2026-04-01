//Alexa Gomez 4/1/26//
"use strict"

for (let crate = 1; crate <= 20; crate++){
    if (crate % 5 === 0){
        console.log(`Crate ${crate}: Fragile equipment - handle with care.`);
    }
    else if (crate % 2 === 0) {
        console.log(`Crate ${crate}: Normal supplies - load crate.`);
    }
    else {
        console.log(`Crate ${crate}: Beware unknown cargo - inspect crate carefully.`);
    }
}

console.log(`The total number of crates scanned: 20`);