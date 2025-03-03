import { BrowserRouter, Routes } from 'react-router-dom'
import { SuperTicTacToe } from './components/SuperTicTacToe'
import { TicTacToe } from './components/TicTacToe'
import { Home } from './components/Home'
import { Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <main className='flex justify-center items-center flex-col h-screen'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/super-tic-tac-toe" element={<SuperTicTacToe />}/>
          <Route path="/tic-tac-toe" element={<TicTacToe />} />  
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
