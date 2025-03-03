import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, it } from "vitest";
import { Home } from "../Home"
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { userEvent } from "@testing-library/user-event"
import { TicTacToe } from "../TicTacToe";
import { SuperTicTacToe } from "../SuperTicTacToe";

describe("Home", () => {
  afterEach(cleanup)

  it("Should show the title", () => {
    render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>)
    screen.getByText("React Mini-Games")
  })

  it("Should redirect to tic-tac-toe when clicked", async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tic-tac-toe" element={<TicTacToe />} />
        </Routes>
      </MemoryRouter>
    )
      
    const ticTacToeLink = screen.getByText("Tic-Tac-Toe")
    await userEvent.click(ticTacToeLink)
    screen.getByText("Tic-Tac-Toe")
  })

  it("Should redirect to super tic-tac-toe when clicked", async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/super-tic-tac-toe" element={<SuperTicTacToe />} />
        </Routes>
      </MemoryRouter>
    )
      
    const superTicTacToeLink = screen.getByText("Super Tic-Tac-Toe")
    await userEvent.click(superTicTacToeLink)
    screen.getByText("Super Tic-Tac-Toe")
  })
})