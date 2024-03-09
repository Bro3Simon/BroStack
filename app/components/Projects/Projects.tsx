import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Link,
  Typography,
  Unstable_Grid2,
} from "@mui/material";

import { BoxWithBackgroundImage } from "app/components/BoxWithBackgroundImage";
import { Zoom } from "app/components/Zoom";
import { PROJECTS } from "app/data/projects";

const xsSize = 250;
const smSize = 400;
const mdSize = 280;
const imageWidths = { md: mdSize, sm: smSize, xs: xsSize };

export function Projects() {
  return (
    <Unstable_Grid2
      alignItems="stretch"
      container
      gap={2}
      justifyContent="center"
      mt={2}
    >
      {PROJECTS.map(({ description, href, image, name }) => (
        <Unstable_Grid2 key={name} md={5} xs={12}>
          <Box component={Zoom} height="100%">
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <CardHeader
                title={name}
                titleTypographyProps={{
                  component: "h3",
                  textAlign: "center",
                  variant: "h5",
                }}
              />

              <CardContent>
                <BoxWithBackgroundImage
                  alt={name}
                  height={{ md: 234, sm: 334, xs: 210 }}
                  margin="auto"
                  sizes={`(max-width: 559px) ${xsSize}px, (max-width: 899px) ${smSize}px, ${mdSize}px`}
                  src={image.src}
                  width={imageWidths}
                ></BoxWithBackgroundImage>

                <Typography
                  bgcolor="primary.main"
                  color="primary.contrastText"
                  margin="auto"
                  p={2}
                  width={imageWidths}
                >
                  {description}
                </Typography>
              </CardContent>

              <CardActions
                sx={{
                  alignItems: "end",
                  flexGrow: 1,
                  justifyContent: "center",
                  pb: 2,
                  pt: 3,
                }}
              >
                <Button
                  color="warning"
                  href={href}
                  LinkComponent={Link}
                  target="_blank"
                  variant="contained"
                >
                  View
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Unstable_Grid2>
      ))}
    </Unstable_Grid2>
  );
}
