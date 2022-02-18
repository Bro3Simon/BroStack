import { Box, Button, CardActions, CardContent, Fade, Typography } from '@mui/material';

import { useInspirationalPosterGenerator } from 'src/components/InspirationalPosterGenerator/useInspirationalPosterGenerator';

export function InspirationalPosterGenerator() {
  const {
    buildNewInspirationalPoster,
    fadeBackIn,
    handleClickNewPoster,
    image,
    isFadingIn,
    quote,
  } = useInspirationalPosterGenerator();

  return (
    <Fade
      in={isFadingIn}
      onEnter={buildNewInspirationalPoster}
      onExited={fadeBackIn}
      timeout={1000}
    >
      <Box>
        <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
          <img alt={image.title} src={image.source} />

          <Box sx={{ bgcolor: 'darkgoldenrod', px: 2, py: 1 }}>
            <Typography component="blockquote">{quote.text}</Typography>

            <Typography component="figcaption" sx={{ textAlign: 'center' }}>
              ~ {quote.author}
            </Typography>
          </Box>
        </CardContent>

        <CardActions sx={{ justifyContent: 'center' }}>
          <Button disabled={!isFadingIn} onClick={handleClickNewPoster} variant="contained">
            New Poster
          </Button>
        </CardActions>
      </Box>
    </Fade>
  );
}
