import { Box, Typography } from "@mui/material";

import { BoxWithBackgroundImage } from "app/components/BoxWithBackgroundImage";
import { Zoom } from "app/components/Zoom";
import { IMAGES } from "app/data/images";

export const PHOTOGRAPHY_SUMMARY = [
  "I enjoy expressing my artistic side from time to time through photography and video. Enjoy a few of my favorite photos below or check out my ",
  "video",
  " on YouTube that has more than one million views!",
];

const xsSize = 220;
const smSize = 440;

export function Photography() {
  return (
    <>
      <Zoom>
        <Typography>
          <Typography component="span">{PHOTOGRAPHY_SUMMARY[0]}</Typography>

          <Typography
            component="a"
            href="https://www.youtube.com/watch?v=WB_et_y80Xc"
            rel="noopener noreferrer"
            sx={{ color: "primary.main" }}
            target="_blank"
          >
            {PHOTOGRAPHY_SUMMARY[1]}
          </Typography>

          <Typography component="span">{PHOTOGRAPHY_SUMMARY[2]}</Typography>
        </Typography>
      </Zoom>

      <Box
        display="flex"
        flexWrap="wrap"
        gap={2}
        justifyContent="center"
        mt={5}
      >
        {IMAGES.map(({ source, title }) => (
          <BoxWithBackgroundImage
            alt={title}
            component={Zoom}
            key={title}
            sizes={`(max-width: 559px) ${xsSize}px,  ${smSize}px`}
            src={source.src}
            sx={{
              "::before": {
                md: {
                  background: "rgba(255, 255, 255, 0.2)",
                  content: '""',
                  height: "100%",
                  left: "170%",
                  position: "absolute",
                  top: 0,
                  transform: "skewX(45deg)",
                  width: "100%",
                  zIndex: 1,
                },
              },
              ":hover": {
                md: {
                  "::before": {
                    left: "-170%",
                    transition: "0.5s",
                  },
                  boxShadow: "2px 2px 2px #000",
                  filter: "grayscale(0%)",
                },
              },
              filter: { md: "grayscale(100%)" },
              height: { sm: 300, xs: 150 },
              width: { sm: smSize, xs: xsSize },
            }}
          ></BoxWithBackgroundImage>
        ))}
      </Box>
    </>
  );
}
