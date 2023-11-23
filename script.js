// Board grids // 
const board = {
    "a1" : "", "a2" : "", "a3" : "",
    "b1" : "", "b2" : "", "b3" : "",
    "c1" : "", "c2" : "" ,"c3" : "" };

let playerRole = "";
let computerRole = "";
let turn = "";

function setGameInfo() {
    playerRole = prompt("What do you want to play as? ('x' or 'o'): ");
    if (playerRole == "x") computerRole = "o";
    else computerRole = "x";
    
    turn = prompt("Do you want to start first?: ('yes' or 'no'): ");
    if (turn == "yes") turn = "player";
    else turn = "computer";
}

function doPlayerMove() {
    let playerChoice = prompt("Enter to the grid:");

    while (isViable(playerChoice) === false) {
        console.log("Invalid move! Try again");
        playerChoice = prompt("Enter to the grid:");
    }
    board[playerChoice] = playerRole;
}

function doComputerMove() {
    let computerChoice = ""; 
    function getRandomABC() {
        const letters = ["a", "b", "c"];
        const randomIndex = Math.floor(Math.random() * letters.length);
        return letters[randomIndex];
    }

    function getRandom123() {
        const numbers = ["1", "2", "3"];
        const randomIndex = Math.floor(Math.random() * numbers.length);
        return numbers[randomIndex];
    }

    while (isViable(computerChoice) === false)
        computerChoice = getRandomABC() + getRandom123();

    board[computerChoice] = computerRole;
}

function isViable(choice) {
    if (board[choice] === "") 
        return true;
    else
        return false;
}

function playSingleRound() {
    if (turn == "player") {
        doPlayerMove();
        turn = "computer";
    }
    else {
        doComputerMove();
        turn = "player";
    }
}

function checkWinner() {
    // Checking through a1 //
    if (board.a1 !== "") {
        if (
            (board.a1 === board.a2 && board.a1 === board.a3) || //horizontal
            (board.a1 === board.b1 && board.a1 === board.c1) || //vertical 
            (board.a1 === board.b2 && board.a1 === board.c3)    //diagonal 1
        ) {
            return board.a1};
    }
    // Checking through b2 //
    if (board.b2 !== "") {
        if (
            (board.b2 === board.b1 && board.b2 === board.b3) || //horizontal
            (board.b2 === board.a2 && board.b2 === board.c2) || //vertical
            (board.b2 === board.a1 && board.b2 === board.c3)    //diagonal 2
        ) {
            return board.b2};
    }
    // Checking through c3 // 
    if (board.c3 !== "") {
        if (
            (board.c3 === board.c2 && board.c3 === board.c1) || //horizontal
            (board.c3 === board.b3 && board.c3 === board.a3)    //vertical
        )  {
            return board.c3};
    }
    // Checking draw // 
    if ((board.a1 && board.a2 && board.a3 &&
        board.b1 && board.b2 && board.b3 &&
        board.c1 && board.c2 && board.c3)) 
            return "Draw";

}

function play() {
    while (checkWinner() === undefined) {
        playSingleRound();
    }
    if (checkWinner() == playerRole)
        console.log("Player Wins!");
    else if (checkWinner () == computerRole)
        console.log("Computer Wins!");
    else
        return "Draw";
}
setGameInfo();
play();

console.log(board);