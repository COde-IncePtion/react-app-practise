import React, { useEffect, useState } from 'react';
import './style.css';
import { Cross, Zero } from './GameSymbols';
import Modal from './Modal';

const GAME = [
  [-1, -1, -1],
  [-1, -1, -1],
  [-1, -1, -1]
];

const PLAYER = {
  PLAYER1: 'PLAYER - 1',
  PLAYER2: 'PLAYER - 2'
};

const SIGN = {
  ZERO: { label: 'ZERO', value: 0 },
  CROSS: { label: 'CROSS', value: 1 }
};

const validateBoard = (board, lastChance) => {
  const { rowIndex, colIndex } = lastChance;
  const currentSymbol = board[rowIndex][colIndex];

  let rowCheckResult = true,
    colCheckResult = true;

  for (let i = 0; i < board[rowIndex].length; i++) {
    if (board[rowIndex][i] !== currentSymbol) {
      rowCheckResult = false;
      break;
    }
  }

  for (let i = 0; i < board[colIndex].length; i++) {
    if (board[i][colIndex] !== currentSymbol) {
      colCheckResult = false;
      break;
    }
  }
  return rowCheckResult || colCheckResult;
};

const TicTacToe = () => {
  const [board, setBoard] = useState(GAME);

  const [gameOver, setGameOver] = useState(false);

  const [currentPlayer, setCurrentPlayer] = useState({
    player: PLAYER.PLAYER1,
    sign: SIGN.ZERO
  });

  const [lastChance, setLastChance] = useState(null);

  useEffect(() => {
    if (!lastChance) return;

    if (validateBoard(board, lastChance)) {
      setGameOver(true);
      return;
    }

    setCurrentPlayer(currentPlayer =>
      currentPlayer.player === PLAYER.PLAYER1
        ? {
            player: PLAYER.PLAYER2,
            sign: SIGN.CROSS
          }
        : {
            player: PLAYER.PLAYER1,
            sign: SIGN.ZERO
          }
    );
  }, [board, lastChance]);

  const handleTurnPlayed = (rowIndex, colIndex) => {
    setBoard(prevBoard => {
      prevBoard[rowIndex][colIndex] = currentPlayer.sign.value;
      return [...prevBoard];
    });

    setLastChance({ rowIndex, colIndex });
  };

  return (
    <div className="game-layout">
      <h1>Tic Tac Toe</h1>
      <div className="game-board">
        {board.map((row, rowIndex) => {
          return (
            <>
              {row.map((cell, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className="cell"
                  onClick={() => handleTurnPlayed(rowIndex, colIndex)}
                >
                  {cell !== -1 && (cell === 0 ? <Zero /> : <Cross />)}
                </div>
              ))}
            </>
          );
        })}
      </div>

      <footer>
        <h3>{`${currentPlayer.player} turn : Please place a ${currentPlayer.sign.label}`}</h3>
      </footer>
      {gameOver && <Modal playerInfo={currentPlayer}/>}
    </div>
  );
};

export default TicTacToe;
