"use client";

import {
  Box,
  Button,
  CardActions,
  CardContent,
  Fade,
  Typography,
} from "@mui/material";

import { useInspirationalPosterGenerator } from "app/components/InspirationalPosterGenerator/useInspirationalPosterGenerator";

export function InspirationalPosterGenerator() {
  const {
    buildNewInspirationalPoster: handleEnter,
    fadeBackIn: handleExit,
    handleClickNewPoster,
    image,
    isFadingIn,
    quote,
  } = useInspirationalPosterGenerator();

  return (
    <Fade
      in={isFadingIn}
      onEnter={handleEnter}
      onExited={handleExit}
      timeout={1000}
    >
      <Box>
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <img alt={image?.title} src={image?.source.src} />

          <Box sx={{ bgcolor: "darkgoldenrod", px: 2, py: 1 }}>
            <Typography component="blockquote" data-testid="quote">
              {quote?.text}

              <Box
                component="footer"
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Typography
                  component="cite"
                  data-testid="author"
                  sx={{ textAlign: "center" }}
                >
                  ~ {quote?.author}
                </Typography>
              </Box>
            </Typography>
          </Box>
        </CardContent>

        <CardActions sx={{ justifyContent: "center" }}>
          <Button
            disabled={!isFadingIn}
            onClick={handleClickNewPoster}
            variant="contained"
          >
            New Poster
          </Button>
        </CardActions>
      </Box>
    </Fade>
  );
}
