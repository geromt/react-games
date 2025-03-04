export function Square ({ children, updateBoard, index }) {
  const handleClick = () => {updateBoard(index)}

  return ( 
      <div onClick={handleClick} role="square" className="border-4 rounded-2xl text-8xl w-28 h-28 md:w-40 md:h-40  flex justify-center items-center hover:bg-highlight/20 border-highlight">
        {children}
      </div>
  )
}