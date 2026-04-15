//Alexa Gomez 4/15/26//

//step 1 select elements 
const quote = document.querySelector("#quote");
const title = document.querySelector("#title");

const happyBtn = document.querySelector("#happyBtn");
const calmBtn = document.querySelector("#calmBtn");
const angryBtn = document.querySelector("#angryBtn");
const sleepyBtn = document.querySelector("#sleepyBtn");

//step 2 data mood objects 
const moods = {
    happy: {
        name:"Happy",
        bg:'#FFF3B0',
        text:'#f72585',
        message: "Warm smiles and the suns kisses!"
    }, 

    calm: {
        name:"Calm",
        bg:'#81b29a',
        text:'#03045e',
        message: "Peace and relaxation are the best!"
    }, 

    angry: {
        name:"Angry",
        bg:'#d00000',
        text:'#ffffff',
        message: "Deep breaths... need to calm down!"
    },

    sleepy: {
        name:"Sleepy",
        bg:'#847996',
        text:'#5a189a',
        message: "Zzz... time for a nap..."
    }
};

//step 3 function 

function changeMood(moodName) {
    const mood = moods[moodName];

    document.body.style.backgroundColor = mood.bg;
    document.body.style.color = mood.text;
    quote.textContent = mood.message;

    title.textContent = mood.name.toUpperCase();
}

//step 4 event handlers 

function handleHappyClick() {
    changeMood("happy");
}

function handleCalmClick() {
    changeMood("calm");
}

function handleAngryClick() {
    changeMood("angry");
}

function handleSleepyClick() {
    changeMood("sleepy");
}

//step 5 Event liseners 
happyBtn.addEventListener("click", handleHappyClick);
calmBtn.addEventListener("click", handleCalmClick);
angryBtn.addEventListener("click", handleAngryClick);
sleepyBtn.addEventListener("click", handleSleepyClick);