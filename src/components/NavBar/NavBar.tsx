import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Avatar,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';

import { useNavBar } from 'src/components/NavBar/useNavBar';
import { NAV_BAR_LINKS } from 'src/data/navBarLinks';

import logo from 'src/images/logo.png';

export function NavBar() {
  const { handleToggleDrawer, isDrawerOpen, isMdAndUp } = useNavBar();

  return (
    <AppBar
      sx={{
        alignItems: { md: 'normal', xs: 'center' },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      {!isMdAndUp ? (
        <IconButton aria-label="Open Drawer" onClick={handleToggleDrawer} sx={{ mx: 1 }}>
          <MenuIcon fontSize="large" />
        </IconButton>
      ) : null}

      <Button component="a" href="/" sx={{ display: 'flex', gap: 2, py: 1 }}>
        <Avatar alt="BroStack" src={logo} sx={{ height: 60, width: 60 }} />

        <Typography sx={{ color: 'text.primary' }}>Brostack</Typography>
      </Button>

      {isMdAndUp ? (
        <nav>
          <List disablePadding sx={{ display: 'flex', height: '100%' }}>
            {NAV_BAR_LINKS.map(({ href, text }) => (
              <ListItem disablePadding key={text}>
                <ListItemButton component="a" href={href} sx={{ height: '100%' }}>
                  <ListItemText primary={text} primaryTypographyProps={{ noWrap: true }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
      ) : (
        <Drawer onClose={handleToggleDrawer} open={isDrawerOpen}>
          <nav>
            <List onClick={handleToggleDrawer}>
              {NAV_BAR_LINKS.map(({ href, text }) => (
                <ListItem disablePadding key={text}>
                  <ListItemButton component="a" href={href}>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </nav>
        </Drawer>
      )}
    </AppBar>
  );
}
