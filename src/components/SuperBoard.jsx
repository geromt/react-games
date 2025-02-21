import { SuperSquare } from './SuperSquare'

export function SuperBoard ({ board, updateBoard, enable=true }) {
  return (
    <section role="tic-tac-toe-board" className='grid grid-cols-3 gap-2 p-2 rounded-2xl'>
      {
        board.map((cell, index) => {
          return (
            <SuperSquare key={index} index={index} updateBoard={updateBoard} enable={enable}>{cell}</SuperSquare>
          )
        })
      }
    </section>
  )
}