import { render, screen } from "@testing-library/react";

import {
  PHOTOGRAPHY_SUMMARY,
  Photography,
} from "app/components/Photography/Photography";
import { IMAGES } from "app/data/images";
import { setupIntersectionObserverMock } from "app/testUtilities";

describe("test Photography", () => {
  test("renders all of the correct text", () => {
    setupIntersectionObserverMock();
    render(<Photography />);

    expect(screen.getByText(PHOTOGRAPHY_SUMMARY[0].trim())).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: PHOTOGRAPHY_SUMMARY[1] }),
    ).toBeInTheDocument();
    expect(screen.getByText(PHOTOGRAPHY_SUMMARY[2].trim())).toBeInTheDocument();
  });

  test("renders all of the photos", () => {
    setupIntersectionObserverMock();
    render(<Photography />);

    expect(screen.getAllByRole("img")).toHaveLength(IMAGES.length);
  });

  test("each photo has the correct alt text and source", () => {
    setupIntersectionObserverMock();
    render(<Photography />);

    IMAGES.forEach(({ source: { src: source }, title }) => {
      const image = screen.getByRole("img", {
        name: title,
      }) as HTMLImageElement;

      expect(image.src).toContain(source);
    });
  });
});
