import { render, screen } from "@testing-library/react";

import { BoxWithBackgroundImage } from "app/components/BoxWithBackgroundImage";
import { IMAGES } from "app/data/images";

describe("test BoxWithBackgroundImage", () => {
  test("renders an image", () => {
    render(
      <BoxWithBackgroundImage alt="" sizes="100vw" src={IMAGES[0].source} />,
    );

    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  test("The photo has the correct alt text", () => {
    const image = IMAGES[0];

    render(
      <BoxWithBackgroundImage
        alt={image.title}
        sizes="100vw"
        src={image.source}
      />,
    );

    const imageElement = screen.getByRole("img", {
      name: image.title,
    }) as HTMLImageElement;

    expect(imageElement).toBeInTheDocument();
  });

  test("renders supplied children", () => {
    const children = "test";

    render(
      <BoxWithBackgroundImage alt="" sizes="100vw" src={IMAGES[0].source}>
        {children}
      </BoxWithBackgroundImage>,
    );

    expect(screen.getByText(children)).toBeInTheDocument();
  });
});
