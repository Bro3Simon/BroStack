import { Box } from "@mui/material";

import { Zoom } from "app/components/Zoom";
import { Title } from "app/features/Section/components/Title";
import { Children } from "app/types/commonProps";

export type SectionProps = {
  id: string;
  title: string;
} & Children;

export function Section({ children, id, title }: SectionProps) {
  return (
    <Box
      aria-label={title}
      component="section"
      id={id}
      sx={{ pb: 10, pt: 14, px: { lg: 20, sm: 10, xl: 40, xs: 5 } }}
    >
      <Zoom>
        <Title title={title} />
      </Zoom>

      {children}
    </Box>
  );
}
