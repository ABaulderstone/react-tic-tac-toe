import React from 'react';

const Cell = ({ children, updateBoard, row, col, player }) => {
  const onClick = () => {
    updateBoard(row, col, player);
  };
  return (
    <div
      onClick={onClick}
      style={{
        height: '100px',
        border: '2px solid white',
        borderCollapse: 'collapse',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2em',
      }}
    >
      {children}
    </div>
  );
};

export default Cell;
