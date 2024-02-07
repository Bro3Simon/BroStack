"use client";

import { Box, CardContent, Typography } from "@mui/material";

import { AddPlayer } from "app/features/Scoreboard/components/AddPlayer";
import { Player } from "app/features/Scoreboard/components/Player";
import { StopWatch } from "app/features/Scoreboard/components/StopWatch";
import { useScoreboard } from "app/features/Scoreboard/useScoreboard";

export const PLAYERS_TITLE = "Players:";

export function Scoreboard() {
  const {
    handleAddPlayer,
    handleAdjustPlayerScore,
    handleRemovePlayer,
    highScore,
    players,
  } = useScoreboard();

  return (
    <CardContent>
      <Box
        alignItems="center"
        bgcolor="primary.main"
        color="primary.contrastText"
        display="flex"
        justifyContent="space-between"
        p={2}
        textTransform="uppercase"
      >
        <Typography>{`${PLAYERS_TITLE} ${players.length}`}</Typography>

        <StopWatch />
      </Box>

      <Box bgcolor="info.dark">
        {players.map((player) => (
          <Player
            highScore={highScore}
            key={player.id}
            onAdjustPlayerScore={handleAdjustPlayerScore}
            onRemovePlayer={handleRemovePlayer}
            player={player}
          />
        ))}
      </Box>

      <AddPlayer onAddPlayer={handleAddPlayer} />
    </CardContent>
  );
}
