"use client";

import { Card, CardHeader } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Zoom } from "react-awesome-reveal";

import { NavBar } from "app/components/NavBar";
import { Photography } from "app/components/Photography";
import { Section } from "app/components/Section";
import { Welcome } from "app/components/Welcome";
import { PROJECTS } from "app/data/projects";
import { Profile } from "app/features/Profile";

// eslint-disable-next-line import/no-default-export
export default function Home() {
  return (
    <>
      <NavBar />

      <main>
        <Welcome />

        <Section id="profile" sectionTitle="Profile Summary">
          <Profile />
        </Section>

        <Section id="projects" sectionTitle="My Projects">
          <Grid2
            container
            sx={{
              alignItems: "start",
              gap: 2,
              justifyContent: "center",
              mt: 2,
            }}
          >
            {PROJECTS.map(
              ({
                // eslint-disable-next-line @typescript-eslint/naming-convention
                componentName: Component,
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

        <Section id="photography" sectionTitle="My Photography">
          <Photography />
        </Section>
      </main>
    </>
  );
}
