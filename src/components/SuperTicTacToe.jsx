import { useState } from 'react'
import { TURNS } from '../constants';
import { useSuperBoard } from '../hooks/useSuperBoard';
import { SuperBoard } from './SuperBoard';

export function SuperTicTacToe() {
  // eslint-disable-next-line no-unused-vars
  const [winner, setWinner] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [turn, setTurn] = useState(TURNS.X)
  // eslint-disable-next-line no-unused-vars
  const [boards, setBoards] = useState(Array(9).fill(null))
  boards[0] = useSuperBoard({initTurn:TURNS.X})
  boards[1] = useSuperBoard({initTurn:TURNS.X})
  boards[2] = useSuperBoard({initTurn:TURNS.X})
  boards[3] = useSuperBoard({initTurn:TURNS.X})
  boards[4] = useSuperBoard({initTurn:TURNS.X})
  boards[5] = useSuperBoard({initTurn:TURNS.X})
  boards[6] = useSuperBoard({initTurn:TURNS.X})
  boards[7] = useSuperBoard({initTurn:TURNS.X})
  boards[8] = useSuperBoard({initTurn:TURNS.X})
  

  return (
    <>
      <h1 className='text-7xl font-bold p-8 mb-8'>Super Tic-Tac-Toe</h1>
      <section className='grid grid-cols-3 gap-4'>
        <SuperBoard board={boards[0][0]} updateBoard={boards[0][3]} enable={false} /> 
        <SuperBoard board={boards[1][0]} updateBoard={boards[1][3]} enable={false} /> 
        <SuperBoard board={boards[2][0]} updateBoard={boards[2][3]} enable={false} /> 
        <SuperBoard board={boards[3][0]} updateBoard={boards[3][3]} enable={false} /> 
        <SuperBoard board={boards[4][0]} updateBoard={boards[4][3]} enable={true } /> 
        <SuperBoard board={boards[5][0]} updateBoard={boards[5][3]} enable={false} /> 
        <SuperBoard board={boards[6][0]} updateBoard={boards[6][3]} enable={false} /> 
        <SuperBoard board={boards[7][0]} updateBoard={boards[7][3]} enable={false} /> 
        <SuperBoard board={boards[8][0]} updateBoard={boards[8][3]} enable={false} /> 
      </section>
      
      { !winner && <p>Turn: <span>{turn}</span></p>}
      <button>Restart Game</button>
    </>
  )
}