import { render, screen } from "@testing-library/react";

import { Welcome } from "app/components/Welcome/Welcome";
import welcome from "app/images/welcome.jpg";
import { setupIntersectionObserverMock } from "app/testUtilities";

describe("test Welcome", () => {
  beforeEach(() => {
    setupIntersectionObserverMock();
    render(<Welcome />);
  });

  test("uses the image as the background", () => {
    expect(screen.getByTestId("welcome")).toHaveStyle(
      `background-image: url(${welcome.src})`,
    );
  });

  test("renders all of the text", () => {
    expect(screen.getByText("My Name is")).toBeInTheDocument();
    expect(screen.getByText("Simon")).toBeInTheDocument();
    expect(screen.getByText("and I am a")).toBeInTheDocument();
    expect(screen.getByText("Frontend Developer")).toBeInTheDocument();
  });
});
