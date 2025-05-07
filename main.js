const { createApp } = Vue;

createApp({
	data() {
		return {
			title: "Kółko i Krzyżyk",
			currentPlayer: "X",
			winner: "",
			score: {
				X: 0,
				O: 0
			},
			board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ]
		};
	},
	methods: {
		mark(rowIdx, cellIdx) {
			if (this.winner) return;
			this.board[rowIdx][cellIdx] = this.currentPlayer;
			this.winner = this.checkWinner(this.currentPlayer);
			this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";

			if (this.winner) this.score[this.winner]++;
		},
		checkWinner(player) {
			for (let i = 0; i < 3; i++) {
				if (this.checkRow(i, player)) return player;
				if (this.checkColumn(i, player)) return player
			}
		
			if (this.checkMainDiagonal(player)) return player;
			if (this.checkSecondaryDiagonal(player)) return player;
		
			return null
		},
		checkRow(idx, player) {
			const row = this.board[idx]
			return row.every((cell) => cell === player)
		},
		checkColumn(idx, player) {
			const column = [this.board[0][idx], this.board[1][idx], this.board[2][idx]]
			return column.every((cell) => cell === player)
		},
		checkMainDiagonal(player) {
			const diagonal = [this.board[0][0], this.board[1][1], this.board[2][2]]
			return diagonal.every((cell) => cell === player)
		},
		checkSecondaryDiagonal(player) {
			const diagonal = [this.board[0][2], this.board[1][1], this.board[2][0]]
			return diagonal.every((cell) => cell === player)
		},
		initialState() {
			this.winner = "";
			this.board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ]
		},
		newGame() {
			this.initialState();
		}
	}
}).mount("#app");