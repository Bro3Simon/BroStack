"use client";

import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Tab,
  Tabs,
} from "@mui/material";

import { EXTERNAL_WORK } from "app/data/externalWork";
import { useTabs } from "app/hooks/useTabs";
import { computeTabAndPanelProps } from "app/utilities";

export function ExternalWork() {
  const { handleChangeTab, tab } = useTabs();

  return (
    <>
      <Tabs onChange={handleChangeTab} value={tab} variant="scrollable">
        {EXTERNAL_WORK.map(({ name }) => (
          <Tab key={name} {...computeTabAndPanelProps(name, "tab")} />
        ))}
      </Tabs>

      {EXTERNAL_WORK.map(({ description, href, image, name }, index) =>
        tab === index ? (
          <Box key={name} {...computeTabAndPanelProps(name, "panel")}>
            <CardMedia image={image.src} sx={{ height: 400 }} title={name} />

            <CardContent
              sx={{ bgcolor: "primary.main", color: "primary.contrastText" }}
            >
              {description}
            </CardContent>

            <CardActions sx={{ justifyContent: "center", pt: 3 }}>
              {href ? (
                <Button
                  color="warning"
                  href={href}
                  LinkComponent={Link}
                  target="_blank"
                  variant="contained"
                >
                  View
                </Button>
              ) : null}
            </CardActions>
          </Box>
        ) : null,
      )}
    </>
  );
}
