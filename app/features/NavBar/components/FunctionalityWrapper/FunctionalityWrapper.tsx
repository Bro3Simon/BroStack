"use client";

import { ReactElement } from "react";

import { Drawer, IconButton } from "@mui/material";

import { useFunctionalityWrapper } from "app/features/NavBar/components/FunctionalityWrapper/useFunctionalityWrapper";

export const OPEN_MENU_LABEL = "Open Menu";

type FunctionalityWrapperProps = {
  fullSizeNav: ReactElement;
  logoButton: ReactElement;
  mobileMenuIcon: ReactElement;
  mobileNav: ReactElement;
};

export function FunctionalityWrapper({
  fullSizeNav,
  logoButton,
  mobileMenuIcon,
  mobileNav,
}: FunctionalityWrapperProps) {
  const { handleToggleDrawer, isDrawerOpen, isMdAndUp } =
    useFunctionalityWrapper();

  return (
    <>
      {!isMdAndUp ? (
        <IconButton
          aria-label={isDrawerOpen ? "Close Menu" : OPEN_MENU_LABEL}
          onClick={handleToggleDrawer}
          sx={{ mx: 1 }}
        >
          {mobileMenuIcon}
        </IconButton>
      ) : null}

      {logoButton}

      {isMdAndUp ? (
        fullSizeNav
      ) : (
        <Drawer
          onClick={handleToggleDrawer}
          onClose={handleToggleDrawer}
          open={isDrawerOpen}
        >
          {mobileNav}
        </Drawer>
      )}
    </>
  );
}
