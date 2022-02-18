import { ReactNode } from 'react';
import { Zoom } from 'react-awesome-reveal';

import { Box, Typography } from '@mui/material';

import { useSmAndUp } from 'src/hooks/useSmAndUp';

type SectionProps = {
  children: ReactNode;
  id: string;
  sectionTitle: string;
};

export function Section({ children, id, sectionTitle }: SectionProps) {
  const isSmAndUp = useSmAndUp();

  return (
    <Box component="section" id={id} sx={{ pb: 10, pt: 14, px: { lg: 20, sm: 10, xl: 40, xs: 5 } }}>
      <Zoom>
        <Typography component="h2" sx={{ textAlign: 'center' }} variant={isSmAndUp ? 'h3' : 'h5'}>
          {sectionTitle}
        </Typography>
      </Zoom>

      {children}
    </Box>
  );
}
