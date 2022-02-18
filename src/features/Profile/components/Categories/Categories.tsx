import { CardContent, CardHeader, List, ListItem, ListItemText, Tab, Tabs } from '@mui/material';

import { useCategories } from 'src/features/Profile/components/Categories/useCategories';

type CategoriesType = {
  description?: string;
  items: (string | { text: string; title: string })[];
  text: string;
}[];
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
        {categories.map(({ text }) => {
          const accessibleText = text.replace(' ', '-');

          return (
            <Tab
              aria-controls={`panel-${accessibleText}`}
              id={`tab-${accessibleText}`}
              key={text}
              label={text}
            />
          );
        })}
      </Tabs>

      {categories.map(({ description, items, text }, index) => {
        const accessibleText = text.replace(' ', '-');

        return tab === index ? (
          <CardContent
            aria-labelledby={`tab-${accessibleText}`}
            id={`panel-${accessibleText}`}
            key={text}
            role="tabpanel"
          >
            {description ? <CardHeader subheader={description} /> : null}

            <List sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              {items.map((item) => {
                const hasAbbreviation = typeof item !== 'string';

                return (
                  <ListItem
                    key={hasAbbreviation ? item.text : item}
                    sx={{ display: 'flex', width: 'auto' }}
                  >
                    {hasAbbreviation ? (
                      <ListItemText
                        key={item.text}
                        primary={item.text}
                        primaryTypographyProps={{ component: 'abbr', title: item.title }}
                      />
                    ) : (
                      <ListItemText primary={item} />
                    )}
                  </ListItem>
                );
              })}
            </List>
          </CardContent>
        ) : null;
      })}
    </>
  );
}
