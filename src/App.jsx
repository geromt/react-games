import { useState } from 'react'
import './App.css'
import { TURNS } from './constants'
import { checkWinner, checkEndGame } from './services/ticTacToeService'
import { Board } from './components/Board'

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

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <main className='flex justify-center items-center flex-col h-screen'>
      <h1 className='text-5xl font-bold'>Tic-Tac-Toe</h1>
      <p>Current Turn: {turn}</p>
      <Board board={board} updateBoard={updateBoard} />
      { winner && <p className='text-2xl font-bold'>Winner: {winner}</p>}
      <button onClick={resetGame} className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Reset Game</button>
    </main>
  )
}

export default App
