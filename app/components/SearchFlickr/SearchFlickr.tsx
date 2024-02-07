"use client";

import { LoadingButton } from "@mui/lab";
import { Box, CardContent, Typography } from "@mui/material";

import { FormTextField } from "app/components/FormTextField";
import { useSearchFlickr } from "app/components/SearchFlickr/useSearchFlickr";
import { REQUIRED_RULE } from "app/utilities";

export function SearchFlickr() {
  const {
    control,
    formImage,
    formMessage,
    handleSubmit,
    isSubmitting,
    photos,
  } = useSearchFlickr();

  return (
    <CardContent>
      <Box
        alignItems="baseline"
        component="form"
        display="flex"
        gap={2}
        justifyContent="center"
        mb={2}
        onSubmit={handleSubmit}
      >
        <FormTextField
          control={control}
          label="Search Criteria"
          name="searchCriteria"
          rules={REQUIRED_RULE}
        />

        <LoadingButton loading={isSubmitting} type="submit" variant="contained">
          Search
        </LoadingButton>
      </Box>

      {!photos.length ? (
        <Box alignItems="center" display="flex" flexDirection="column" gap={2}>
          <Typography>{formMessage}</Typography>

          <Box
            alt="Web Search"
            component="img"
            src={formImage.src}
            width="40%"
          />
        </Box>
      ) : (
        <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center">
          {photos.map(({ title, url }) => (
            <Box
              alt={title}
              border={2}
              borderColor="warning.main"
              borderRadius={4}
              component="img"
              height={150}
              key={url}
              src={url}
              width={150}
            />
          ))}
        </Box>
      )}
    </CardContent>
  );
}
