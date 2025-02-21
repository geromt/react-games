import { Square } from './Square'

export function Board ({ board, updateBoard }) {
  return (
    <section role="tic-tac-toe-board" className='grid grid-cols-3 gap-2 p-2 rounded-2xl'>
      {
        board.map((cell, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>{cell}</Square>
          )
        })
      }
    </section>
  )
}