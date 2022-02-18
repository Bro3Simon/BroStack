import { Zoom } from 'react-awesome-reveal';

import { Card, Typography } from '@mui/material';

import { SKILLS } from 'src/data/skills';
import { Categories } from 'src/features/Profile/components/Categories';

export function Profile() {
  return (
    <>
      <Zoom>
        <Typography component="p" sx={{ m: 0 }}>
          <Typography component="span">{'Experienced business '}</Typography>

          <Typography component="abbr" title="information technology">
            IT
          </Typography>

          <Typography component="span">
            {` professional described as, responsible, cooperative quick-learning, motivated and
          possessing a diverse background. Has experience leading teams, developing information
          systems and software using various forms of the `}
          </Typography>

          <Typography component="abbr" title="Software Development Life Cycle">
            SDLC
          </Typography>

          <Typography component="span">
            {` and creating data reports. Experiences include administration, supervising, quality
          assurance software testing, project management, business systems analysis, creating
          websites, organizing massive amounts of online content to create user friendly `}
          </Typography>

          <Typography component="abbr" title="Graphic User Interface">
            GUI
          </Typography>

          <Typography component="span">, and user support.</Typography>
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
