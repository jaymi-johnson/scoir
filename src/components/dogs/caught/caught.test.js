import { render, screen } from "@testing-library/react";

import Caught from "./Caught";

describe("Caught", () => {
  it("does not explode", () => {
    render(<Caught />);
  });

  it("renders clear button", () => {
    render(<Caught />);
    const clearButton = screen.getAllByRole("button");
    expect(clearButton).toBeTruthy();
  });
});
