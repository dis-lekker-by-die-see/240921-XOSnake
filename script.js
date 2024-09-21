"use strict";
// class Game {
//   private board: string[][];
//   private currentPlayer: string;
//   private moveList: { row: number; col: number; player: string }[];
//   private resetButton: HTMLElement;
//   private gameBoardElement: HTMLElement;
//   private gameOver: boolean;
//   private cells: HTMLElement[][];
//   constructor() {
//     this.board = [
//       ["", "", ""],
//       ["", "", ""],
//       ["", "", ""],
//     ];
//     this.currentPlayer = "X";
//     this.moveList = [];
//     this.gameOver = false;
//     this.gameBoardElement = document.getElementById("game-board")!;
//     this.resetButton = document.getElementById("reset-btn")!;
//     this.cells = [];
//     this.initialize();
//   }
//   // Initialize the game with a 3x3 board
//   private initialize(): void {
//     this.gameBoardElement.innerHTML = ""; // Clear the board
//     this.cells = [];
//     this.gameOver = false; // Reset game over status
//     for (let row = 0; row < 3; row++) {
//       const rowCells: HTMLElement[] = [];
//       for (let col = 0; col < 3; col++) {
//         const cell = document.createElement("div");
//         cell.classList.add("cell");
//         cell.addEventListener("click", () =>
//           this.handleCellClick(row, col, cell)
//         );
//         this.gameBoardElement.appendChild(cell);
//         rowCells.push(cell);
//       }
//       this.cells.push(rowCells);
//     }
//     this.resetButton.addEventListener("click", () => this.resetGame());
//   }
//   // Handle a player's move
//   private handleCellClick(row: number, col: number, cell: HTMLElement): void {
//     if (this.gameOver || this.board[row][col] !== "") return; // Prevent actions after game over or overwriting cells
//     // Update the board and display the player's move
//     this.board[row][col] = this.currentPlayer;
//     cell.textContent = this.currentPlayer;
//     cell.classList.add(this.currentPlayer === "X" ? "x" : "o");
//     // Record the move in the move list
//     this.moveList.push({ row, col, player: this.currentPlayer });
//     // Check if the current player has won
//     if (this.checkWinner()) {
//       this.gameOver = true;
//       setTimeout(
//         () =>
//           alert(
//             `Player ${this.currentPlayer} wins! Click the reset button to start a new game.`
//           ),
//         100
//       );
//       return;
//     }
//     // Remove the oldest move if more than 6 moves have been made
//     if (this.moveList.length > 6) {
//       const firstMove = this.moveList.shift(); // Remove the first move
//       if (firstMove) {
//         this.board[firstMove.row][firstMove.col] = ""; // Clear the old move on the board
//         const firstCell = this.cells[firstMove.row][firstMove.col]; // Clear the UI cell
//         firstCell.textContent = "";
//         firstCell.classList.remove("x", "o");
//       }
//     }
//     // Switch players
//     this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
//   }
//   // Check for a winning condition
//   private checkWinner(): boolean {
//     const winConditions = [
//       // Rows
//       [
//         { r: 0, c: 0 },
//         { r: 0, c: 1 },
//         { r: 0, c: 2 },
//       ],
//       [
//         { r: 1, c: 0 },
//         { r: 1, c: 1 },
//         { r: 1, c: 2 },
//       ],
//       [
//         { r: 2, c: 0 },
//         { r: 2, c: 1 },
//         { r: 2, c: 2 },
//       ],
//       // Columns
//       [
//         { r: 0, c: 0 },
//         { r: 1, c: 0 },
//         { r: 2, c: 0 },
//       ],
//       [
//         { r: 0, c: 1 },
//         { r: 1, c: 1 },
//         { r: 2, c: 1 },
//       ],
//       [
//         { r: 0, c: 2 },
//         { r: 1, c: 2 },
//         { r: 2, c: 2 },
//       ],
//       // Diagonals
//       [
//         { r: 0, c: 0 },
//         { r: 1, c: 1 },
//         { r: 2, c: 2 },
//       ],
//       [
//         { r: 0, c: 2 },
//         { r: 1, c: 1 },
//         { r: 2, c: 0 },
//       ],
//     ];
//     for (const condition of winConditions) {
//       const [a, b, c] = condition;
//       if (
//         this.board[a.r][a.c] &&
//         this.board[a.r][a.c] === this.board[b.r][b.c] &&
//         this.board[a.r][a.c] === this.board[c.r][c.c]
//       ) {
//         return true;
//       }
//     }
//     return false;
//   }
//   // Reset the game to its initial state
//   private resetGame(): void {
//     this.board = [
//       ["", "", ""],
//       ["", "", ""],
//       ["", "", ""],
//     ];
//     this.currentPlayer = "X";
//     this.moveList = [];
//     this.gameOver = false;
//     this.gameBoardElement.innerHTML = ""; // Clear the board in the UI
//     this.initialize(); // Reinitialize the board
//   }
// }
// // Initialize the game when the DOM is loaded
// document.addEventListener("DOMContentLoaded", () => {
//   new Game();
// });
class Game {
    constructor() {
        this.board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ];
        this.currentPlayer = "X";
        this.moveList = [];
        this.gameOver = false;
        this.gameBoardElement = document.getElementById("game-board");
        this.resetButton = document.getElementById("reset-btn");
        this.cells = [];
        this.initialize();
    }
    // Initialize the game with a 3x3 board
    initialize() {
        this.gameBoardElement.innerHTML = ""; // Clear the board
        this.cells = [];
        this.gameOver = false; // Reset game over status
        for (let row = 0; row < 3; row++) {
            const rowCells = [];
            for (let col = 0; col < 3; col++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.addEventListener("click", () => this.handleCellClick(row, col, cell));
                this.gameBoardElement.appendChild(cell);
                rowCells.push(cell);
            }
            this.cells.push(rowCells);
        }
        this.resetButton.addEventListener("click", () => this.resetGame());
    }
    // Handle a player's move
    handleCellClick(row, col, cell) {
        if (this.gameOver || this.board[row][col] !== "")
            return; // Prevent actions after game over or overwriting cells
        // Update the board and display the player's move
        this.board[row][col] = this.currentPlayer;
        cell.textContent = this.currentPlayer;
        cell.classList.add(this.currentPlayer === "X" ? "x" : "o");
        // Record the move in the move list
        this.moveList.push({ row, col, player: this.currentPlayer });
        // Remove the oldest move if more than 6 moves have been made
        if (this.moveList.length > 6) {
            const firstMove = this.moveList.shift(); // Remove the first move
            if (firstMove) {
                this.board[firstMove.row][firstMove.col] = ""; // Clear the old move on the board
                const firstCell = this.cells[firstMove.row][firstMove.col]; // Clear the UI cell
                firstCell.textContent = "";
                firstCell.classList.remove("x", "o");
            }
        }
        // Check if the current player has won
        if (this.checkWinner()) {
            this.gameOver = true;
            // Delaying the alert to make sure the piece removal finishes first
            setTimeout(() => alert(`Player ${this.currentPlayer} wins! Click the reset button to start a new game.`), 100);
            return;
        }
        // Switch players
        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
    }
    // Check for a winning condition
    checkWinner() {
        const winConditions = [
            // Rows
            [
                { r: 0, c: 0 },
                { r: 0, c: 1 },
                { r: 0, c: 2 },
            ],
            [
                { r: 1, c: 0 },
                { r: 1, c: 1 },
                { r: 1, c: 2 },
            ],
            [
                { r: 2, c: 0 },
                { r: 2, c: 1 },
                { r: 2, c: 2 },
            ],
            // Columns
            [
                { r: 0, c: 0 },
                { r: 1, c: 0 },
                { r: 2, c: 0 },
            ],
            [
                { r: 0, c: 1 },
                { r: 1, c: 1 },
                { r: 2, c: 1 },
            ],
            [
                { r: 0, c: 2 },
                { r: 1, c: 2 },
                { r: 2, c: 2 },
            ],
            // Diagonals
            [
                { r: 0, c: 0 },
                { r: 1, c: 1 },
                { r: 2, c: 2 },
            ],
            [
                { r: 0, c: 2 },
                { r: 1, c: 1 },
                { r: 2, c: 0 },
            ],
        ];
        for (const condition of winConditions) {
            const [a, b, c] = condition;
            if (this.board[a.r][a.c] &&
                this.board[a.r][a.c] === this.board[b.r][b.c] &&
                this.board[a.r][a.c] === this.board[c.r][c.c]) {
                return true;
            }
        }
        return false;
    }
    // Reset the game to its initial state
    resetGame() {
        this.board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ];
        this.currentPlayer = "X";
        this.moveList = [];
        this.gameOver = false;
        this.gameBoardElement.innerHTML = ""; // Clear the board in the UI
        this.initialize(); // Reinitialize the board
    }
}
// Initialize the game when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    new Game();
});
