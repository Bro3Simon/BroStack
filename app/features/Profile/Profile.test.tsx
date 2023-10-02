import { render, screen } from "@testing-library/react";

import { Profile } from "app/features/Profile/Profile";
import {
  setupIntersectionObserverMock,
  testCategoriesIsRendered,
} from "app/testUtilities";

describe("test Profile", () => {
  test("renders all of the correct text", () => {
    setupIntersectionObserverMock();
    render(<Profile />);

    expect(screen.getByText("Experienced business")).toBeInTheDocument();
    expect(screen.getByText("IT")).toBeInTheDocument();
    expect(
      screen.getByText(
        "professional described as, responsible, cooperative quick-learning, motivated and possessing a diverse background. Has experience leading teams, developing information systems and software using various forms of the",
      ),
    ).toBeInTheDocument();
    expect(screen.getAllByText("SDLC")).toHaveLength(2);
    expect(
      screen.getByText(
        "and creating data reports. Experiences include administration, supervising, quality assurance software testing, project management, business systems analysis, creating websites, organizing massive amounts of online content to create user friendly",
      ),
    ).toBeInTheDocument();
    expect(screen.getByText("GUI")).toBeInTheDocument();
    expect(screen.getByText(", and user support.")).toBeInTheDocument();
  });

  test("renders Categories", () => {
    render(<Profile />);

    testCategoriesIsRendered();
    jest.restoreAllMocks();
  });
});
