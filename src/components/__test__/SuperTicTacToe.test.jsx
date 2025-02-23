import { render, screen, cleanup, within } from "@testing-library/react";
import { describe, expect, it, afterEach } from "vitest";
import { SuperTicTacToe } from "../SuperTicTacToe";
import userEvent from "@testing-library/user-event";
import { TURNS } from "../../constants";

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
});

