// Board grids // 
const board = {
    "a1" : "", "a2" : "", "a3" : "",
    "b1" : "", "b2" : "", "b3" : "",
    "c1" : "", "c2" : "" ,"c3" : "" };

const game = startGame();
playGame();
function gameInfo(turn, playerRole, computerRole) {
    this.turn = turn;
    this.playerRole = playerRole;
    this.computerRole = computerRole;
}

function playGame() {
    do {
        console.log("in playGame()'s while, checkWinner() returns: " + checkWinner());
        playRound();
    }
    while (checkWinner() === "No Winner");
}

function startGame() {
    let playerRole = prompt("Decide what you want to play('x' or 'o'):");
    let computerRole = "";
    if (playerRole == "x")
        computerRole = "o";
    else if (playerRole == "o")
        computerRole = "x";
    let turn = prompt("Enter who starts first('player' or 'computer'):");
    console.log(computerRole);
    return new gameInfo(turn, playerRole, computerRole);
}

function getComputerMove() {
    function getRandomABC () {
        let randomNum = Math.floor(Math.random() * 3);
        
        switch (randomNum) {
            case 0:
                return 'a';
            case 1:
                return 'b';
            case 2:
                return 'c';
            default:
                return 'a';
        }
    } 

    function getRandom123 () {
        let randomNum = Math.floor(Math.random() * 3)+1;
        return randomNum.toString();
    }

    let computerMove = getRandomABC() + getRandom123();
    console.log(computerMove);
    if (Object.keys(board).includes(computerMove))
        if (board[computerMove] === "")
            return computerMove;
}

function getPlayerMove() {
    const playerMove = prompt("Enter your move: ");
    if (Object.keys(board).includes(playerMove))
        if (board[playerMove] == "")
            return playerMove;
}

function checkWinner() {
    console.log("checkWinner()-beginning");
    // Checking through a1 //
    if (board.a1 !== "") {
        if (
            (board.a1 === board.a2 && board.a1 === board.a3) || //horizontal
            (board.a1 === board.b1 && board.a1 === board.c1) || //vertical 
            (board.a1 === board.b2 && board.a1 === board.c3)    //diagonal 1
        ) {console.log("test-a1");
            return board.a1};
    }
    // Checking through b2 //
    if (board.b2 !== "") {
        if (
            (board.b2 === board.b1 && board.b2 === board.b3) || //horizontal
            (board.b2 === board.a2 && board.b2 === board.c2) || //vertical
            (board.b2 === board.a1 && board.b2 === board.c3)    //diagonal 2
        ) {console.log("test-b2");
            return board.b2};
    }
    // Checking through c3 // 
    if (board.c3 !== "") {
        if (
            (board.c3 === board.c2 && board.c3 === board.c1) || //horizontal
            (board.c3 === board.b3 && board.c3 === board.a3)    //vertical
        )  {console.log("test-c3");
            return board.c3};
    }
    // Checking draw //
    if (!(board.a1 && board.a2 && board.a3 &&
            board.b1 && board.b2 && board.b3 &&
            board.c1 && board.c2 && board.c3)) 
        return "Draw";
    else
        return "No Winner";

}

function playRound() {
        let move = "";
        if (game.turn === "computer") {
            move = getComputerMove();
            board[move] = game.computerRole;
            game.turn = "player";
        }

        else if (game.turn === "player") {
            move = getPlayerMove();
            board[move] = game.playerRole;
            game.turn = "computer";
        }
        console.log("in playRound()'s while, checkWinner() returns: " + checkWinner());
}

console.log(board);
//playGame();

