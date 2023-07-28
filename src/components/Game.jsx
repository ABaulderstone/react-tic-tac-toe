import { useEffect, useState } from 'react';
import Board from './Board';

const Game = () => {
  const initialBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  const initialPlayer = Math.random() < 0.5 ? 'X' : 'O';
  const [currentPlayer, setCurrentPlayer] = useState(initialPlayer);
  const [board, setBoard] = useState(initialBoard);
  const [winningPlayer, setWinningPlayer] = useState(null);

  const switchPlayer = () => {
    currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X');
  };

  const determineWinner = (board) => {
    // Diagonals
    if (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') {
      return 'X';
    }
    if (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') {
      return '0';
    }

    if (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X') {
      return 'X';
    }
    if (board[0][2] === 'O' && board[1][1] === 'O' && board[2][0] === 'O') {
      return '0';
    }

    // Horizontals
    for (let i = 0; i < 3; i++) {
      const player = board[i][0];
      if (!player) continue;
      if (player === board[i][1] && player === board[i][2]) {
        return player;
      }
    }

    // verticals
    for (let i = 0; i < 3; i++) {
      const player = board[0][i];
      if (!player) continue;
      if (player === board[1][i] && player === board[2][i]) {
        return player;
      }
    }
  };

  useEffect(() => {
    const winner = determineWinner(board);
    console.log('winner', winner);
    setWinningPlayer(winner);
  }, [board]);

  const updateBoard = (row, col, player) => {
    if (winningPlayer || board[row][col]) return;
    const clone = board.map((row) => [...row]);
    clone[row][col] = player;
    setBoard(clone);
    switchPlayer();
  };

  return (
    <main>
      <h2>
        {winningPlayer ? `${winningPlayer} wins` : `${currentPlayer}'s turn`}
      </h2>
      <Board board={board} updateBoard={updateBoard} player={currentPlayer} />
    </main>
  );
};

export default Game;
