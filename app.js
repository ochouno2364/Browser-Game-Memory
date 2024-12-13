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

let clock = 0;
const ballCards = [
    "Ballcards1",
    "Ballcards2",
    "Ballcards3",
    "Ballcards4",
    "Ballcards5",
    "Ballcards6",
    "Ballcards7",
    "Ballcards88",
    "Ballcards9",
    "Ballcards10",
];
// console.log(ballCards)

let cardsArr = []; // set cardReset to any empty array
const gameBoard = []; // set gameBoard to any empty array
let rows = 5;
let columns = 4;


window.onload = function () {
    shuffleCards();
    gameStart();
}

 function shuffleCards () {
    cardsArr = ballCards.concat(ballCards); // ballCards.concat gives make 2 of each card
    console.log(cardsArr); // shows the ballCards  x2
    for (let i = 0; i < cardsArr.length; i++) { //for loop to iterate through ballCards
        let a = Math.floor(Math.random() * cardsArr.length); // new init {a} when cards reach the cards length to get a random card (index)
        let b = cardsArr[i]; // change the order   //init b 
        cardsArr[i] = cardsArr[a]; //after i goes through the loop it eaquals (a) that has been randomized
        cardsArr[a] = b; // then b retains the value of (a)
    }
    console.log(cardsArr); //prints the new randomized array of cards
}

function gameStart() {
    for (let r = 0; r < rows; r++) {
        let row = [];
    for (let c = 0; c < columns; c++) {
        let ballcardsImg = cardsArr.pop();
        row.push(ballcardsImg);

        let ballCard = document.createElement('img');
        ballCard.id = r.toString() + '-' + c.toString();
        ballCard.src = ballcardsImg + '.jpg';
        ballCard.classList.add('ballcard')
        document.getElementById('game-board').append(ballCard)
    }
    gameBoard.push(row)
 }
console.log(board)
}