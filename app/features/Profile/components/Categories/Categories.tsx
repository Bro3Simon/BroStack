"use client";

import {
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  Tab,
  Tabs,
} from "@mui/material";

import { SKILLS } from "app/data/skills";
import { useTabs } from "app/hooks/useTabs";
import { computeTabAndPanelProps } from "app/utilities";

type CategoriesType = typeof SKILLS.categories;
type PropsOfCategories = { categories: CategoriesType };

export function Categories({ categories }: PropsOfCategories) {
  const { handleChangeTab, tab } = useTabs();

  return (
    <>
      <Tabs
        allowScrollButtonsMobile
        aria-label="skills"
        onChange={handleChangeTab}
        scrollButtons
        value={tab}
        variant="scrollable"
      >
        {categories.map(({ name }) => (
          <Tab key={name} {...computeTabAndPanelProps(name, "tab")} />
        ))}
      </Tabs>

      {categories.map(({ description, items, name }, index) =>
        tab === index ? (
          <CardContent key={name} {...computeTabAndPanelProps(name, "panel")}>
            {description ? <CardHeader subheader={description} /> : null}

            <List sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              {items.map((item) => {
                const hasAbbreviation = typeof item !== "string";
                const text = hasAbbreviation ? item.text : item;

                return (
                  <ListItem key={text} sx={{ display: "flex", width: "auto" }}>
                    <ListItemText
                      primary={text}
                      {...(hasAbbreviation && {
                        primaryTypographyProps: {
                          component: "abbr",
                          title: item.title,
                        },
                      })}
                    />
                  </ListItem>
                );
              })}
            </List>
          </CardContent>
        ) : null,
      )}
    </>
  );
}
