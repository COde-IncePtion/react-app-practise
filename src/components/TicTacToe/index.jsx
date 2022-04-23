import React, { useState } from 'react'
import './style.css'
import { Cross, Zero } from './GameSymbols'

const GAME = [
  [0, -1, -1],
  [-1, -1, -1],
  [-1, -1, -1]
]

const PLAYER = {
  PLAYER1: 'PLAYER - 1',
  PLAYER2: 'PLAYER - 1'
}

const SIGN = {
  ZERO: 'ZERO',
  CROSS: 'CROSS'
}

const TicTacToe = () => {
  const [board, setBoard] = useState(GAME)

  const [currentPlayer, setCurrentPlayer] = useState({
    player: PLAYER.PLAYER1,
    sign: SIGN.ZERO
  });

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="game-board">
        {board.map((row, rowIndex) => {
          return (
            <>
              {row.map((cell, colIndex) => (
                <div key={`${rowIndex}-${colIndex}`} className="cell">
                  {cell !== -1 && (cell === 0 ? <Zero/> : <Cross/>) }
                </div>
              ))}
            </>
          )
        })}
      </div>

      <footer>
        <h3>{`${currentPlayer.player} turn : Please place a ${currentPlayer.sign}`}</h3>
      </footer>
    </>
  )
}

export default TicTacToe
