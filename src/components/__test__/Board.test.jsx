import { describe, vi, it, expect, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { Board } from "../Board";

describe("Board", () => {
  afterEach(cleanup)

  it("Should render Board", () => {
    const board = [null, null, null, null, null, null, null, null, null]
    const updateBoard = vi.fn()
    render(<Board board={board} updateBoard={updateBoard}/>)
  })

  it("Should render 1 square per each element in board", () => {
    const board = [null, null, null, null, null, null, null, null, null]
    const updateBoard = vi.fn()
    render(<Board board={board} updateBoard={updateBoard}/>)
    const squares = screen.getAllByRole('square')
    expect(squares.length).toBe(9)
  })

  it("Should render the correct symbol in the square", () => {
    const board = ['X', null, 'O', null, 'X', null, 'O', null, 'X']
    const updateBoard = vi.fn()
    render(<Board board={board} updateBoard={updateBoard}/>)
    const squares = screen.getAllByRole('square')
    for (let i = 0; i < board.length; i++) {
      expect(squares[i].textContent).toBe(board[i] ?? '')
    }
  })
})