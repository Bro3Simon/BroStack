import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Avatar, Button, Typography } from "@mui/material";

import { WEB_SITE_NAME } from "app/data/general";
import { FunctionalityWrapper } from "app/features/NavBar/components/FunctionalityWrapper";
import { NavElement } from "app/features/NavBar/components/NavElement";
import logo from "app/images/logo.png";

export function NavBar() {
  return (
    <AppBar
      sx={{
        alignItems: { md: "normal", xs: "center" },
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <FunctionalityWrapper
        fullSizeNav={<NavElement />}
        logoButton={
          <Button
            component="a"
            href="/"
            sx={{ display: "flex", gap: 2, py: 1 }}
          >
            <Avatar
              alt={WEB_SITE_NAME}
              src={logo.src}
              sx={{ height: 60, width: 60 }}
            />

            <Typography color="text.primary">{WEB_SITE_NAME}</Typography>
          </Button>
        }
        mobileMenuIcon={<MenuIcon fontSize="large" />}
        mobileNav={<NavElement isMobile />}
      />
    </AppBar>
  );
}
