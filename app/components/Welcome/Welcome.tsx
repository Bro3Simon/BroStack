import { Box, Typography } from "@mui/material";
import { Slide } from "react-awesome-reveal";

import { useSmAndUp } from "app/hooks/useSmAndUp";
import welcome from "app/images/welcome.jpg";
import { JOB_TITLE } from "app/utilities";

export function Welcome() {
  const { isSmAndUp } = useSmAndUp();

  return (
    <Box
      component="section"
      data-testid="welcome"
      sx={{
        backgroundImage: `url(${welcome.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "rgba(255, 255, 255, 0.5)",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
      }}
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
            My Name is
            <Typography
              component="span"
              sx={{ color: "warning.main" }}
              variant={isSmAndUp ? "h1" : "h3"}
            >
              {" Simon"}
            </Typography>
          </Typography>

          <Typography
            component="span"
            sx={{ display: "block", ml: { sm: 5, xs: 3 } }}
            variant={isSmAndUp ? "h5" : "h6"}
          >
            and I am a
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
    </Box>
  );
}
