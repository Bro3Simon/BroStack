import { Box, Button, CardActions, CardContent, Typography } from '@mui/material';

import { FormTextField } from 'src/components/FormTextField';
import { useNumberGuesser } from 'src/components/NumberGuesser/useNumberGuesser';
import { arrayToCommaSeparatedString } from 'src/utilities';

export const WELCOME_MESSAGE = "Let's play a game! First, I will try to guess your number.";
export const PICK_A_NUMBER_INSTRUCTIONS = 'Pick a number between 1 - 1,000';
export const SECRET_NUMBER_INPUT_NAME = 'secretNumber';
export const SUBMIT_BUTTON_TEXT = 'Submit';
export const RESULT_MESSAGE = ['Was your number', '?', 'It took me', 'guesses?'];
export const NEXT_BUTTON_TEXT = 'NEXT';
export const SUBMIT_GUESS_MESSAGE = "Now it's your turn! Try to guess my number.";
export const SUBMIT_GUESS_INSTRUCTIONS = 'I am thinking of a number between 1 - 10.';
export const GUESS_NUMBER_INPUT_NAME = 'guess';
export const TRY_AGAIN_MESSAGE = 'Sorry, that is incorrect, try again!';
export const TRIED_NUMBERS_MESSAGE = 'Numbers you have tried:';
export const CORRECT_GUESS_MESSAGE = "That's correct!";
export const PLAY_AGAIN_OFFER = 'Do you want to play again?';
export const PLAY_AGAIN_BUTTON_TEXT = 'Play Again';

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
            <Typography>{WELCOME_MESSAGE}</Typography>

            <Typography sx={{ mt: 3 }}>{PICK_A_NUMBER_INSTRUCTIONS}</Typography>

            <Box sx={{ mt: 2 }}>
              <FormTextField
                control={control}
                label="Secret Number"
                name={SECRET_NUMBER_INPUT_NAME}
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
              <Typography component="span">{RESULT_MESSAGE[0]}</Typography>

              <Typography component="span" sx={{ fontWeight: 'bold' }}>
                {` ${secretNumber}`}
              </Typography>

              <Typography component="span">{RESULT_MESSAGE[1]}</Typography>
            </Typography>

            <Typography>
              <Typography component="span">{RESULT_MESSAGE[2]}</Typography>

              <Typography component="span" sx={{ fontWeight: 'bold' }}>
                {` ${numberOfGuesses} `}
              </Typography>

              <Typography component="span">{RESULT_MESSAGE[3]}</Typography>
            </Typography>
          </>
        ) : null}

        {state === 'submitGuess' ? <Typography>{SUBMIT_GUESS_MESSAGE}</Typography> : null}

        {state === 'tryAgain' ? (
          <>
            <Typography>{TRY_AGAIN_MESSAGE}</Typography>

            <Typography variant="caption">{`${TRIED_NUMBERS_MESSAGE} ${arrayToCommaSeparatedString(
              userGuesses,
            )}.`}</Typography>
          </>
        ) : null}

        {state === 'submitGuess' || state === 'tryAgain' ? (
          <>
            <Typography sx={{ mt: 3 }}>{SUBMIT_GUESS_INSTRUCTIONS}</Typography>

            <Box sx={{ mt: 2 }}>
              <FormTextField
                autoFocus
                control={control}
                label="Secret Number"
                name={GUESS_NUMBER_INPUT_NAME}
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
            <Typography>{CORRECT_GUESS_MESSAGE}</Typography>

            <Typography>{PLAY_AGAIN_OFFER}</Typography>
          </>
        ) : null}
      </CardContent>

      <CardActions sx={{ justifyContent: 'center' }}>
        {state === 'submitNumber' || state === 'submitGuess' || state === 'tryAgain' ? (
          <Button type="submit" variant="contained">
            {SUBMIT_BUTTON_TEXT}
          </Button>
        ) : null}

        {state === 'result' ? (
          <Button autoFocus onClick={handleClickNext} variant="contained">
            {NEXT_BUTTON_TEXT}
          </Button>
        ) : null}

        {state === 'correctGuess' ? (
          <Button autoFocus onClick={handleClickPlayAgain} variant="contained">
            {PLAY_AGAIN_BUTTON_TEXT}
          </Button>
        ) : null}
      </CardActions>
    </form>
  );
}
