import { Box, Button, CardActions, CardContent, Typography } from '@mui/material';

import { FormTextField } from 'src/components/FormTextField';
import { useNumberGuesser } from 'src/components/NumberGuesser/useNumberGuesser';

export function NumberGuesser() {
  const {
    control,
    handleClickNext,
    handleClickPlayAgain,
    handleSubmit,
    numberOfGuesses,
    secretNumber,
    state,
    userGuesses,
  } = useNumberGuesser();

  return (
    <form onSubmit={handleSubmit}>
      <CardContent sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
        {state === 'submitNumber' ? (
          <>
            <Typography>{"Let's play a game! First, I will try to guess your number."}</Typography>

            <Typography sx={{ mt: 3 }}>Pick a number between 1 - 1,000</Typography>

            <Box sx={{ mt: 2 }}>
              <FormTextField
                control={control}
                label="Secret Number"
                name="secretNumber"
                rules={{
                  max: {
                    message: 'Must be less than 1,000',
                    value: 999,
                  },
                  min: {
                    message: 'Must be greater than 0',
                    value: 1,
                  },
                  required: { message: 'Required', value: true },
                }}
                type="number"
              />
            </Box>
          </>
        ) : null}

        {state === 'result' ? (
          <>
            <Typography>
              <Typography component="span">{'Was your number '}</Typography>

              <Typography component="span" sx={{ fontWeight: 'bold' }}>
                {secretNumber}
              </Typography>

              <Typography component="span">?</Typography>
            </Typography>

            <Typography>
              <Typography component="span">{'It took me '}</Typography>

              <Typography component="span" sx={{ fontWeight: 'bold' }}>
                {numberOfGuesses}
              </Typography>

              <Typography component="span">{' guesses!'}</Typography>
            </Typography>
          </>
        ) : null}

        {state === 'submitGuess' ? (
          <Typography>{"Now it's your turn! Try to guess my number."}</Typography>
        ) : null}

        {state === 'tryAgain' ? (
          <>
            <Typography>Sorry, that is incorrect, try again!</Typography>

            <Typography variant="caption">{`Numbers you have tried: ${userGuesses.join(
              ', ',
            )}.`}</Typography>
          </>
        ) : null}

        {state === 'submitGuess' || state === 'tryAgain' ? (
          <>
            <Typography sx={{ mt: 3 }}>I am thinking of a number between 1 - 10.</Typography>

            <Box sx={{ mt: 2 }}>
              <FormTextField
                autoFocus
                control={control}
                label="Secret Number"
                name="guess"
                rules={{
                  max: {
                    message: 'Must be less than 11',
                    value: 10,
                  },
                  min: {
                    message: 'Must be greater than 0',
                    value: 1,
                  },
                  required: { message: 'Required', value: true },
                  validate: (value) =>
                    !userGuesses.includes(value) || 'You have already tried that number.',
                }}
                type="number"
              />
            </Box>
          </>
        ) : null}

        {state === 'correctGuess' ? (
          <>
            <Typography>{"That's correct!"}</Typography>

            <Typography>Do you want to play again?</Typography>
          </>
        ) : null}
      </CardContent>

      <CardActions sx={{ justifyContent: 'center' }}>
        {state === 'submitNumber' || state === 'submitGuess' || state === 'tryAgain' ? (
          <Button type="submit" variant="contained">
            Submit
          </Button>
        ) : null}

        {state === 'result' ? (
          <Button autoFocus onClick={handleClickNext} variant="contained">
            Next
          </Button>
        ) : null}

        {state === 'correctGuess' ? (
          <Button autoFocus onClick={handleClickPlayAgain} variant="contained">
            Play Again
          </Button>
        ) : null}
      </CardActions>
    </form>
  );
}
