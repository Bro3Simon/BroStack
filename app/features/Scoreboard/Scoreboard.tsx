import StarIcon from "@mui/icons-material/Star";
import { Box, CardContent, Typography } from "@mui/material";

import { AddPlayer } from "app/features/Scoreboard/components/AddPlayer";
import { PlayerButton } from "app/features/Scoreboard/components/PlayerButton";
import { StopWatch } from "app/features/Scoreboard/components/StopWatch";
import { useScoreboard } from "app/features/Scoreboard/useScoreboard";

export const PLAYERS_TITLE = "Players:";
export const REMOVE_BUTTON_TEXT = "X";
export const DECREMENT_BUTTON_TEXT = "-";
export const INCREMENT_BUTTON_TEXT = "+";

export function Scoreboard() {
  const { handleAddPlayer, handleClickPlayerButton, highScore, players } =
    useScoreboard();

  return (
    <CardContent>
      <Box
        sx={{
          alignItems: "center",
          bgcolor: "primary.main",
          color: "primary.contrastText",
          display: "flex",
          justifyContent: "space-between",
          p: 2,
          textTransform: "uppercase",
        }}
      >
        <Typography>{`${PLAYERS_TITLE} ${players.length}`}</Typography>

        <StopWatch />
      </Box>

      <Box sx={{ bgcolor: "info.dark" }}>
        {players.map(({ id, name, score }) => (
          <Box
            key={id}
            sx={{
              alignItems: "center",
              border: 1,
              display: "flex",
              gap: 2,
              p: 1,
            }}
          >
            <PlayerButton
              onClick={() => handleClickPlayerButton(id, "remove")}
              text={REMOVE_BUTTON_TEXT}
            />

            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                flexGrow: 1,
                gap: 1,
              }}
            >
              {highScore === score ? <StarIcon sx={{ color: "gold" }} /> : null}

              <Typography
                sx={{
                  overflowWrap: "anywhere",
                  ...(highScore === score && {
                    color: "gold",
                    fontWeight: "bold",
                  }),
                }}
              >
                {name}
              </Typography>
            </Box>

            <Box sx={{ alignItems: "center", display: "flex", gap: 1 }}>
              <PlayerButton
                onClick={() => handleClickPlayerButton(id, "decrement")}
                text={DECREMENT_BUTTON_TEXT}
              />

              <Typography sx={{ minWidth: "2em", my: 2, textAlign: "center" }}>
                {score}
              </Typography>

              <PlayerButton
                onClick={() => handleClickPlayerButton(id, "increment")}
                text={INCREMENT_BUTTON_TEXT}
              />
            </Box>
          </Box>
        ))}
      </Box>

      <AddPlayer onAddPlayer={handleAddPlayer} />
    </CardContent>
  );
}
