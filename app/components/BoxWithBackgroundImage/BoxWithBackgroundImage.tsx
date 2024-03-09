// eslint-disable-next-line import/named
import { Box, BoxProps } from "@mui/material";
import Image, { ImageProps } from "next/image";

import { Children } from "app/types/commonProps";

type BoxWithBackgroundImageProps = Pick<
  BoxProps,
  | "component"
  | "display"
  | "flexDirection"
  | "height"
  | "justifyContent"
  | "margin"
  | "sx"
  | "width"
> &
  Required<Pick<ImageProps, "alt" | "sizes" | "src">> &
  Partial<Children>;

export function BoxWithBackgroundImage({
  alt,
  children,
  component,
  display,
  flexDirection,
  height,
  justifyContent,
  margin,
  sizes,
  src,
  sx,
  width,
}: BoxWithBackgroundImageProps) {
  return (
    <Box
      component={component}
      display={display}
      flexDirection={flexDirection}
      height={height}
      justifyContent={justifyContent}
      margin={margin}
      overflow="hidden"
      position="relative"
      sx={sx}
      width={width}
    >
      <Image
        alt={alt}
        fill
        sizes={sizes}
        src={src}
        style={{
          objectFit: "cover",
        }}
      />

      {children}
    </Box>
  );
}
