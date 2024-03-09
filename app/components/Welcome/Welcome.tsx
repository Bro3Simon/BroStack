"use client";

import { Typography } from "@mui/material";
import { Slide } from "react-awesome-reveal";

import { BoxWithBackgroundImage } from "app/components/BoxWithBackgroundImage";
import { JOB_TITLE } from "app/data/general";
import { useSmAndUp } from "app/hooks/useSmAndUp";
import welcome from "app/images/welcome.jpg";

export const WHO_AM_I = "My name is";
export const MY_NAME = " Simon";
export const WHAT_AM_I = "and I am a";

export function Welcome() {
  const { isSmAndUp } = useSmAndUp();

  return (
    <BoxWithBackgroundImage
      alt=""
      component="section"
      display="flex"
      flexDirection="column"
      height="100vh"
      justifyContent="center"
      sizes="100vw"
      src={welcome}
    >
      <Slide delay={1000} direction="left" triggerOnce>
        <Typography
          component="h1"
          sx={{
            backgroundImage:
              "linear-gradient(to right, black, transparent 50%)",
          }}
        >
          <Typography
            component="span"
            sx={{ ml: 1, mt: { sm: 5, xs: 3 } }}
            variant={isSmAndUp ? "h2" : "h4"}
          >
            {WHO_AM_I}

            <Typography
              component="span"
              sx={{ color: "warning.main" }}
              variant={isSmAndUp ? "h1" : "h3"}
            >
              {MY_NAME}
            </Typography>
          </Typography>

          <Typography
            component="span"
            sx={{ display: "block", ml: { sm: 5, xs: 3 } }}
            variant={isSmAndUp ? "h5" : "h6"}
          >
            {WHAT_AM_I}

            <Typography
              component="span"
              sx={{ color: "warning.main" }}
              variant={isSmAndUp ? "h4" : "h5"}
            >
              {` ${JOB_TITLE}`}
            </Typography>
          </Typography>
        </Typography>
      </Slide>
    </BoxWithBackgroundImage>
  );
}
