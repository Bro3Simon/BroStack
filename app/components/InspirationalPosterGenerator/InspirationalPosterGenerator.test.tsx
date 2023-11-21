/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect } from "react";

import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { InspirationalPosterGenerator } from "app/components/InspirationalPosterGenerator";

jest.mock("@mui/material", () => ({
  __esModule: true,
  ...jest.requireActual("@mui/material"),
  Fade: ({
    children,
    onEnter,
  }: {
    children: ReactNode;
    onEnter: () => void;
  }) => {
    useEffect(() => {
      onEnter();
      setTimeout(() => {
        onEnter();
      });
    }, []);

    return <div>{children}</div>;
  },
}));

describe("test InspirationalPosterGenerator", () => {
  test("renders an image", () => {
    render(<InspirationalPosterGenerator />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  test("renders a quote", () => {
    render(<InspirationalPosterGenerator />);

    expect(screen.getByTestId("quote").innerHTML).not.toHaveLength(0);
  });

  test("renders an author", () => {
    render(<InspirationalPosterGenerator />);

    expect(screen.getByTestId("author").innerHTML).not.toHaveLength(0);
  });

  test("renders the new poster button", () => {
    render(<InspirationalPosterGenerator />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("renders a different image, quote and author after clicking the new poster button", async () => {
    // TODO: This test didn't work after migrating to Next
    // Fade from MUI was mocked at the top of the file
    // Image changes automatically with a useEffect and setTimeout
    // not by button click
    // await user.click is used to give the setTimeout enough time to process

    const user = userEvent.setup();

    render(<InspirationalPosterGenerator />);

    const originalImageAltText = (screen.getByRole("img") as HTMLImageElement)
      .alt;
    const originalQuote = screen.getByTestId("quote").innerHTML;
    const originalAuthor = screen.getByTestId("author").innerHTML;

    await user.click(screen.getByRole("button"));

    const secondImageAltText = (screen.getByRole("img") as HTMLImageElement)
      .alt;
    const secondQuote = screen.getByTestId("quote").innerHTML;
    const secondAuthor = screen.getByTestId("author").innerHTML;

    expect(originalImageAltText).not.toEqual(secondImageAltText);
    expect(originalQuote).not.toEqual(secondQuote);
    expect(originalAuthor).not.toEqual(secondAuthor);
    jest.restoreAllMocks();
  });
});
