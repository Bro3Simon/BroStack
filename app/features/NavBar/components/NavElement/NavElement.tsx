import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

import { NAV_BAR_LINKS } from "app/data/navBarLinks";

type NavElementProps = { isMobile?: boolean };

export function NavElement({ isMobile = false }: NavElementProps) {
  return (
    <nav>
      <List
        {...(!isMobile && {
          disablePadding: true,
          sx: { display: "flex", height: "100%" },
        })}
      >
        {NAV_BAR_LINKS.map(({ href, text }) => (
          <ListItem disablePadding key={text}>
            <ListItemButton
              component="a"
              href={href}
              {...(!isMobile && {
                sx: { height: "100%" },
              })}
            >
              <ListItemText
                primary={text}
                {...(!isMobile && {
                  primaryTypographyProps: { noWrap: true },
                })}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </nav>
  );
}
