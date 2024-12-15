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
        "image":"./images/Ballcards2.png",
        "name": "Jazz Chisholm",
        "back": "./images/hhhhh.png"
    },
    {
        "image":"./images/Ballcards3.png",
        "name": "Elly De La Cruz",
        "back": "./images/hhhhh.png"
    },
    {
        "image":"./images/Ballcards4.png",
        "name":"Wander Franco",
        "back": "./images/hhhhh.png"
    },
    {
        "image":"./images/Ballcards5.png",
        "name":"Fernando Tatis Jr.",
        "back": "./images/hhhhh.png"
    },
    {
        "image":"./images/Ballcards6.png",
        "name":"Prelander Berroa",
        "back": "./images/hhhhh.png"
    },
    {
        "image":"./images/Ballcards7.png",
        "name":"Bo Jackson",
        "back": "./images/hhhhh.png"
    },
    {
        "image":"./images/Ballcards8.png",
        "name":"Ronald Acuna Jr.",
        "back": "./images/hhhhh.png"
    },
    {
        "image":"./images/Ballcards9.png",
        "name":"Daulton Varsho",
        "back": "./images/hhhhh.png"
    },
    {
        "image":"./images/Ballcards10.png",
        "name":"Pete Alonso",
        "back": "./images/hhhhh.png"
    },
    {
        "image": "./images/Ballcards1.png",
        "name": "Paul Skenes",
        "back": "./images/hhhhh.png"
    },
    {
        "image":"./images/Ballcards2.png",
        "name": "Jazz Chisholm",
        "back": "./images/hhhhh.png"
    },
    {
        "image":"./images/Ballcards3.png",
        "name": "Elly De La Cruz",
        "back": "./images/hhhhh.png"
    },
    {
        "image":"./images/Ballcards4.png",
        "name":"Wander Franco",
        "back": "./images/hhhhh.png"
    },
    {
        "image":"./images/Ballcards5.png",
        "name":"Fernando Tatis Jr.",
        "back": "./images/hhhhh.png"
    },
    {
        "image":"./images/Ballcards6.png",
        "name":"Prelander Berroa",
        "back": "./images/hhhhh.png"
    },
    {
        "image":"./images/Ballcards7.png",
        "name":"Bo Jackson",
        "back": "./images/hhhhh.png"
    },
    {
        "image":"./images/Ballcards8.png",
        "name":"Ronald Acuna Jr.",
        "back": "./images/hhhhh.png"
    },
    {
        "image":"./images/Ballcards9.png",
        "name":"Daulton Varsho",
        "back": "./images/hhhhh.png"
    },
    {
        "image":"./images/Ballcards10.png",
        "name":"Pete Alonso",
        "back": "./images/hhhhh.png"
    }
];

// let frontCards = ["images", "./images/hhhhh.png", ]
let cardOne, cardTwo;

let lockBoard = false;

let errors = 0;

let score = 0;

let flippedCards = false;


document.querySelector('#errors').textContent = errors;
document.querySelector('.score').textContent = score;

// function newBoard() {
//     cardOne = null;
//     cardTwo = null;
//     lockBoard = false;
// }

function gameStart() {
    for (let ballCard of ballCards) {
        const ballCardEl = document.createElement("div");
        ballCardEl.classList.add("ballcards");
        ballCardEl.setAttribute("data-name", ballCard.name);
        ballCardEl.innerHTML = `
        <div class="front">
          <img class="front-image" src=${ballCard.image}>
          </div>
          <div class="back"
          <img class="back-image" src=${ballCard.back}>
          </div>`;
        gameBoard.appendChild(ballCardEl)
        ballCardEl.addEventListener("click", cardFlip)
    } 
   
}

function shuffleCards() {
    let curIndex = ballCards.length,
    ranIndex,
    tempVal;
while (curIndex !== 0) {
    ranIndex = Math.floor(Math.random() * curIndex);
    curIndex -= 1;
    tempVal = ballCards[curIndex];
    ballCards[curIndex]= ballCards[ranIndex];
    ballCards[ranIndex] = tempVal

}
}

function restart() {
    shuffleCards();
    score = 0;
    errors = 0;
    document.querySelector(".score").textContent = score;
    document.querySelector('#errors').textContent = errors;
    gameBoard.innerHTML = "";
    gameStart();
   
}

function cardFlip() {
    if (lockBoard === false) {
        this.classList.add("flip-card");
        if ( flippedCards === false) {
            flippedCards = true;
            cardOne = this;
        } else {
            cardTwo = this;
            flippedCards = false;
            isAMatch();
        }
    }
    
}

function isAMatch() {
    if (cardOne.dataset.name === cardTwo.dataset.name) {
        // lockBoard = false;
        addRuns();
    } else {
        addStrikes();
        cardsUnflipped();
        
    }
   
}

function disableCards() {
    cardOne.removeEventListener("click", cardFlip);
    cardTwo.removeEventListener("click", cardFlip);

}

function cardsUnflipped() {
    setTimeout(() => {
        cardOne.classList.remove("flip-card");
        cardTwo.classList.remove("flip-card");
        lockBoard = false;
    }, 1200);
    
}

function addStrikes() {
    document.querySelector('#errors').textContent = errors++;
    
   }
    
function addRuns() {
    document.querySelector('.score').textContent = score;
    score++;
   }
    





document.querySelector('.score').textContent = score;

// let cardsArr = []; // set cardReset to any empty array
// const gameBoard = []; // set gameBoard to any empty array
// let rows = 5;
// let columns = 4;


// window.onload = function () {
//     shuffleCards();
//     gameStart();
// }

//  function shuffleCards () {
//     cardsArr = ballCards.concat(ballCards); // ballCards.concat gives make 2 of each card
//     console.log(cardsArr); // shows the ballCards  x2
//     for (let i = 0; i < cardsArr.length; i++) { //for loop to iterate through ballCards
//         let a = Math.floor(Math.random() * cardsArr.length); // new init {a} when cards reach the cards length to get a random card (index)
//         let b = cardsArr[i]; // change the order   //init b 
//         cardsArr[i] = cardsArr[a]; //after i goes through the loop it eaquals (a) that has been randomized
//         cardsArr[a] = b; // then b retains the value of (a)
//     }
//     console.log(cardsArr); //prints the new randomized array of cards
// }

// function gameStart() {
//     for (let r = 0; r < rows; r++) {
//         let row = [];
//     for (let c = 0; c < columns; c++) {
//         let ballcardsImg = cardsArr.pop();
//         row.push(ballcardsImg);

//         // let ballCard = document.createElement('img');
//         // ballCard.id = r.toString() + '-' + c.toString();
//         // ballCard.src = ballcardsImg + '.png';
//         // ballCard.classList.add('ballcards')
//         // document.getElementById('game-board').append(ballCard)
//     }
//     gameBoard.push(row)