import { Zoom } from 'react-awesome-reveal';

import { Card, CardHeader, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';

import { NavBar } from 'src/components/NavBar';
import { Photography } from 'src/components/Photography';
import { Section } from 'src/components/Section';
import { Welcome } from 'src/components/Welcome';
import { PROJECTS } from 'src/data/projects';
import { Profile } from 'src/features/Profile';

import './index.css';

export function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <NavBar />

      <main>
        <Welcome />

        <Section id="profile" sectionTitle="Profile Summary">
          <Profile />
        </Section>

        <Section id="projects" sectionTitle="My Projects">
          <Grid2 container sx={{ alignItems: 'start', gap: 2, justifyContent: 'center', mt: 2 }}>
            {PROJECTS.map(({ componentName: Component, title }) => (
              <Grid2 key={title} md={5} xs={12}>
                <Zoom>
                  <Card
                    sx={{
                      pb: title === 'Scoreboard' ? 0 : 2,
                    }}
                  >
                    <CardHeader
                      title={title}
                      titleTypographyProps={{ component: 'h3', textAlign: 'center', variant: 'h5' }}
                    />

                    <Component />
                  </Card>
                </Zoom>
              </Grid2>
            ))}
          </Grid2>
        </Section>

        <Section id="photography" sectionTitle="My Photography">
          <Photography />
        </Section>
      </main>
    </ThemeProvider>
  );
}
