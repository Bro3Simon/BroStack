import { useMediaQuery, useTheme } from "@mui/material";

export function useSmAndUp() {
  const {
    breakpoints: { up },
  } = useTheme();
  const isSmAndUp = useMediaQuery(up("sm"));

  return { isSmAndUp };
}
