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

import { ConditionalLinkWrapper } from "app/components/ConditionalLinkWrapper";
import { SKILLS } from "app/data/skills";
import { useCategories } from "app/features/Profile/components/Categories/useCategories";
import {
  computeTabAndPanelProps,
  extractKeyFromItem,
} from "app/features/Profile/components/Categories/utilities";

export type CategoriesType = typeof SKILLS.categories;
type PropsOfCategories = { categories: CategoriesType };

export function Categories({ categories }: PropsOfCategories) {
  const { handleChangeTab, tab } = useCategories();

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
                const hasLink = "link" in item;

                return (
                  <ListItem
                    key={extractKeyFromItem(item)}
                    sx={{ display: "flex", width: "auto" }}
                  >
                    <ConditionalLinkWrapper
                      href={item.link}
                      rel="noreferrer"
                      shouldRenderLink={hasLink}
                      sx={{ display: "flex" }}
                      target="_blank"
                      underline="none"
                    >
                      {item.content.map((content) => {
                        const { hasLeftMargin, hasRightMargin, text } = content;
                        const isAbbreviation = "title" in content;

                        return (
                          <ListItemText
                            key={text}
                            primary={text}
                            {...(isAbbreviation && {
                              primaryTypographyProps: {
                                component: "abbr",
                                title: content.title,
                                ...(hasLeftMargin && { ml: 1 }),
                                ...(hasRightMargin && { mr: 1 }),
                              },
                            })}
                          />
                        );
                      })}
                    </ConditionalLinkWrapper>
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
