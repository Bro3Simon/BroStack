import { Box, Button, Typography } from '@mui/material';

import { useStopWatch } from 'src/features/Scoreboard/components/StopWatch/useStopWatch';

export function StopWatch() {
  const { elapsedTime, handleClickReset, handleClickStart, handleClickStop, isRunning } =
    useStopWatch();

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography>Stop Watch</Typography>

      <Typography sx={{ my: 2 }}>{elapsedTime}</Typography>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button color="error" onClick={handleClickReset} size="small" variant="contained">
          Reset
        </Button>

        {!isRunning ? (
          <Button color="success" onClick={handleClickStart} size="small" variant="contained">
            Start
          </Button>
        ) : (
          <Button color="warning" onClick={handleClickStop} size="small" variant="contained">
            Stop
          </Button>
        )}
      </Box>
    </Box>
  );
}
