import { cleanup, render, screen, within } from "@testing-library/react"
import { afterEach, describe, expect, it, vi } from "vitest"
import App from "../App"
import userEvent from "@testing-library/user-event"

vi.mock('react-confetti', () => {
  return {
    __esModule: true,
    default: () => <div data-testid="confetti" />
  }
})

describe("App", () => {
  afterEach(cleanup)

  it("Should render App", () => {
    render(<App />)
  })

  it("Should render Title", () => {
    render(<App />)
    screen.getByText("Tic-Tac-Toe")
  })

  it("Should render Reset Game Button", () => {
    render(<App />)
    screen.getByRole("button", { name: "Reset Game" })
  })

  it("Should render Turn in the beginning", () => {
    render(<App />)
    screen.getByText("Turn:")
  })

  it("Should render a simbol when click on a square", async () => {
    render(<App />)
    const boardBoxes = screen.getAllByRole("square")
    await userEvent.click(boardBoxes[0])

    screen.getByText("X")
  })

  it("Should alternate between X and O", async () => {
    render(<App />)
    const boardBoxes = screen.getAllByRole("square")
    await userEvent.click(boardBoxes[0])
    await userEvent.click(boardBoxes[1])
    const box1 = within(boardBoxes[0])
    const box2 = within(boardBoxes[1])

    box1.getByText("X")
    box2.getByText("O")
  })

  it("Should render the winner when there is a winner", async () => {
    render(<App />)
    const boardBoxes = screen.getAllByRole("square")
    await userEvent.click(boardBoxes[0])
    await userEvent.click(boardBoxes[3])
    await userEvent.click(boardBoxes[1])
    await userEvent.click(boardBoxes[4])
    await userEvent.click(boardBoxes[2])
    screen.getByText("Winner:")
  })

  it("Should render confetti when there is a winner", async () => {
    render(<App />)
    const boardBoxes = screen.getAllByRole("square")
    await userEvent.click(boardBoxes[0])
    await userEvent.click(boardBoxes[3])
    await userEvent.click(boardBoxes[1])
    await userEvent.click(boardBoxes[4])
    await userEvent.click(boardBoxes[2])
    screen.getByTestId("confetti")
  })

  it("Should reset the game when click on Reset Game", async () => {
    render(<App />)
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