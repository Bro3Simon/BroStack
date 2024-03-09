import { render, screen } from "@testing-library/react";

import {
  MY_NAME,
  WHAT_AM_I,
  WHO_AM_I,
  Welcome,
} from "app/components/Welcome/Welcome";
import { JOB_TITLE } from "app/data/general";
import { setupIntersectionObserverMock } from "app/testUtilities";

describe("test Welcome", () => {
  beforeEach(() => {
    setupIntersectionObserverMock();
    render(<Welcome />);
  });

  test("renders the background image", () => {
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  test("renders all of the text", () => {
    expect(screen.getByText(WHO_AM_I)).toBeInTheDocument();
    expect(screen.getByText(MY_NAME.trim())).toBeInTheDocument();
    expect(screen.getByText(WHAT_AM_I)).toBeInTheDocument();
    expect(screen.getByText(JOB_TITLE)).toBeInTheDocument();
  });
});
