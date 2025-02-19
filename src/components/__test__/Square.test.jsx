import { cleanup, render, screen } from "@testing-library/react";
import { describe, it, vi, expect, afterEach } from "vitest";
import { Square } from "../Square";
import userEvent from "@testing-library/user-event";

describe("Square", () => {
  afterEach(cleanup)
  
  it("Should render Square", () => {
    const updateBoard = vi.fn()
    render(<Square updateBoard={updateBoard} index={'0'}>X</Square>);
  })

  it("Should call updateBoard when clicked", async () => {
    const updateBoard = vi.fn()
    render(<Square updateBoard={updateBoard} index={'0'}>X</Square>);
    const square = screen.getByRole('square')
    await userEvent.click(square)
    expect(updateBoard).toHaveBeenCalled()
  })
})
