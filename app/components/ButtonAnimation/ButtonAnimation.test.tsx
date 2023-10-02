import { render, screen } from "@testing-library/react";

import { ButtonAnimation } from "app/components/ButtonAnimation";

describe("test ButtonAnimation", () => {
  test("renders buttons", () => {
    render(<ButtonAnimation />);

    expect(screen.getAllByRole("button")).not.toHaveLength(0);
  });
});
