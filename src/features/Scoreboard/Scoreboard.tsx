import { Box, Button, CardContent, Icon, Typography } from '@mui/material';

import { AddPlayer } from 'src/features/Scoreboard/components/AddPlayer';
import { StopWatch } from 'src/features/Scoreboard/components/StopWatch';
import { useScoreboard } from 'src/features/Scoreboard/useScoreboard';

export function Scoreboard() {
  const { handleAddPlayer, handleChangeScore, handleRemovePlayer, highScore, players } =
    useScoreboard();

  return (
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          display: 'flex',
          justifyContent: 'space-between',
          p: 2,
          textTransform: 'uppercase',
        }}
      >
        <Typography>Players: {players.length}</Typography>

        <StopWatch />
      </Box>

      <Box sx={{ bgcolor: 'info.dark' }}>
        {players.map(({ id, name, score }) => (
          <Box
            key={id}
            sx={{
              alignItems: 'center',
              border: 1,
              display: 'flex',
              gap: 2,
              p: 1,
            }}
          >
            <Button
              color="error"
              onClick={() => handleRemovePlayer(id)}
              size="small"
              sx={{ height: 32, minWidth: 32, width: 32 }}
              variant="contained"
            >
              X
            </Button>

            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexGrow: 1,
                gap: 1,
              }}
            >
              {highScore === score ? <Icon sx={{ color: 'gold' }}>star</Icon> : null}

              <Typography
                sx={{
                  overflowWrap: 'anywhere',
                  ...(highScore === score && { color: 'gold', fontWeight: 'bold' }),
                }}
              >
                {name}
              </Typography>
            </Box>

            <Box sx={{ alignItems: 'center', display: 'flex', gap: 1 }}>
              <Button
                color="error"
                onClick={() => handleChangeScore(id, 'decrement')}
                size="small"
                sx={{ height: 32, minWidth: 32, width: 32 }}
                variant="contained"
              >
                -
              </Button>

              <Typography sx={{ minWidth: '2em', my: 2, textAlign: 'center' }}>{score}</Typography>

              <Button
                color="success"
                onClick={() => handleChangeScore(id, 'increment')}
                size="small"
                sx={{ height: 32, minWidth: 32, width: 32 }}
                variant="contained"
              >
                +
              </Button>
            </Box>
          </Box>
        ))}
      </Box>

      <AddPlayer onAddPlayer={handleAddPlayer} />
    </CardContent>
  );
}
