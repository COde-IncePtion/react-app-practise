import React, { useState } from 'react'
import './style.css'
import { Cross, Zero } from './GameSymbols'

const GAME = [
  [-1, -1, -1],
  [-1, -1, -1],
  [-1, -1, -1]
]

const PLAYER = {
  PLAYER1: 'PLAYER - 1',
  PLAYER2: 'PLAYER - 2'
}

const SIGN = {
  ZERO: { label: 'ZERO', value: 0 },
  CROSS: { label: 'CROSS', value: 1 }
}

const TicTacToe = () => {
  const [board, setBoard] = useState(GAME)

  const [currentPlayer, setCurrentPlayer] = useState({
    player: PLAYER.PLAYER1,
    sign: SIGN.ZERO
  })

  const handleTurnPlayed = (rowIndex, colIndex) => {
    setBoard(prevBoard => {
      prevBoard[rowIndex][colIndex] = currentPlayer.sign.value
      return [...prevBoard];
    })

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
    )
  }

  return (
    <>
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
          )
        })}
      </div>

      <footer>
        <h3>{`${currentPlayer.player} turn : Please place a ${currentPlayer.sign.label}`}</h3>
      </footer>
    </>
  )
}

export default TicTacToe
