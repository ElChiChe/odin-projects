//ELEMENTOS BOARD HTML
const boardContainer = document.querySelector(".board");
const cells = document.querySelectorAll(".cell");

const turnX = document.querySelector(".turn-x");
const turnO = document.querySelector(".turn-o");

//MODAL
const modal = document.querySelector(".modal");
const result = document.querySelector(".result");


//SCORING
const spanScorelayer1 = document.querySelector(".score-player1");
const spanScorePlayer2 = document.querySelector(".score-player2");


//BOTON RESET BOARD
const btnReset = document.querySelector(".btn-reset");

//COMBINACIONES GANADORAS
const WINNER_COMBOS = [
	[0, 1, 2], // HORIZONTAL
	[3, 4, 5], // HORIZONTAL
	[6, 7, 8], // HORIZONTAL
	[0, 3, 6], // HORIZONTAL
	[2, 5, 8], //VERTICAL
	[1, 4, 7], //VERTICAL
	[0, 5, 8], //VERTICAL
	[0, 4, 8], //DIAGONAL
	[2, 4, 6] //DIAGONAL
]

//FUNCIÓN PARA CREAR EL GAMEBOARD
const GameBoard = () => {
	let boardArray = Array(9).fill(null);
	let playerSelection = ["", "", "", "", "", "", "", ""];
	let playerTurn = "X";
	let setWinner = false;

	//SCORE
	let scorePlayer1 = 0;
	let scorePlayer2 = 0;

	//RECORREMOS TODAS LAS CELDAS Y LE AGREGAMOS UN LISTENER CLICK

	let newBoard = [...boardArray];

		cells.forEach((cell, i) => {
			cell.addEventListener("click", e => {

				//VERIFICAMOS SI LA CELDA YA TIENE UNA SELECCIÓN, VERDADERO NO PODEMOS CAMBIAR EL VALOR, FALSO COLOCAMOS VALOR
				//TAMBIÉN VERIFICAR SI HAY UN GANADOR O ES UN EMPATE CUANDO NO HAYA MÁS CELDAS
				if(newBoard[i] || setWinner) {
					return;
				}

				//COLOCAMOS EN LAS CELDAS LA SELECCIÓN DEL JUGADOR, EN ESTE CASO "X"
				cell.textContent = playerTurn;
				newBoard[i] = playerTurn;

				
				checkWinner(i);

				//VERIFICAMOS SI EL TURNO DEL JUGADOR ES X, VERDADERO CAMBIAR A "O", SINO "X"
				playerTurn === "X" ? playerTurn = "O" : playerTurn = "X";
				playerTurn === "X" ? cell.style.background = "yellow" : cell.style.background = "lightblue";

				//VERIFICAMOS SI HAY UN GANADOR, VERDADERO DEJAMOS DE SELECCIONAR, FALSO = EMPATE
				//MOSTRAR MODAL
				if(setWinner === true) {
					modal.style.display = "flex";
					result.innerHTML = `El ganador es <span
					style="color:${playerTurn === "X" ? "yellow" : "lightblue"}; background: black; padding: 2px">
					${playerTurn === "X" ? "O" : "X"}</span>!!`;

					if(playerTurn === "X") {
						scorePlayer2++;
						spanScorePlayer2.textContent = scorePlayer2;
					}
					else {
						scorePlayer1++;
						spanScorelayer1.textContent = scorePlayer1;
					}
					return;
				}


				//VERIFICAMOS SI HAY UN EMPATE
				let isDraw = newBoard.every(cell => cell !== null);

				if(isDraw) {
					modal.style.display = "flex";
					result.textContent = "EMPATE";
					return;
				}

			})
		})

	//VERIFICAR SI HAY UN GANADOR
	const checkWinner = index => {
		for(let winner of WINNER_COMBOS) {
			let [a, b, c] = winner

			if(newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
				setWinner = true;
			}
		}
	}


	//CONFIRMAR GANADOR Y TERMINAR EL JUEGO
	// const setWinner = winner => {
	// 	console.log(`El ganador es ${winner}`)
	// }


	//FUNCIÓN RESTABLECER TABLERO
	const resetGame = (cell) => {
		newBoard = Array(9).fill(null);
		cells.forEach((cell, i) => {
			cell.textContent = "";
			cell.style.background = "";
			setWinner = false;
			modal.style.display = "none";
			result.textContent = "";
			playerTurn = "X";
		})
	}

	btnReset.addEventListener("click", resetGame);

}


GameBoard();