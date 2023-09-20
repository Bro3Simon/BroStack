import { useState } from 'react';

import { useMediaQuery, useTheme } from '@mui/material';

export function useNavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMdAndUp = useMediaQuery(useTheme().breakpoints.up('md'));

  function handleToggleDrawer() {
    setIsDrawerOpen(!isDrawerOpen);
  }

  return {
    handleToggleDrawer,
    isDrawerOpen,
    isMdAndUp,
  };
}
