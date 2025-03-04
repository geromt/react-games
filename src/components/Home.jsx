import { Link } from "react-router-dom";

export function Home() {
  return(
    <>
      <h1 className='px-8 text-6xl md:text-7xl lg:text-8xl font-bold  mb-4'>React Mini-Games</h1>
      <p className="px-8 text-paragraph text-xl md:text-2xl mb-16 font-mono">Collection of mini-games make with React</p>
      <div className="flex flex-col gap-8">
        <Link className="text-main p-4 md:px-16 md:py-6 text-center bg-highlight text-3xl md:text-4xl border-4 rounded-2xl border-secondary hover:scale-110 transition" to="/tic-tac-toe">Tic-Tac-Toe</Link>
        <Link className="text-main p-4 md:px-16 md:py-6 text-center bg-highlight text-3xl md:text-4xl border-4 rounded-2xl border-secondary hover:scale-110 transition" to="/super-tic-tac-toe">Super Tic-Tac-Toe</Link>
      </div>
      
    </>
  )
}