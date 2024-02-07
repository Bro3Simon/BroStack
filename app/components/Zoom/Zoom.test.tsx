import { render, screen } from "@testing-library/react";

import { Zoom } from "app/components/Zoom";
import { setupIntersectionObserverMock } from "app/testUtilities";

describe("test Zoom", () => {
  beforeAll(() => {
    setupIntersectionObserverMock();
  });

  test("renders supplied children", () => {
    const children = "children test";

    render(
      <Zoom>
        <div>{children}</div>
      </Zoom>,
    );

    expect(screen.getByText(children)).toBeInTheDocument();
  });
});
