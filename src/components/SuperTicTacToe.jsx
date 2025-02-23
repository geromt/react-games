import { useContext, useState } from 'react'
import { TURNS } from '../constants';
import { useSuperBoard } from '../hooks/useSuperBoard';
import { SuperBoard } from './SuperBoard';
import { BoardContext } from '../context/BoardContext';

export function SuperTicTacToe() {
  // eslint-disable-next-line no-unused-vars
  const [winner, setWinner] = useState(false)
  const turn = useState(TURNS.X)
  const [activeBoard, setActiveBoard] = useState(4)
  const boards = useContext(BoardContext)
  boards[0] = useSuperBoard({setActiveBoard})
  boards[1] = useSuperBoard({setActiveBoard})
  boards[2] = useSuperBoard({setActiveBoard})
  boards[3] = useSuperBoard({setActiveBoard})
  boards[4] = useSuperBoard({setActiveBoard})
  boards[5] = useSuperBoard({setActiveBoard})
  boards[6] = useSuperBoard({setActiveBoard})
  boards[7] = useSuperBoard({setActiveBoard})
  boards[8] = useSuperBoard({setActiveBoard})
  

  return (
    <>
      <h1 className='text-7xl font-bold p-8 mb-8'>Super Tic-Tac-Toe</h1>
      <section className='grid grid-cols-3 gap-4'>
        <SuperBoard board={boards[0][0]} updateBoard={boards[0][2]} enable={activeBoard==0} turn={turn} winner={boards[0][1]} /> 
        <SuperBoard board={boards[1][0]} updateBoard={boards[1][2]} enable={activeBoard==1} turn={turn} winner={boards[1][1]} /> 
        <SuperBoard board={boards[2][0]} updateBoard={boards[2][2]} enable={activeBoard==2} turn={turn} winner={boards[2][1]} /> 
        <SuperBoard board={boards[3][0]} updateBoard={boards[3][2]} enable={activeBoard==3} turn={turn} winner={boards[3][1]} /> 
        <SuperBoard board={boards[4][0]} updateBoard={boards[4][2]} enable={activeBoard==4} turn={turn} winner={boards[4][1]} /> 
        <SuperBoard board={boards[5][0]} updateBoard={boards[5][2]} enable={activeBoard==5} turn={turn} winner={boards[5][1]} /> 
        <SuperBoard board={boards[6][0]} updateBoard={boards[6][2]} enable={activeBoard==6} turn={turn} winner={boards[6][1]} /> 
        <SuperBoard board={boards[7][0]} updateBoard={boards[7][2]} enable={activeBoard==7} turn={turn} winner={boards[7][1]} /> 
        <SuperBoard board={boards[8][0]} updateBoard={boards[8][2]} enable={activeBoard==8} turn={turn} winner={boards[8][1]} /> 
      </section>
      
      { !winner && <p>Turn: <span>{turn}</span></p>}
      <button>Restart Game</button>
    </>
  )
}