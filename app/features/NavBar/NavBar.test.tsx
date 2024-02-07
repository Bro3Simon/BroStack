import { render, screen } from "@testing-library/react";

import { NavBar } from "app/features/NavBar";

describe("test NavBar", () => {
  test("renders a header element", () => {
    render(<NavBar />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
  });
});
