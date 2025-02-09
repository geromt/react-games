export function Square ({ children, updateBoard, index }) {
  const handleClick = () => {updateBoard(index)}

  return (
    <div onClick={handleClick} className='border-2 border-black w-5 h-5 flex justify-center items-center'>
      {children}
    </div>
  )
}