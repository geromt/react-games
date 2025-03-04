export function SuperSquare ({ children, updateBoard, index, enable, turn }) {
  const handleClick = () => {
    if (enable) updateBoard(index, turn)
  }

  return ( 
    <div onClick={handleClick} role="square" className={`border-4 rounded-xl md:rounded-2xl lg:rounded-2xl md:text-xl lg:text-3xl w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex justify-center items-center hover:bg-highlight/20 ${enable ? 'border-highlight' : 'border-highlight/50'}`}>
      {children}
    </div>
  )
}