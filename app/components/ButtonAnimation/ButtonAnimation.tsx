import { Box, Button, CardContent } from "@mui/material";

const BORDER_RADIUS = 1;
const EXTRA_BORDER_HEIGHT = 6;
const FULL_HEIGHT = 45;
const FULL_WIDTH = 120;
const NEGATIVE_OFFSET = -5;

export function ButtonAnimation() {
  return (
    <CardContent
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        justifyContent: "center",
      }}
    >
      {[...Array(5)].map((_, index) => (
        <Box
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          sx={{
            "::after, ::before": {
              bgcolor: "primary.main",
              borderRadius: BORDER_RADIUS,
              content: '""',
              position: "absolute",
              transition: "all 0.3s linear",
              ...(index === 1 && {
                height: 0,
                width: FULL_WIDTH,
              }),
              ...(index === 4 && { height: EXTRA_BORDER_HEIGHT, width: 0 }),
            },
            ...(index === 0 && {
              "::after": {
                height: 0,
                left: NEGATIVE_OFFSET,
                top: "50%",
                width: FULL_WIDTH,
              },
              ":hover": {
                "::after": { height: FULL_HEIGHT, top: NEGATIVE_OFFSET },
              },
            }),
            ...(index === 1 && {
              "::after": {
                left: NEGATIVE_OFFSET,
                top: NEGATIVE_OFFSET,
              },
              "::before": {
                bottom: NEGATIVE_OFFSET,
                right: NEGATIVE_OFFSET,
              },
              ":hover": { "::after, ::before": { height: FULL_HEIGHT } },
            }),
            ...(index === 2 && {
              "::after": {
                height: FULL_HEIGHT,
                left: NEGATIVE_OFFSET,
                top: NEGATIVE_OFFSET,
                width: 0,
              },
              ":hover": { "::after": { width: FULL_WIDTH } },
            }),
            ...(index === 3 && {
              "::after": {
                height: FULL_HEIGHT,
                right: NEGATIVE_OFFSET,
                top: NEGATIVE_OFFSET,
                width: 0,
              },
              ":hover": { "::after": { width: FULL_WIDTH } },
            }),
            ...(index === 4 && {
              "::after": {
                borderBottomRightRadius: 0,
                left: 0,
                top: NEGATIVE_OFFSET,
                transition: "height 0.2s linear 0.4s, width 0.2s linear 0.6s",
              },
              "::before": {
                borderTopRightRadius: 0,
                bottom: NEGATIVE_OFFSET,
                right: NEGATIVE_OFFSET,
                transition:
                  "border-top-right-radius 0s linear 0.3s, height 0.2s linear, width 0.2s linear 0.2s",
              },
              ":hover": {
                "::after": {
                  content: '""',
                  height: FULL_HEIGHT + NEGATIVE_OFFSET,
                  transition: "height 0.2s linear 0.2s, width 0.2s linear",
                  width: FULL_WIDTH + NEGATIVE_OFFSET,
                },
                "::before": {
                  borderTopRightRadius: BORDER_RADIUS,
                  content: '""',
                  height: FULL_HEIGHT,
                  transition:
                    "border-top-right-radius 0s linear 0.5s, height 0.2s linear 0.6s width 0.2s linear 0.4s",
                  width: FULL_WIDTH,
                },
              },
            }),
            position: "relative",
            width: 110,
          }}
        >
          <Button
            color="warning"
            fullWidth
            sx={{ height: 35, zIndex: 2 }}
            variant="contained"
          >
            Hover Me
          </Button>
        </Box>
      ))}
    </CardContent>
  );
}
