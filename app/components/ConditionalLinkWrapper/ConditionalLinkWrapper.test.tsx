import { render, screen } from "@testing-library/react";

import { ConditionalLinkWrapper } from "app/components/ConditionalLinkWrapper";

describe("test ConditionalLinkWrapper", () => {
  const testText = "test";

  test("renders the supplied children without a link wrapper", () => {
    render(
      <ConditionalLinkWrapper shouldRenderLink={false}>
        {testText}
      </ConditionalLinkWrapper>,
    );

    expect(
      screen.queryByRole("link", { name: testText }),
    ).not.toBeInTheDocument();
    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  test("renders the supplied children inside a link", () => {
    render(
      <ConditionalLinkWrapper
        href="https://www.brostack.net"
        shouldRenderLink={true}
      >
        {testText}
      </ConditionalLinkWrapper>,
    );

    expect(screen.getByRole("link", { name: testText })).toBeInTheDocument();
  });
});
