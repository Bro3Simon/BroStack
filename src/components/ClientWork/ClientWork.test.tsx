import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ClientWork } from 'src/components/ClientWork/ClientWork';
import { CLIENT_WORK } from 'src/data/clientWork';

describe('test ClientWork', () => {
  test('renders all the tabs with the correct label', () => {
    render(<ClientWork />);

    CLIENT_WORK.forEach(({ name }) => {
      expect(screen.getByRole('tab', { name })).toBeInTheDocument();
    });
  });

  test('only renders a single tab panel', () => {
    render(<ClientWork />);

    expect(screen.getAllByRole('tabpanel')).toHaveLength(1);
  });

  test('renders the first tab panel initially', () => {
    render(<ClientWork />);

    expect(screen.getByRole('tabpanel', { name: CLIENT_WORK[0].name })).toBeInTheDocument();
  });

  test('renders the correct tab panel after the its tab is clicked', () => {
    const user = userEvent.setup();

    render(<ClientWork />);

    CLIENT_WORK.forEach(async ({ name }) => {
      await user.click(
        screen.getByRole('tab', {
          name,
        }),
      );

      expect(screen.getByRole('tabpanel', { name })).toBeInTheDocument();
    });
  });

  test('renders the correct image for each tab panel', () => {
    const user = userEvent.setup();

    render(<ClientWork />);

    CLIENT_WORK.forEach(async ({ image, name }) => {
      await user.click(
        screen.getByRole('tab', {
          name,
        }),
      );

      expect(screen.getByRole('img', { name: image })).toBeInTheDocument();
    });
  });

  test('renders the correct description for each tab panel', () => {
    const user = userEvent.setup();

    render(<ClientWork />);

    CLIENT_WORK.forEach(async ({ description, name }) => {
      await user.click(
        screen.getByRole('tab', {
          name,
        }),
      );

      expect(screen.getByText(description)).toBeInTheDocument();
    });
  });

  test('renders the correct link for each tab panel', () => {
    const user = userEvent.setup();

    render(<ClientWork />);

    CLIENT_WORK.forEach(async ({ href, name }) => {
      await user.click(
        screen.getByRole('tab', {
          name,
        }),
      );

      expect(screen.getByRole('link')).toHaveAttribute('href', href);
    });
  });
});
