import { Card, Typography } from "@mui/material";
import { Zoom } from "react-awesome-reveal";

import { SKILLS } from "app/data/skills";
import { Categories } from "app/features/Profile/components/Categories";

export const PROFILE_SUMMARY = [
  "Results-oriented business ",
  "IT",
  " professional recognized for accountability, collaboration, rapid adaptability, and unwavering motivation. Boasts a versatile background and a fervent dedication to web applications. Proven track record in steering teams, orchestrating the complete ",
  "SDLC,",
  " and crafting insightful data reports. Expertise spans administration, supervision, quality assurance, software testing, project management, business systems analysis, website and web application development. Known for adeptly organizing extensive online content to deliver intuitive ",
  "GUI",
  " experiences and providing exceptional user support.",
];

export function Profile() {
  return (
    <>
      <Zoom>
        <Typography component="p" sx={{ m: 0 }}>
          <Typography component="span">{PROFILE_SUMMARY[0]}</Typography>

          <Typography component="abbr" title="information technology">
            {PROFILE_SUMMARY[1]}
          </Typography>

          <Typography component="span">{PROFILE_SUMMARY[2]}</Typography>

          <Typography component="abbr" title="Software Development Life Cycle">
            {PROFILE_SUMMARY[3]}
          </Typography>

          <Typography component="span">{PROFILE_SUMMARY[4]}</Typography>

          <Typography component="abbr" title="Graphic User Interface">
            {PROFILE_SUMMARY[5]}
          </Typography>

          <Typography component="span">{PROFILE_SUMMARY[6]}</Typography>
        </Typography>
      </Zoom>

      <Zoom>
        <Card sx={{ mt: 5 }}>
          <Categories categories={SKILLS.categories} />
        </Card>
      </Zoom>
    </>
  );
}
