/* 100devs tic-tac-toe js */
https://github.com/Dev-Corinne/TicTacToe

// Event listener for each cell.
function playerMove{
    document.querySelector('#one').addEventListener('click', () => {
        game.getBoard()[0]
    })
    document.querySelector('#two').addEventListener('click', )
    document.querySelector('#three').addEventListener('click', )
    document.querySelector('#four').addEventListener('click', )
    document.querySelector('#five').addEventListener('click', )
    document.querySelector('#six').addEventListener('click', )
    document.querySelector('#seven').addEventListener('click', )
    document.querySelector('#eight').addEventListener('click', )
    document.querySelector('#nine').addEventListener('click', )
}

// 0 1 2
// 3 4 5
// 6 7 8


let playerMove = []
let botMove = []
let chooseRandom = Math.floor( Math.random() * 9 )



for (moves = 0; moves < 3; moves++) {
    console.log( 'Player, please choose a square.' );
    playerMove;
    // bot makes a move
    
}



switch (playerMove) {
  case [0,1,2]:
  case [3,4,5]:
  case [6,7,8]:
  case [0,3,6]:
  case [1,4,7]:
  case [2,5,8]:
  case [2,4,6]:
  case [0,4,8]:
  	return ('Player wins!')
    break;
  default:
  	return ('Bot has moved.')
} 

switch (botMove) {
  case [0,1,2]:
  case [3,4,5]:
  case [6,7,8]:
  case [0,3,6]:
  case [1,4,7]:
  case [2,5,8]:
  case [2,4,6]:
  case [0,4,8]:
  	return ('Player wins!')
    break;
  default:
  	return ('Your move.')
}


class Squares {
	constructor(id) {
		this.id = id
    this.status = 0; 
	}
  getId() {
		return this.id; 
	}
  changeStatus(){
	 	this.status = 1; 
	}
}

class GameBoard {
	constructor(){
		this.board = [];
	}

	createBoard(){
		for(let i =0; i < 9; i++){
			let square = new Square(i);
			board.push(square);
		}
	}
	getBoard() {
		return this.board; 
	}
}

const game = new GameBoard();
GameBoard.createBoard();






