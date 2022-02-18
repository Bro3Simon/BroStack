import { LoadingButton } from '@mui/lab';
import { Box, CardContent, Typography } from '@mui/material';

import { FormTextField } from 'src/components/FormTextField';
import { useSearchFlickr } from 'src/components/SearchFlickr/useSearchFlickr';

export function SearchFlickr() {
  const { control, formImage, formMessage, handleSubmit, isSubmitting, photos } = useSearchFlickr();

  return (
    <CardContent>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          alignItems: 'center',
          display: 'flex',
          gap: 2,
          justifyContent: 'center',
          mb: 2,
        }}
      >
        <FormTextField
          control={control}
          disabled={isSubmitting}
          label="Search Criteria"
          name="searchCriteria"
          rules={{
            required: { message: 'Required', value: true },
          }}
        />

        <LoadingButton loading={isSubmitting} type="submit" variant="contained">
          Search
        </LoadingButton>
      </Box>

      {!photos.length ? (
        <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography>{formMessage}</Typography>

          <Box alt="Web Search" component="img" src={formImage} sx={{ width: '40%' }} />
        </Box>
      ) : (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
          {photos.map(({ title, url }) => (
            <Box
              alt={title}
              component="img"
              key={url}
              src={url}
              sx={{
                border: 2,
                borderColor: 'warning.main',
                borderRadius: 4,
                height: 150,
                width: 150,
              }}
            />
          ))}
        </Box>
      )}
    </CardContent>
  );
}
