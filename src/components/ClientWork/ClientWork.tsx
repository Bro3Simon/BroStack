import { Fragment } from 'react';

import { Box, Button, CardActions, CardContent, CardMedia, Link, Tab, Tabs } from '@mui/material';

import { useClientWork } from 'src/components/ClientWork/useClientWork';
import { CLIENT_WORK } from 'src/data/clientWork';

export function ClientWork() {
  const { handleChangeTab, tab } = useClientWork();

  return (
    <>
      <Tabs onChange={handleChangeTab} value={tab} variant="scrollable">
        {CLIENT_WORK.map(({ name }) => {
          const accessibleName = name.replace(' ', '-');

          return (
            <Tab
              aria-controls={`panel-${accessibleName}`}
              id={`tab-${accessibleName}`}
              key={name}
              label={name}
            />
          );
        })}
      </Tabs>

      {CLIENT_WORK.map(({ description, href, image, name }, index) => {
        const accessibleName = name.replace(' ', '-');

        return tab === index ? (
          <Box
            aria-labelledby={`tab-${accessibleName}`}
            id={`panel-${accessibleName}`}
            key={name}
            role="tabpanel"
          >
            <CardMedia image={image} sx={{ height: 400 }} title={name} />

            <CardContent sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}>
              {description}
            </CardContent>

            <CardActions sx={{ justifyContent: 'center', pt: 3 }}>
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
          </Box>
        ) : null;
      })}
    </>
  );
}
