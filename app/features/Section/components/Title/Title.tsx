"use client";

import { Typography } from "@mui/material";

import { SectionProps } from "app/features/Section/Section";
import { useSmAndUp } from "app/hooks/useSmAndUp";

type TitleProps = Pick<SectionProps, "title">;

export function Title({ title }: TitleProps) {
  const isSmAndUp = useSmAndUp();

  return (
    <Typography
      component="h2"
      textAlign="center"
      variant={isSmAndUp ? "h3" : "h5"}
    >
      {title}
    </Typography>
  );
}
