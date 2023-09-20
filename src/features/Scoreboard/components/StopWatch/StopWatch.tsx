import { Box, Button, Typography } from '@mui/material';

import { useStopWatch } from 'src/features/Scoreboard/components/StopWatch/useStopWatch';

export const TITLE = 'stop watch';
export const RESET_BUTTON_LABEL = 'reset';
export const START_BUTTON_LABEL = 'start';
export const STOP_BUTTON_LABEL = 'stop';

export function StopWatch() {
  const { elapsedTime, handleClickReset, handleClickStart, handleClickStop, isRunning } =
    useStopWatch();

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography>{TITLE}</Typography>

      <Typography sx={{ my: 2 }}>{elapsedTime}</Typography>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button color="error" onClick={handleClickReset} size="small" variant="contained">
          {RESET_BUTTON_LABEL}
        </Button>

        {!isRunning ? (
          <Button color="success" onClick={handleClickStart} size="small" variant="contained">
            {START_BUTTON_LABEL}
          </Button>
        ) : (
          <Button color="warning" onClick={handleClickStop} size="small" variant="contained">
            {STOP_BUTTON_LABEL}
          </Button>
        )}
      </Box>
    </Box>
  );
}
