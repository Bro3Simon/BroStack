import { Box, Typography } from "@mui/material";
import { Zoom } from "react-awesome-reveal";

import { IMAGES } from "app/data/images";

export function Photography() {
  return (
    <>
      <Zoom>
        <Typography>
          <Typography component="span">
            {`I enjoy expressing my artistic side from time to time through photography and video. Enjoy a few of my favorite photos below or check out my `}
          </Typography>

          <Typography
            component="a"
            href="https://www.youtube.com/watch?v=WB_et_y80Xc"
            rel="noopener noreferrer"
            sx={{ color: "primary.main" }}
            target="_blank"
          >
            video
          </Typography>

          <Typography component="span">{` on YouTube that has more than one million views!`}</Typography>
        </Typography>
      </Zoom>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
          mt: 5,
        }}
      >
        {IMAGES.map(({ source, title }) => (
          <Box
            component={Zoom}
            key={title}
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
              maxWidth: { md: "48%", xs: "100%" },
              overflow: { md: "hidden" },
            }}
          >
            <Box
              alt={title}
              component="img"
              src={source.src}
              sx={{ height: "100%", width: "100%" }}
            />
          </Box>
        ))}
      </Box>
    </>
  );
}
