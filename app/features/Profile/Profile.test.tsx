import { render, screen } from "@testing-library/react";

import { SKILLS } from "app/data/skills";
import { PROFILE_SUMMARY, Profile } from "app/features/Profile/Profile";
import { setupIntersectionObserverMock } from "app/testUtilities";

describe("test Profile", () => {
  test("renders all of the correct text", () => {
    setupIntersectionObserverMock();
    render(<Profile />);

    expect(screen.getByText(PROFILE_SUMMARY[0].trim())).toBeInTheDocument();
    expect(screen.getByText(PROFILE_SUMMARY[1].trim())).toBeInTheDocument();
    expect(screen.getByText(PROFILE_SUMMARY[2].trim())).toBeInTheDocument();
    expect(screen.getByText(PROFILE_SUMMARY[3].trim())).toBeInTheDocument();
    expect(screen.getByText(PROFILE_SUMMARY[4].trim())).toBeInTheDocument();
    expect(screen.getByText(PROFILE_SUMMARY[5].trim())).toBeInTheDocument();
    expect(screen.getByText(PROFILE_SUMMARY[6].trim())).toBeInTheDocument();
  });

  test("renders Categories", () => {
    render(<Profile />);

    const text =
      typeof SKILLS.categories[0].items[1] === "string"
        ? SKILLS.categories[0].items[1]
        : SKILLS.categories[0].items[1].text;

    expect(screen.getByText(text)).toBeInTheDocument();
    jest.restoreAllMocks();
  });
});
