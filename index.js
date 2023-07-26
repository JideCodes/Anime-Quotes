// import anime_quotes from './quotes'

let button = document.getElementById("quote"); //grab the button from the DOM
let quote_text = document.getElementById("text-quote"); //grab the quote from the DOM

function randomQuote(){

    let index = Math.floor(Math.random() * anime_quotes.length); //a randomizer to determine which index to use when calling the array
    let randomQuote = anime_quotes[index]; //the output of the array with the index from the randomized prev line
    
    quote_text.textContent = randomQuote; //update the UI with the random quote generated from prev line
}

// update quote in the UI content by initializing the function with the click event
button.addEventListener('click', randomQuote);