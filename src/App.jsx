import { useState } from 'react'
import './App.css'
import { TURNS } from './constants'
import { Board } from './components/Board'
import { useBoard } from './hooks/useBoard'

function App() {
  const [initTurn, setInitTurn] = useState(TURNS.X)
  const [board, turn, winner, updateBoard, resetGame] = useBoard({initTurn:TURNS.X})

  const handleRestart = () => {
    const tempTurn = initTurn === TURNS.X ? TURNS.O : TURNS.X
    setInitTurn(tempTurn)
    resetGame(tempTurn)
  }

  return (
    <main className='flex justify-center items-center flex-col h-screen'>
      <h1 className='text-5xl font-bold'>Tic-Tac-Toe</h1>
      <Board board={board} updateBoard={updateBoard} />
      { !winner && <p className='text-2xl font-bold'>Turn: {turn}</p>}
      { winner && <p className='text-2xl font-bold'>Winner: {winner}</p>}
      <button onClick={handleRestart} className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Reset Game</button>
    </main>
  )
}

export default App
