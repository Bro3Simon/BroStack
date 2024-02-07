import { render, screen } from "@testing-library/react";

import { Section } from "app/features/Section";
import { setupIntersectionObserverMock } from "app/testUtilities";

describe("test Section", () => {
  beforeAll(() => {
    setupIntersectionObserverMock();
  });

  const id = "test";
  const title = "Title Test";
  const children = "children test";

  test("section has the correct id", () => {
    render(
      <Section id={id} title={title}>
        <div>{children}</div>
      </Section>,
    );

    expect(screen.getByRole("region").id).toEqual(id);
  });

  test("renders a header with the correct text", () => {
    render(
      <Section id={id} title={title}>
        <div>{children}</div>
      </Section>,
    );

    expect(
      screen.getByRole("heading", { level: 2, name: title }),
    ).toBeInTheDocument();
  });

  test("renders supplied children", () => {
    render(
      <Section id={id} title={title}>
        <div>{children}</div>
      </Section>,
    );

    expect(screen.getByText(children)).toBeInTheDocument();
  });
});
