import { render, screen, cleanup, within } from "@testing-library/react";
import { describe, expect, it, afterEach, vi } from "vitest";
import { SuperTicTacToe } from "../SuperTicTacToe";
import userEvent from "@testing-library/user-event";
import { TURNS } from "../../constants";

vi.mock('react-confetti', () => {
  return {
    __esModule: true,
    default: () => <div data-testid="confetti" />
  }
})

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

  it("Only the board 5 must be enable at the beginnig", async () => {
    render(<SuperTicTacToe />)
    const boards = screen.getAllByRole("tic-tac-toe-board")
    for (let i = 0; i < boards.length; i++) {
      const squares = within(boards[i]).getAllByRole("square")
      if (i === 4) {
        // Board 5 should be enabled
        await userEvent.click(squares[0])
        expect(squares[0].textContent).toBe(TURNS.X)
      } else {
        // Other boards should be disabled
        await userEvent.click(squares[0])
        expect(squares[0].textContent).toBe("")
      }
    }
  })

  it("Should activate the board of the last clicked square", async () => {
    render(<SuperTicTacToe />)
    const boards = screen.getAllByRole("tic-tac-toe-board")
    const firstBoard = boards[0]
    const centralBoard = boards[4]
    const centralSquares = within(centralBoard).getAllByRole("square")
    const firstSquares = within(firstBoard).getAllByRole("square")
    await userEvent.click(centralSquares[0])
    expect(centralSquares[0].textContent).toBeTruthy()
    await userEvent.click(firstSquares[4])
    expect(firstSquares[4].textContent).toBeTruthy()
    await userEvent.click(centralSquares[4])
    expect(centralSquares[4].textContent).toBeTruthy()
  })

  it("Should alternate between X and O", async () => {
    render(<SuperTicTacToe />)
    const boards = screen.getAllByRole("tic-tac-toe-board")
    const firstBoard = boards[0]
    const centralBoard = boards[4]
    const centralSquares = within(centralBoard).getAllByRole("square")
    const firstSquares = within(firstBoard).getAllByRole("square")
    await userEvent.click(centralSquares[0])
    expect(centralSquares[0].textContent).toBe(TURNS.X)
    await userEvent.click(firstSquares[4])
    expect(firstSquares[4].textContent).toBe(TURNS.O)
    await userEvent.click(centralSquares[4])
    expect(centralSquares[4].textContent).toBe(TURNS.X)
  })

  it("Should display the winner of the board", async () => {
    render(<SuperTicTacToe />)
    const boards = screen.getAllByRole("tic-tac-toe-board")
    const centralSquares = within(boards[4]).getAllByRole("square")
    const firstSquares = within(boards[0]).getAllByRole("square")
    const secondSquares = within(boards[1]).getAllByRole("square")
    await userEvent.click(centralSquares[0])
    await userEvent.click(firstSquares[4])
    await userEvent.click(centralSquares[1])
    await userEvent.click(secondSquares[4])
    await userEvent.click(centralSquares[2])
    within(boards[4]).getAllByRole("winner")
  })

  it("Should return to the current board if there's a winner in the objective", async () => {
    render(<SuperTicTacToe />)
    const boards = screen.getAllByRole("tic-tac-toe-board")
    const centralSquares = within(boards[4]).getAllByRole("square")
    const firstSquares = within(boards[0]).getAllByRole("square")
    const secondSquares = within(boards[1]).getAllByRole("square")
    const thirdSquares = within(boards[2]).getAllByRole("square")
    await userEvent.click(centralSquares[0])
    await userEvent.click(firstSquares[4])
    await userEvent.click(centralSquares[1])
    await userEvent.click(secondSquares[4])
    await userEvent.click(centralSquares[2])
    await userEvent.click(thirdSquares[4])
    await userEvent.click(thirdSquares[0])
    expect(thirdSquares[0].textContent).toBeTruthy()
  })

  it("Should check for a global winner", async () => {
    render(<SuperTicTacToe />)
    const boards = screen.getAllByRole("tic-tac-toe-board")
    const squares = Array(9).fill(null)
    for (let i=0; i<squares.length; i++)
      squares[i] = within(boards[i]).getAllByRole("square")
    await userEvent.click(squares[4][0])
    await userEvent.click(squares[0][4])
    await userEvent.click(squares[4][1])
    await userEvent.click(squares[1][4])
    await userEvent.click(squares[4][2])
    await userEvent.click(squares[2][4])
    await userEvent.click(squares[2][0])
    await userEvent.click(squares[0][2])
    await userEvent.click(squares[2][3])
    await userEvent.click(squares[3][2])
    await userEvent.click(squares[2][6])
    await userEvent.click(squares[6][2])
    await userEvent.click(squares[6][0])
    await userEvent.click(squares[0][6])
    await userEvent.click(squares[6][3])
    await userEvent.click(squares[3][6])
    await userEvent.click(squares[6][6])
    screen.getAllByRole("global-winner")
  })

  it("Should go to a random board if there's a winner in the objective and the current board")
});

