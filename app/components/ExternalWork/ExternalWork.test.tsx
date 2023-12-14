import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { ExternalWork } from "app/components/ExternalWork/ExternalWork";
import { EXTERNAL_WORK } from "app/data/externalWork";

describe("test ExternalWork", () => {
  test("renders all the tabs with the correct label", () => {
    render(<ExternalWork />);

    EXTERNAL_WORK.forEach(({ name }) => {
      expect(screen.getByRole("tab", { name })).toBeInTheDocument();
    });
  });

  test("only renders a single tab panel", () => {
    render(<ExternalWork />);

    expect(screen.getAllByRole("tabpanel")).toHaveLength(1);
  });

  test("renders the first tab panel initially", () => {
    render(<ExternalWork />);

    expect(
      screen.getByRole("tabpanel", { name: EXTERNAL_WORK[0].name }),
    ).toBeInTheDocument();
  });

  test("renders the correct tab panel after the its tab is clicked", () => {
    const user = userEvent.setup();

    render(<ExternalWork />);

    EXTERNAL_WORK.forEach(async ({ name }) => {
      await user.click(
        screen.getByRole("tab", {
          name,
        }),
      );

      expect(screen.getByRole("tabpanel", { name })).toBeInTheDocument();
    });
  });

  test("renders the correct image for each tab panel", () => {
    const user = userEvent.setup();

    render(<ExternalWork />);

    EXTERNAL_WORK.forEach(async ({ image, name }) => {
      await user.click(
        screen.getByRole("tab", {
          name,
        }),
      );

      expect(screen.getByRole("img", { name: image })).toBeInTheDocument();
    });
  });

  test("renders the correct description for each tab panel", () => {
    const user = userEvent.setup();

    render(<ExternalWork />);

    EXTERNAL_WORK.forEach(async ({ description, name }) => {
      await user.click(
        screen.getByRole("tab", {
          name,
        }),
      );

      expect(screen.getByText(description)).toBeInTheDocument();
    });
  });

  test("renders the correct link for each tab panel", () => {
    const user = userEvent.setup();

    render(<ExternalWork />);

    EXTERNAL_WORK.forEach(async ({ href, name }) => {
      await user.click(
        screen.getByRole("tab", {
          name,
        }),
      );

      expect(screen.getByRole("link")).toHaveAttribute("href", href);
    });
  });
});
