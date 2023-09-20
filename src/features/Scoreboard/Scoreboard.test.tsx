import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ADD_PLAYER_TEXT } from 'src/features/Scoreboard/components/AddPlayer/AddPlayer';
import * as useAddPlayer from 'src/features/Scoreboard/components/AddPlayer/useAddPlayer';
import * as useStopWatch from 'src/features/Scoreboard/components/StopWatch/useStopWatch';
import {
  DECREMENT_BUTTON_TEXT,
  INCREMENT_BUTTON_TEXT,
  PLAYERS_TITLE,
  REMOVE_BUTTON_TEXT,
  Scoreboard,
} from 'src/features/Scoreboard/Scoreboard';
import { PLAYERS } from 'src/features/Scoreboard/useScoreboard';

describe('test Scoreboard', () => {
  test('renders players title and count', () => {
    render(<Scoreboard />);

    expect(screen.getByText(`${PLAYERS_TITLE} ${PLAYERS.length}`));
  });

  test('renders StopWatch', () => {
    const useStopWatchSpy = jest.spyOn(useStopWatch, 'useStopWatch');

    render(<Scoreboard />);

    expect(useStopWatchSpy).toHaveBeenCalled();
    jest.restoreAllMocks();
  });

  test('renders a remove button for every player', () => {
    render(<Scoreboard />);

    expect(screen.getAllByText(REMOVE_BUTTON_TEXT).length).toEqual(PLAYERS.length);
  });

  test('does not render a gold star initially', () => {
    render(<Scoreboard />);

    expect(screen.queryByTestId('StarIcon')).not.toBeInTheDocument();
  });

  test('renders each players name', () => {
    render(<Scoreboard />);

    PLAYERS.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  test('renders a decrement button for every player', () => {
    render(<Scoreboard />);

    expect(screen.getAllByText(DECREMENT_BUTTON_TEXT).length).toEqual(PLAYERS.length);
  });

  test('renders each players score as 0 initially', () => {
    const stopWatch0Count = 1;

    render(<Scoreboard />);

    expect(screen.getAllByText('0').length).toEqual(PLAYERS.length + stopWatch0Count);
  });

  test('renders an increment button for every player', () => {
    render(<Scoreboard />);

    expect(screen.getAllByText(INCREMENT_BUTTON_TEXT).length).toEqual(PLAYERS.length);
  });

  test('renders AddPlayer', () => {
    const useAddPlayerSpy = jest.spyOn(useAddPlayer, 'useAddPlayer');

    render(<Scoreboard />);

    expect(useAddPlayerSpy).toHaveBeenCalled();
    jest.restoreAllMocks();
  });

  test('clicking the remove button removes a player', async () => {
    const user = userEvent.setup();

    render(<Scoreboard />);

    await user.click(screen.getAllByText(REMOVE_BUTTON_TEXT)[0]);
    expect(screen.getAllByText(REMOVE_BUTTON_TEXT).length).toEqual(PLAYERS.length - 1);
  });

  test('clicking the decrement button decrements the score by one', async () => {
    const user = userEvent.setup();

    render(<Scoreboard />);

    await user.click(screen.getAllByText(DECREMENT_BUTTON_TEXT)[0]);
    expect(screen.getByText('-1')).toBeInTheDocument();
  });

  test('clicking the increment button decrements the score by one', async () => {
    const user = userEvent.setup();

    render(<Scoreboard />);

    await user.click(screen.getAllByText(INCREMENT_BUTTON_TEXT)[0]);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('renders a gold star for the player with the high score', async () => {
    const user = userEvent.setup();

    render(<Scoreboard />);

    await user.click(screen.getAllByText(INCREMENT_BUTTON_TEXT)[0]);
    expect(screen.getByTestId('StarIcon')).toBeInTheDocument();
  });

  test('renders a new player row with the correct name after clicking add player', async () => {
    const newPlayerCount = PLAYERS.length + 1;
    const newPlayerName = 'Jim';
    const stopWatch0Count = 1;
    const user = userEvent.setup();

    render(<Scoreboard />);

    await user.type(screen.getByRole('textbox'), newPlayerName);
    await user.click(screen.getByText(ADD_PLAYER_TEXT));
    expect(screen.getAllByText(REMOVE_BUTTON_TEXT).length).toEqual(newPlayerCount);
    expect(screen.getByText(newPlayerName)).toBeInTheDocument();
    expect(screen.getAllByText(DECREMENT_BUTTON_TEXT).length).toEqual(newPlayerCount);
    expect(screen.getAllByText('0').length).toEqual(newPlayerCount + stopWatch0Count);
    expect(screen.getAllByText(INCREMENT_BUTTON_TEXT).length).toEqual(newPlayerCount);
  });
});
