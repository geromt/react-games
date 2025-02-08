import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'X',
  O: 'O',
}

const Square = ({ children, updateBoard, index }) => {
  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className='border-2 border-black w-5 h-5 flex justify-center items-center'>
      {children}
    </div>
  )
}

const WINNER_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
]

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if (board[index]) return
    if (winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    setTurn(turn === TURNS.X ? TURNS.O : TURNS.X)
    var newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
        setWinner('Draw')
    }
  }

  const checkWinner = (boardToCheck) => {
    for (const combination of WINNER_COMBINATIONS) {
      const [a, b, c] = combination
      if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
        return boardToCheck[a]
      }
    }
    return null
  }

  const checkEndGame = (boardToCheck) => {
    return !boardToCheck.includes(null)
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <main className='flex justify-center items-center flex-col h-screen'>
      <h1 className='text-3xl font-bold underline'>Tic-Tac-Toe</h1>
      <p>Current Turn: {turn}</p>
      <section className='grid grid-cols-3 gap-2'>
        {
          board.map((cell, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>{cell}</Square>
            )
          })
        }
      </section>
      {
        winner && (
          <p className='text-2xl font-bold'>Winner: {winner}</p>
        )
      }
      <button onClick={resetGame} className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Reset Game</button>
    </main>
  )
}

export default App
