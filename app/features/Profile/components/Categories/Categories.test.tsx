import { render, screen, within } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { SKILLS } from "app/data/skills";
import { Categories } from "app/features/Profile/components/Categories";

describe("test Categories", () => {
  test("renders all of the tabs with the correct label", () => {
    render(<Categories categories={SKILLS.categories} />);

    SKILLS.categories.forEach(({ name }) => {
      expect(screen.getByRole("tab", { name })).toBeInTheDocument();
    });
  });

  test("only renders a single tab panel", () => {
    render(<Categories categories={SKILLS.categories} />);

    expect(screen.getAllByRole("tabpanel")).toHaveLength(1);
  });

  test("renders the first tab panel initially", () => {
    render(<Categories categories={SKILLS.categories} />);

    expect(
      screen.getByRole("tabpanel", { name: SKILLS.categories[0].name }),
    ).toBeInTheDocument();
  });

  test("renders the correct tab panel after the its tab is clicked", () => {
    const user = userEvent.setup();

    render(<Categories categories={SKILLS.categories} />);

    SKILLS.categories.forEach(async ({ name }) => {
      await user.click(
        screen.getByRole("tab", {
          name,
        }),
      );

      expect(screen.getByRole("tabpanel", { name })).toBeInTheDocument();
    });
  });

  test("renders all the text for all the tab panels", () => {
    const user = userEvent.setup();

    render(<Categories categories={SKILLS.categories} />);

    SKILLS.categories.forEach(async ({ items, name }) => {
      await user.click(
        screen.getByRole("tab", {
          name,
        }),
      );

      const tabPanel = screen.getByRole("tabpanel", { name });

      items.forEach((item) => {
        if (typeof item === "string") {
          expect(within(tabPanel).getByText(item)).toBeInTheDocument();
        } else {
          expect(within(tabPanel).getByText(item.text)).toBeInTheDocument();
        }
      });
    });
  });
});
