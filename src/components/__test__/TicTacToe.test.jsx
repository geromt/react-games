import { cleanup, render, screen, within } from "@testing-library/react"
import { afterEach, describe, expect, it, vi } from "vitest"
import { TicTacToe } from "../TicTacToe"
import userEvent from "@testing-library/user-event"

vi.mock('react-confetti', () => {
  return {
    __esModule: true,
    default: () => <div data-testid="confetti" />
  }
})

describe("TicTacToe", () => {
  afterEach(cleanup)

  it("Should render Title", () => {
    render(<TicTacToe />)
    screen.getByText("Tic-Tac-Toe")
  })

  it("Should render Reset Game Button", () => {
    render(<TicTacToe />)
    screen.getByRole("button", { name: "Reset Game" })
  })

  it("Should render Turn in the beginning", () => {
    render(<TicTacToe />)
    screen.getByText("Turn:")
  })

  it("Should render a simbol when click on a square", async () => {
    render(<TicTacToe />)
    const boardBoxes = screen.getAllByRole("square")
    await userEvent.click(boardBoxes[0])

    screen.getByText("X")
  })

  it("Should alternate between X and O", async () => {
    render(<TicTacToe />)
    const boardBoxes = screen.getAllByRole("square")
    await userEvent.click(boardBoxes[0])
    await userEvent.click(boardBoxes[1])
    const box1 = within(boardBoxes[0])
    const box2 = within(boardBoxes[1])

    box1.getByText("X")
    box2.getByText("O")
  })

  it("Should render the winner when there is a winner", async () => {
    render(<TicTacToe />)
    const boardBoxes = screen.getAllByRole("square")
    await userEvent.click(boardBoxes[0])
    await userEvent.click(boardBoxes[3])
    await userEvent.click(boardBoxes[1])
    await userEvent.click(boardBoxes[4])
    await userEvent.click(boardBoxes[2])
    screen.getByText("Winner:")
  })

  it("Should render confetti when there is a winner", async () => {
    render(<TicTacToe />)
    const boardBoxes = screen.getAllByRole("square")
    await userEvent.click(boardBoxes[0])
    await userEvent.click(boardBoxes[3])
    await userEvent.click(boardBoxes[1])
    await userEvent.click(boardBoxes[4])
    await userEvent.click(boardBoxes[2])
    screen.getByTestId("confetti")
  })

  it("Should reset the game when click on Reset Game", async () => {
    render(<TicTacToe />)
    const boardBoxes = screen.getAllByRole("square")
    await userEvent.click(boardBoxes[0])
    await userEvent.click(boardBoxes[3])
    await userEvent.click(boardBoxes[1])
    await userEvent.click(boardBoxes[4])
    await userEvent.click(boardBoxes[2])
    const resetButton = screen.getByRole("button", { name: "Reset Game" })
    await userEvent.click(resetButton)
    screen.getByText("Turn:")
    expect(screen.queryByText("Winner:")).toBeNull()
    expect(screen.queryByTestId("confetti")).toBeNull()
  })
})