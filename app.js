// 1) Define any variables used to track the state of the game:
//    The players choice
//    The game result - win/lose/tie
//    A result message - display if the user won or loss the game

// 2) Define the required constants:
//    There are 30 choices a user can make ("tiger", "coyote", "parrot", "raccoon", etc)
//    We'll need a reference to a DOM element to display messages

// 3) Handle a player clicking a button

// 4) Handle a prestart/restart setting

// 5) Compare the player choice 1 and choice 2 if they are matching

// 6) Render a win/lose/tie message to the player 
//    If player makes 3 wrong choices they lose
//    Clearly indicate if the player won or loss
const gameBoard = document.querySelector('#game-board')

let ballCards = [
    {
        "image": "./images/Ballcards1.png",
        "name": "Paul Skenes",
        "back": "./images/hhhhh.png"
    },
    {
        "image": "./images/Ballcards2.png",
        "name": "Jazz Chisholm",
        "back": "./images/hhhhh.png"
    },
    {
        "image": "./images/Ballcards3.png",
        "name": "Elly De La Cruz",
        "back": "./images/hhhhh.png"
    },
    {
        "image": "./images/Ballcards4.png",
        "name": "Wander Franco",
        "back": "./images/hhhhh.png"
    },
    {
        "image": "./images/Ballcards5.png",
        "name": "Fernando Tatis Jr.",
        "back": "./images/hhhhh.png"
    },
    {
        "image": "./images/Ballcards6.png",
        "name": "Prelander Berroa",
        "back": "./images/hhhhh.png"
    },
    {
        "image": "./images/Ballcards7.png",
        "name": "Bo Jackson",
        "back": "./images/hhhhh.png"
    },
    {
        "image": "./images/Ballcards8.png",
        "name": "Ronald Acuna Jr.",
        "back": "./images/hhhhh.png"
    },
    {
        "image": "./images/Ballcards9.png",
        "name": "Daulton Varsho",
        "back": "./images/hhhhh.png"
    },
    {
        "image": "./images/Ballcards10.png",
        "name": "Pete Alonso",
        "back": "./images/hhhhh.png"
    },
    {
        "image": "./images/Ballcards1.png",
        "name": "Paul Skenes",
        "back": "./images/hhhhh.png"
    },
    {
        "image": "./images/Ballcards2.png",
        "name": "Jazz Chisholm",
        "back": "./images/hhhhh.png"
    },
    {
        "image": "./images/Ballcards3.png",
        "name": "Elly De La Cruz",
        "back": "./images/hhhhh.png"
    },
    {
        "image": "./images/Ballcards4.png",
        "name": "Wander Franco",
        "back": "./images/hhhhh.png"
    },
    {
        "image": "./images/Ballcards5.png",
        "name": "Fernando Tatis Jr.",
        "back": "./images/hhhhh.png"
    },
    {
        "image": "./images/Ballcards6.png",
        "name": "Prelander Berroa",
        "back": "./images/hhhhh.png"
    },
    {
        "image": "./images/Ballcards7.png",
        "name": "Bo Jackson",
        "back": "./images/hhhhh.png"
    },
    {
        "image": "./images/Ballcards8.png",
        "name": "Ronald Acuna Jr.",
        "back": "./images/hhhhh.png"
    },
    {
        "image": "./images/Ballcards9.png",
        "name": "Daulton Varsho",
        "back": "./images/hhhhh.png"
    },
    {
        "image": "./images/Ballcards10.png",
        "name": "Pete Alonso",
        "back": "./images/hhhhh.png"
    }
];

// let frontCards = ["images", "./images/hhhhh.png", ]
let cardOne, cardTwo;

let lockBoard = false;

let errors = 0;

let score = 0;

const strikesMax = 21;

const runsMax = 10;

let flippedCards = false;

const resultsContent = document.querySelector('#results-content');



// <-------------------------------------Functions-------------------------------------------------------->




// document.querySelector('#errors').textContent = errors;
// document.querySelector('.score').textContent = score;


function gameStart() {
    for (let ballCard of ballCards) {
        const ballCardEl = document.createElement("div");
        ballCardEl.classList.add("ballcards");
        ballCardEl.setAttribute("data-name", ballCard.name);// creates all the ball cards in a div and pulls the data name
        ballCardEl.innerHTML = `
        <div class="front">
          <img class="front-image" src=${ballCard.image}>
          </div>
          <div class="back"
          <img class="back-image" src=${ballCard.back}>
          </div>`;
        gameBoard.appendChild(ballCardEl)// pushes the ballcards elelment to the gameboard (parent)
        ballCardEl.addEventListener("click", cardFlip) // add an click event when the cards are clicked
    }

}

function shuffleCards() {
    let curIndex = ballCards.length, // current index is the length of ballcards (all of the card)
        ranIndex,
        tempVal;
    while (curIndex !== 0) {
        ranIndex = Math.floor(Math.random() * curIndex); //math .floor grabs a random from the bottom of the obeject
        curIndex -= 1;
        tempVal = ballCards[curIndex]; // temp value now equals ballcards index
        ballCards[curIndex] = ballCards[ranIndex];
        ballCards[ranIndex] = tempVal // now the random index is the temp value

    }
}

function restart() { // create a function to restart the game
    shuffleCards(); // must re shuffle cards
    score = 0;
    errors = 0; // new game score and errors reset
    document.querySelector(".score").textContent = score;
    document.querySelector('#errors').textContent = errors;
    gameBoard.innerHTML = ""; //set inner context to empty string
    gameStart();

}

function cardFlip() {
    if (lockBoard === false) { // if the board is not locked
        this.classList.add("flip-card"); // add ballcards to a class of flip-card
        if (flippedCards === false) {
            flippedCards = true;
            cardOne = this; // this = the ownwer of the function if card one equals the function owner
        } else {
            cardTwo = this;
            flippedCards = false;
            isAMatch();// use the check for match function to se if two cards match
            gameResult(); //use this function to show the game result
        }
    }
}

function isAMatch() {
    if (cardOne.dataset.name === cardTwo.dataset.name) { 
        addRuns(); // if cardOne and CardTwo are the same add to the runs column
    } else {
        addStrikes(); // if they do not match add to the strikes 
        cardsUnflipped(); // if they dont match cards unflip
        

    }

}


function disableCards() {
    cardOne.removeEventListener("click", cardFlip);// removes the flip-card eventlistener
    cardTwo.removeEventListener("click", cardFlip);

}

function cardsUnflipped() {
    setTimeout(() => {
        cardOne.classList.remove("flip-card");
        cardTwo.classList.remove("flip-card");
        lockBoard = false;
    }, 1200);// sets a time of 1.2s so the player can see  the two wrong cards they flipped

}

function addStrikes() {
    document.querySelector('#errors').textContent = errors++ + 1; // adds 1 each wrong matching pair


}

function addRuns() {
    document.querySelector('.score').textContent = score++ + 1; // adds 1 each matching pair
}

function gameResult() {
    if (score === runsMax) { // if the score is equal to 10 player wins
        resultsContent.textContent = 'HomeRun!! You Win!';
    } else if (errors === strikesMax) { //if errors is equal to 21 player lose
        resultsContent.textContent = 'StrikeOut!! You Lose, Try Again?';
    } else {
        resultsContent.textContent = '';
    };
};





