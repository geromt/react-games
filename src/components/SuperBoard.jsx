import { SuperSquare } from './SuperSquare'

export function SuperBoard ({ board, updateBoard, enable=true, turn, winner }) {
  return (
    <section role="tic-tac-toe-board" className='relative grid grid-cols-3 gap-2 p-2 rounded-2xl'>
      {
        board.map((cell, index) => {
          return (
            <SuperSquare key={index} index={index} updateBoard={updateBoard} enable={enable} turn={turn}>
              {cell}
            </SuperSquare>
          )
        })
      }
      { winner && <div role="winner" className='absolute inset-0 flex justify-center items-center text-9xl text-main bg-highlight/30 rounded-2xl'>{winner}</div> }
    </section>

  )
}