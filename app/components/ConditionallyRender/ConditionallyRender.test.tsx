import { render, screen } from "@testing-library/react";

import { ConditionallyRender } from "app/components/ConditionallyRender";

describe("test ConditionallyRender", () => {
  const child = "Test";

  test("renders the children when it should", () => {
    render(<ConditionallyRender shouldRender>{child}</ConditionallyRender>);

    expect(screen.getByText(child)).toBeInTheDocument();
  });

  test("does not render the children when it shouldn't", () => {
    render(
      <ConditionallyRender shouldRender={false}>{child}</ConditionallyRender>,
    );

    expect(screen.queryByText(child)).not.toBeInTheDocument();
  });
});
