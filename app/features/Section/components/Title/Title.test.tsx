import { render, screen } from "@testing-library/react";

import { Title } from "app/features/Section/components/Title";

describe("test Title", () => {
  const title = "Title Test";

  test("renders a header with the correct text", () => {
    render(<Title title={title} />);

    expect(
      screen.getByRole("heading", { level: 2, name: title }),
    ).toBeInTheDocument();
  });
});
