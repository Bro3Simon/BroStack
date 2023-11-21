import { ComponentProps } from "react";

import { Button } from "@mui/material";

type PlayerButtonProps = {
  text: "-" | "+" | "X";
} & Required<Pick<ComponentProps<typeof Button>, "onClick">>;

export function PlayerButton({
  onClick: handleClick,
  text,
}: PlayerButtonProps) {
  return (
    <Button
      color={text === "-" || text === "X" ? "error" : "success"}
      onClick={handleClick}
      size="small"
      sx={{ height: 32, minWidth: 32, width: 32 }}
      variant="contained"
    >
      {text}
    </Button>
  );
}
