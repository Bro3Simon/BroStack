import { render, screen } from "@testing-library/react";

import { Projects } from "app/components/Projects";
import { PROJECTS } from "app/data/projects";
import { setupIntersectionObserverMock } from "app/testUtilities";

describe("test Projects", () => {
  test("renders a header for every project", () => {
    setupIntersectionObserverMock();
    render(<Projects />);

    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(
      PROJECTS.length,
    );
  });

  test("renders an image for every project", () => {
    setupIntersectionObserverMock();
    render(<Projects />);

    expect(screen.getAllByRole("img")).toHaveLength(PROJECTS.length);
  });

  test("renders the correct description for every project", () => {
    setupIntersectionObserverMock();
    render(<Projects />);

    PROJECTS.forEach(({ description }) => {
      expect(screen.getByText(description)).toBeInTheDocument();
    });
  });

  test("renders a link for every project", () => {
    setupIntersectionObserverMock();
    render(<Projects />);

    expect(screen.getAllByRole("link")).toHaveLength(PROJECTS.length);
  });
});
