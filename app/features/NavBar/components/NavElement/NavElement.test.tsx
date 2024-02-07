import { render, screen } from "@testing-library/react";

import { NAV_BAR_LINKS } from "app/data/navBarLinks";
import { NavElement } from "app/features/NavBar/components/NavElement";

describe("test NavElement", () => {
  test("renders a nav element", () => {
    render(<NavElement />);

    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  test("renders all the links", () => {
    render(<NavElement />);

    expect(screen.getAllByRole("link")).toHaveLength(NAV_BAR_LINKS.length);
  });
});
