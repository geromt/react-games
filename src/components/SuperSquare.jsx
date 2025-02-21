export function SuperSquare ({ children, updateBoard, index, enable }) {
  const handleClick = () => {
    if (enable) updateBoard(index)
  }

  return ( 
    <div onClick={handleClick} role="square" className={`border-4 rounded-2xl text-xl w-10 h-10  flex justify-center items-center hover:bg-highlight/20 ${enable ? 'border-highlight' : 'border-highlight/50'}`}>
      {children}
    </div>
  )
}