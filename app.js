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
        "name": "Paul Skenes"
    },
    {
        "image":"./images/Ballcards2.png",
        "name": "Jazz Chisholm"
    },
    {
        "image":"./images/Ballcards3.png",
        "name": "Elly De La Cruz"
    },
    {
        "image":"./images/Ballcards4.png",
        "name":"Wander Franco"
    },
    {
        "image":"./images/Ballcards5.png",
        "name":"Fernando Tatis Jr."
    },
    {
        "image":"./images/Ballcards6.png",
        "name":"Prelander Berroa"
    },
    {
        "image":"./images/Ballcards7.png",
        "name":"Bo Jackson"
    },
    {
        "image":"./images/Ballcards8.png",
        "name":"Ronald Acuna Jr."
    },
    {
        "image":"./images/Ballcards9.png",
        "name":"Daulton Varsho"
    },
    {
        "image":"./images/Ballcards10.png",
        "name":"Pete Alonso"
    },
    {
        "image": "./images/Ballcards1.png",
        "name": "Paul Skenes"
    },
    {
        "image":"./images/Ballcards2.png",
        "name": "Jazz Chisholm"
    },
    {
        "image":"./images/Ballcards3.png",
        "name": "Elly De La Cruz"
    },
    {
        "image":"./images/Ballcards4.png",
        "name":"Wander Franco"
    },
    {
        "image":"./images/Ballcards5.png",
        "name":"Fernando Tatis Jr."
    },
    {
        "image":"./images/Ballcards6.png",
        "name":"Prelander Berroa"
    },
    {
        "image":"./images/Ballcards7.png",
        "name":"Bo Jackson"
    },
    {
        "image":"./images/Ballcards8.png",
        "name":"Ronald Acuna Jr."
    },
    {
        "image":"./images/Ballcards9.png",
        "name":"Daulton Varsho"
    },
    {
        "image":"./images/Ballcards10.png",
        "name":"Pete Alonso"
    }
];

let frontCards = ["images", "./images/hhhhh.png", ]
let cardOne, cardTwo;

let lockBoard = true;

let errors = 0;

let score = 0;
// let rows;
// let columns;

document.querySelector('#errors').textContent = errors;

function flipCard() {
card.classList.toggle("is-flipped");
}
const cards = document.querySelectorAll(".ballcards");
cards.forEach(card => {
    card.addEventListener("click", () => {
        flipCard(card)
    });
});

function gameStart() {
    for (let ballCard of ballCards) {
        const ballCardEl = document.createElement("div");
        ballCardEl.classList.add("ballcards");
        ballCardEl.setAttribute("data-name", ballCard.name);
        ballCardEl.innerHTML = `
        <div class="front">
          <img class="front-image" src=${ballCard.image}>
          </div>
          <div class="back"</div>`;
        gameBoard.appendChild(ballCardEl)
        ballCardEl.addEventListener("click", gameStart)
    }
    
}

function shuffleCards() {
    let currentIndex = ballCards.length,
    randomIndex,
    tempVal;
while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    tempVal = ballCards[currentIndex];
    ballCards[currentIndex]= ballCards[randomIndex];
    ballCards[randomIndex] = tempVal

}
}

// function ballCardFlipped() {
//     if (lockBoard) return;
//     if (this === cardOne) return card;
    
//   this.classList.add("card-flipped");

//    if (!cardOne) {
//     cardOne = this;
//     return;
//    }
//    cardTwo = this;
//     score++;
//     document.querySelector(".score").textContent = score;
//     lockBoard = true;
   
//  isAMatch();
// }

// function isAMatch() {
//     let doesMatch = cardOne.datset.name === cardTwo.dataset.name;

//     doesMatch ? disableCards() : cardsUnflipped();
// }

// function disableCards() {
//     cardOne.removeEventListener("click", ballCardFlipped);
//     cardTwo.removeEventListener("click", ballCardFlipped);

//     newBoard();
// }

function cardsUnflipped() {
    setTimeout(() => {
        ballCards.classList.add(".back");
        newBoard();
    });
}
function newBoard() {
    if(lockBoard == false) {
        return frontCards();
    }
}

function restart() {
    // cardsUnflipped();
    shuffleCards();
    newBoard();
    score = 0;
    document.querySelector(".score").textContent = score;
    gameBoard.innerHTML = "";
    gameStart();
}




// console.log(ballCards)

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
//  }
// console.log(board)
// }