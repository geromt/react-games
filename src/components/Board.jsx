import { Square } from './Square'

export function Board ({ board, updateBoard }) {
  return (
    <section className='grid grid-cols-3 gap-2'>
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