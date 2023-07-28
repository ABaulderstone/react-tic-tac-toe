import React from 'react';
import Cell from './Cell';

const Board = ({ board, updateBoard, player }) => {
  const boardStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 100px',
    border: '3px solid white',
    borderCollapse: 'collapse',
  };
  console.log(board);
  return (
    <section style={boardStyles}>
      {board.flat().map((cell, index) => {
        const row = Math.floor(index / board[0].length);
        const col = index % board[0].length;
        return (
          <Cell
            player={player}
            updateBoard={updateBoard}
            row={row}
            col={col}
            key={`cell-${row}-${col}`}
          >
            {cell}
          </Cell>
        );
      })}
    </section>
  );
};

export default Board;
