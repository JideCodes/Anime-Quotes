let button = document.getElementById("quote"); //grab the button from the DOM
let quote_text = document.getElementById("text-quote"); //grab the quote from the DOM

function randomQuote(){
    
    let anime_quotes = [
        "I'm not stupid. I'm just too lazy to show how smart I am. - Houtarou Oreki, Hyouka",
        "It's not the face that makes someone a monster; it's the choices they make with their lives. - Naruto Uzumaki, Naruto",
        "No one knows what the future holds. That's why its potential is infinite. - Rintarou Okabe, Steins;Gate",
        "If you don't like your destiny, don't accept it. Instead, have the courage to change it the way you want it to be. - Uruhara Kisuke, Bleach",
        "The world isn't perfect. But it's there for us, doing the best it can. - Makoto Naegi, Danganronpa: The Animation",
        "Don't be so quick to throw away your life. No matter how disgraceful or embarrassing it may be, you need to keep struggling to find your way out until the very end. - Clare, Claymore",
        "The circumstances of one's birth are irrelevant. It is what you do with the gift of life that determines who you are. - Mewtwo, Pokemon: The First Movie",
        "It's okay not to be okay as long as you are not giving up. - Haruhi Suzumiya, The Melancholy of Haruhi Suzumiya",
        "The world is not beautiful, therefore it is. - Kino, Kino's Journey",
        "It's not the gear that matters, it's the rider. - Kosuke Iwakura, Sk8 the Infinity",
        "Hard work betrays none, but dreams betray many. - Hachiman Hikigaya, My Teen Romantic Comedy SNAFU",
        "When you give up, that's when the game is over. - Yusuke Urameshi, Yu Yu Hakusho",
        "People become stronger because they have things they cannot forget. - Natsu Dragneel, Fairy Tail",
        "If you don't take risks, you can't create a future. - Monkey D. Luffy, One Piece",
        "It's not the face that's messed up; it's the mind. - Edward Elric, Fullmetal Alchemist",
        "It's not the eyes that are blind, but the heart. - Haruka Nanase, Free!",
        "Fear is not evil. It tells you what your weakness is. And once you know your weakness, you can become stronger as well as kinder. - Gildarts Clive, Fairy Tail",
        "Even if things are painful and tough, people should appreciate what it means to be alive at all. - Yato, Noragami",
        "You should never give up on life, no matter how you feel. No matter how badly you want to give up, you gotta find the reason to keep going. - Jiraiya, Naruto Shippuden",
        "In order to grow, you must be willing to change. - Aang, Avatar: The Last Airbender",
        "Don't beg for things. Do it yourself or else you won't get anything. - Adroc Thurston, Eureka Seven",
        "Being hurt on the outside is better than being hurt on the inside. - Kaori Miyazono, Your Lie in April",
        "Life is not a game of luck. If you want to win, work hard. - Sora, No Game No Life",
        "The difference between the novice and the master is that the master has failed more times than the novice has tried. - Koro-sensei, Assassination Classroom",
        "No matter how deep the night, it always turns to day, eventually. - Brook, One Piece",
        "Sometimes people put up walls, not to keep others out, but to see who cares enough to break them down. - Robin, One Piece",
        "You can't change the past, but you can learn from it. - Higurashi Kagome, Inuyasha",
        "If you don't take responsibility for your actions, you'll never improve. - Erwin Smith, Attack on Titan",
        "It's not the face that's important. What's important is the heart. - Yuuki Cross, Vampire Knight",
        "The only ones who should kill are those prepared to be killed. - Lelouch vi Britannia, Code Geass",
        "Don't give up, there's no shame in falling down! True shame is to not stand up again! - Shintarou Midorima, Kuroko's Basketball",
        "It's okay to cry, but you have to move on. - Ichigo Kurosaki, Bleach",
        "The circumstances of your birth are irrelevant. It is what you do with the gift of life that determines who you are. - Mewtwo, Pokemon: The First Movie",
        "When you have to save someone, they're usually in a scary situation. When you think about it that way, I'm actually grateful to be the one being saved. - Mikasa Ackerman, Attack on Titan",
        "It's not the destination that matters. It's the journey you take to get there. - Gon Freecss, Hunter x Hunter",
        "People die when they are killed. - Emiya Shirou, Fate/stay night",
        "Whatever you lose, you'll find it again. But what you throw away, you'll never get it back. - Himura Kenshin, Rurouni Kenshin",
        "No one knows what the future holds. That's why its potential is infinite. - Rintarou Okabe, Steins;Gate",
        "It's not the face that makes someone a monster; it's the choices they make with their lives. - Naruto Uzumaki, Naruto",
        "The only thing we're allowed to do is to believe that we won't regret the choice we made. - Levi Ackerman, Attack on Titan",
        "Don't give up, there's no shame in falling down! True shame is to not stand up again! - Shintarou Midorima, Kuroko's Basketball",
        "It's okay to cry, but you have to move on. - Ichigo Kurosaki, Bleach",
        "The circumstances of your birth are irrelevant. It is what you do with the gift of life that determines who you are. - Mewtwo, Pokemon: The First Movie",
        "When you have to save someone, they're usually in a scary situation. When you think about it that way, I'm actually grateful to be the one being saved. - Mikasa Ackerman, Attack on Titan",
        "It's not the destination that matters. It's the journey you take to get there. - Gon Freecss, Hunter x Hunter",
        "People die when they are killed. - Emiya Shirou, Fate/stay night",
        "Whatever you lose, you'll find it again. But what you throw away, you'll never get it back. - Himura Kenshin, Rurouni Kenshin"
    ] //the array containing all anime quotes
    let index = Math.floor(Math.random() * anime_quotes.length); //a randomizer to determine which index to use when calling the array
    let randomQuote = anime_quotes[index]; //the output of the array with the index from the randomized prev line
    
    quote_text.textContent = randomQuote; //update the UI with the random quote generated from prev line
}

// update quote in the UI content by initializing the function with the click event
button.addEventListener('click', randomQuote);