import { useContext, useState } from 'react'
import { TURNS } from '../constants'
import { useSuperBoard } from '../hooks/useSuperBoard'
import { SuperBoard } from './SuperBoard'
import { BoardContext } from '../context/BoardContext'
import { checkEndGame, checkWinner } from '../services/ticTacToeService'
import ReactConfetti from 'react-confetti'

export function SuperTicTacToe() {
  const [globalBoard, setGlobalBoard] = useState(Array(9).fill(null))
  const [winner, setWinner] = useState(false)
  const turn = useState(TURNS.X)
  const [activeBoard, setActiveBoard] = useState(4)
  const boards = useContext(BoardContext)
  boards[0] = useSuperBoard({setActiveBoard, updateGlobalBoard:((w, a) => updateGlobalBoard(0, a, w)), myIndex:0})
  boards[1] = useSuperBoard({setActiveBoard, updateGlobalBoard:((w, a) => updateGlobalBoard(1, a, w)), myIndex:1})
  boards[2] = useSuperBoard({setActiveBoard, updateGlobalBoard:((w, a) => updateGlobalBoard(2, a, w)), myIndex:2})
  boards[3] = useSuperBoard({setActiveBoard, updateGlobalBoard:((w, a) => updateGlobalBoard(3, a, w)), myIndex:3})
  boards[4] = useSuperBoard({setActiveBoard, updateGlobalBoard:((w, a) => updateGlobalBoard(4, a, w)), myIndex:4})
  boards[5] = useSuperBoard({setActiveBoard, updateGlobalBoard:((w, a) => updateGlobalBoard(5, a, w)), myIndex:5})
  boards[6] = useSuperBoard({setActiveBoard, updateGlobalBoard:((w, a) => updateGlobalBoard(6, a, w)), myIndex:6})
  boards[7] = useSuperBoard({setActiveBoard, updateGlobalBoard:((w, a) => updateGlobalBoard(7, a, w)), myIndex:7})
  boards[8] = useSuperBoard({setActiveBoard, updateGlobalBoard:((w, a) => updateGlobalBoard(8, a, w)), myIndex:8})

  const updateGlobalBoard = (boardIndex, activeBoard, winner) => {
    const newGlobalBoard = [...globalBoard]
    newGlobalBoard[boardIndex] = winner
    setGlobalBoard(newGlobalBoard)
    const newGlobalWinner = checkWinner(newGlobalBoard)
    if (newGlobalWinner){
      setWinner(newGlobalWinner)
    } else if (checkEndGame(newGlobalBoard)){
      setWinner('Draw')
    }
  } 
  

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
      
      { !winner && <p className='text-2xl font-bold text-paragraph mt-8'>Turn: <span className='text-highlight'>{turn}</span></p>}
      { winner && <p role="global-winner" className='text-5xl font-bold text-main mt-8'>Winner: <span className='text-highlight'>{winner}</span></p>}
      <button className='mt-4 bg-highlight/90 hover:bg-highlight hover:scale-105 transition text-main font-bold py-2 px-4 rounded-2xl w-xl h-12 text-2xl'>Reset Game</button>
      { winner && <ReactConfetti /> }
    </>
  )
}