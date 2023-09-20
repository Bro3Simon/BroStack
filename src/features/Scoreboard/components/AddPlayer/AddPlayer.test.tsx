import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AddPlayer } from 'src/features/Scoreboard/components/AddPlayer/AddPlayer';

describe('test AddPlayer', () => {
  test('renders a textbox', () => {
    const onAddPlayer = jest.fn((newPlayerName) => console.log(newPlayerName));

    render(<AddPlayer onAddPlayer={onAddPlayer} />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('renders a button', () => {
    const onAddPlayer = jest.fn((newPlayerName) => console.log(newPlayerName));

    render(<AddPlayer onAddPlayer={onAddPlayer} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('calls onAddPlayer with the correct argument', async () => {
    const newPlayerName = 'Jim';
    const onAddPlayer = jest.fn((newPlayerName) => newPlayerName);
    const user = userEvent.setup();

    render(<AddPlayer onAddPlayer={onAddPlayer} />);

    await user.type(screen.getByRole('textbox'), newPlayerName);
    await user.click(screen.getByRole('button'));
    expect(onAddPlayer).toHaveBeenCalledWith(newPlayerName);
    jest.resetAllMocks();
  });
});
