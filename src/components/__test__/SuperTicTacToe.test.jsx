import { render, screen, cleanup, within } from "@testing-library/react";
import { describe, expect, it, afterEach } from "vitest";
import { SuperTicTacToe } from "../SuperTicTacToe";
import userEvent from "@testing-library/user-event";

describe("SuperTicTacToe", () => {
  afterEach(cleanup)

  it("Should render Title", () => {
    render(<SuperTicTacToe />)
    screen.getByText("Super Tic-Tac-Toe")
  })

  it("Should render 9 TicTacToe boards", () => {
    render(<SuperTicTacToe />)
    screen.getAllByRole("tic-tac-toe-board")
    expect(screen.getAllByRole("tic-tac-toe-board").length).toBe(9)
  })

  it("Should render the turn at the beginning", () => {
    render(<SuperTicTacToe />)
    screen.getByText("Turn:")
  })

  it("Should render the reset Button", () => {
    render(<SuperTicTacToe />)
    screen.getAllByRole("button", "Restart Game")
  })

  it("Only the board 5 must be enable at the beginnig", async () => 
  {
    render(<SuperTicTacToe />)
    const boards = screen.getAllByRole("tic-tac-toe-board")
    for (let i = 0; i < boards.length; i++) {
      const squares = within(boards[i]).getAllByRole("square")
      if (i === 4) {
        // Board 5 should be enabled
        await userEvent.click(squares[0])
        expect(squares[0].textContent).toBe("X")
      } else {
        // Other boards should be disabled
        await userEvent.click(squares[0])
        expect(squares[0].textContent).toBe("")
      }
    }
  })
});

