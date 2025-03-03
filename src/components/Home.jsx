import { Link } from "react-router-dom";

export function Home() {
  return(
    <>
      <h1 className='text-7xl font-bold p-8 mb-8'>React Mini-Games</h1>
      <p className="text-paragraph text-xl my-8 font-mono">Collection of mini-games make with React</p>
      <div className="flex flex-row gap-8">
        <Link className="text-main p-4 bg-highlight text-3xl border-4 rounded-2xl border-secondary hover:scale-110 transition" to="/tic-tac-toe">Tic-Tac-Toe</Link>
        <Link className="text-main p-4 bg-highlight text-3xl border-4 rounded-2xl border-secondary hover:scale-110 transition" to="/super-tic-tac-toe">Super Tic-Tac-Toe</Link>
      </div>
      
    </>
  )
}