import { Box, Button, CardActions, CardContent, CardMedia, Link, Tab, Tabs } from '@mui/material';

import { CLIENT_WORK } from 'src/data/clientWork';
import { useTabs } from 'src/hooks/useTabs';
import { computeTabAndPanelProps } from 'src/utilities';

export function ClientWork() {
  const { handleChangeTab, tab } = useTabs();

  return (
    <>
      <Tabs onChange={handleChangeTab} value={tab} variant="scrollable">
        {CLIENT_WORK.map(({ name }) => (
          <Tab key={name} {...computeTabAndPanelProps(name, 'tab')} />
        ))}
      </Tabs>

      {CLIENT_WORK.map(({ description, href, image, name }, index) =>
        tab === index ? (
          <Box key={name} {...computeTabAndPanelProps(name, 'panel')}>
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
        ) : null,
      )}
    </>
  );
}
