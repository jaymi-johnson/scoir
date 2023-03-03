import { render, screen } from "@testing-library/react";

import Catcher from "./Catcher";

describe("Catcher", () => {
  it("does not explode", () => {
    render(<Catcher options={[]} />);
  });

  it("renders all button", () => {
    render(<Catcher options={[]} />);
    const allButtons = screen.getAllByRole("button");
    // Autocomplete, search, random button
    expect(allButtons).toHaveLength(3);
  });
});
