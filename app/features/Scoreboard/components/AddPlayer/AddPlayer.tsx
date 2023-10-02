import { Box, Button } from "@mui/material";

import { FormTextField } from "app/components/FormTextField";
import { useAddPlayer } from "app/features/Scoreboard/components/AddPlayer/useAddPlayer";

type AddPlayerProps = { onAddPlayer: (newPlayerName: string) => void };

export const ADD_PLAYER_TEXT = "add player";

export function AddPlayer({ onAddPlayer }: AddPlayerProps) {
  const { control, onSubmit: handleSubmit } = useAddPlayer(onAddPlayer);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        alignItems: "center",
        bgcolor: "primary.main",
        color: "primary.contrastText",
        display: "flex",
        gap: 2,
        justifyContent: "space-between",
        p: 2,
      }}
    >
      <FormTextField
        control={control}
        InputLabelProps={{
          sx: {
            "&.Mui-focused": { color: "primary.contrastText" },
            color: "primary.contrastText",
          },
        }}
        InputProps={{
          sx: {
            "&.MuiOutlinedInput-root.Mui-focused": {
              "& fieldset": {
                borderColor: "primary.contrastText",
              },
            },
            color: "primary.contrastText",
          },
        }}
        label="Name"
        name="newPlayerName"
        rules={{
          required: { message: "Required", value: true },
        }}
      ></FormTextField>

      <Button color="success" size="small" type="submit" variant="contained">
        {ADD_PLAYER_TEXT}
      </Button>
    </Box>
  );
}
