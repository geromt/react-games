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
      <h1 className='text-7xl font-bold p-8 mb-8'>Tic-Tac-Toe</h1>
      <Board board={board} updateBoard={updateBoard} />
      { !winner && <p className='text-2xl font-bold text-paragraph mt-8'>Turn: <span className='text-highlight'>{turn}</span></p>}
      { winner && <p className='text-5xl font-bold text-main mt-8'>Winner: <span className='text-highlight'>{winner}</span></p>}
      <button onClick={handleRestart} className='mt-4 bg-highlight/90 hover:bg-highlight hover:scale-105 transition text-main font-bold py-2 px-4 rounded-2xl w-xl h-12 text-2xl'>Reset Game</button>
    </main>
  )
}

export default App
