import { useState } from 'react'
import { TURNS } from '../constants'
import { Board } from './Board'
import { useBoard } from '../hooks/useBoard'
import ReactConfetti from 'react-confetti'

export function TicTacToe() {
  const [initTurn, setInitTurn] = useState(TURNS.X)
  const [board, turn, winner, updateBoard, resetGame] = useBoard({initTurn:TURNS.X})

  const handleRestart = () => {
    const tempTurn = initTurn === TURNS.X ? TURNS.O : TURNS.X
    setInitTurn(tempTurn)
    resetGame(tempTurn)
  }

  return (
    <>
      <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold mb-8 lg:mb-16'>Tic-Tac-Toe</h1>
      <Board board={board} updateBoard={updateBoard} />
      { !winner && <p className='text-2xl font-bold text-paragraph mt-8'>Turn: <span className='text-highlight'>{turn}</span></p>}
      { winner && <p className='text-5xl font-bold text-main mt-8'>Winner: <span className='text-highlight'>{winner}</span></p>}
      <button onClick={handleRestart} className='mt-4 bg-highlight/90 hover:bg-highlight hover:scale-105 transition text-main font-bold py-2 px-4 rounded-2xl w-80 md:w-xl h-12 text-2xl'>Reset Game</button>
      { winner && <ReactConfetti />}
    </>  
  )
}