import { render, screen } from "@testing-library/react";

import { SKILLS } from "app/data/skills";
import { PROFILE_SUMMARY, Profile } from "app/features/Profile/Profile";
import { setupIntersectionObserverMock } from "app/testUtilities";

describe("test Profile", () => {
  test("renders profile summary text", () => {
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

    const exampleCategoryName = SKILLS.categories[0].name;

    expect(screen.getByText(exampleCategoryName)).toBeInTheDocument();
    jest.restoreAllMocks();
  });
});
