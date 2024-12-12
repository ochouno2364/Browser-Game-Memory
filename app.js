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


/*-------------------------------- Constants --------------------------------*/
const cardChoices = ["coyote", "parrot", "monkey", "monkey", "cheetah", "elephant", "panda", "racoon", "giraffe", "lamb", "zebra", "zebra", "frog", "pig", "octopus", "giraffe", "tiger", "octopus", "pig", "tiger", "bear", "lamb", "panda", "bear", "frog", "elephant", "racoon", "cheetah", "coyote", "parrot"]

/*-------------------------------- Variables --------------------------------*/
const clickCards = document.querySelectorAll('button');
/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
// clickCards.addEventListener('click', function (event){
//     return "clicked"
// })