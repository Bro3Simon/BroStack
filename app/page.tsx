import { Card, CardHeader } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import { Photography } from "app/components/Photography";
import { Welcome } from "app/components/Welcome";
import { Zoom } from "app/components/Zoom";
import { PROJECTS } from "app/data/projects";
import { NavBar } from "app/features/NavBar";
import { Profile } from "app/features/Profile";
import { Section } from "app/features/Section";

export default function Home() {
  return (
    <>
      <NavBar />

      <main>
        <Welcome />

        <Section id="profile" title="Profile Summary">
          <Profile />
        </Section>

        <Section id="projects" title="My Projects">
          <Grid2
            alignItems="start"
            container
            gap={2}
            justifyContent="center"
            mt={2}
          >
            {PROJECTS.map(
              ({
                // eslint-disable-next-line @typescript-eslint/naming-convention
                Component,
                title,
              }) => (
                <Grid2 key={title} md={5} xs={12}>
                  <Zoom>
                    <Card
                      sx={{
                        pb: title === "Scoreboard" ? 0 : 2,
                      }}
                    >
                      <CardHeader
                        title={title}
                        titleTypographyProps={{
                          component: "h3",
                          textAlign: "center",
                          variant: "h5",
                        }}
                      />

                      <Component />
                    </Card>
                  </Zoom>
                </Grid2>
              ),
            )}
          </Grid2>
        </Section>

        <Section id="photography" title="My Photography">
          <Photography />
        </Section>
      </main>
    </>
  );
}
