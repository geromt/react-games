export function Square ({ children, updateBoard, index }) {
  const handleClick = () => {updateBoard(index)}

  return (
    <div onClick={handleClick} role="square" className='border-4 rounded-2xl border-highlight text-8xl w-40 h-40  flex justify-center items-center hover:bg-highlight/20'>
      {children}
    </div>
  )
}