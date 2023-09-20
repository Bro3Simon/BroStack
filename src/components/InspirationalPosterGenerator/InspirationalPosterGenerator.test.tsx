import { act } from 'react-dom/test-utils';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { InspirationalPosterGenerator } from 'src/components/InspirationalPosterGenerator/InspirationalPosterGenerator';

describe('test InspirationalPosterGenerator', () => {
  test('renders an image', () => {
    render(<InspirationalPosterGenerator />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  test('renders a quote', () => {
    render(<InspirationalPosterGenerator />);

    expect(screen.getByTestId('quote').innerHTML).not.toHaveLength(0);
  });

  test('renders an author', () => {
    render(<InspirationalPosterGenerator />);

    expect(screen.getByTestId('author').innerHTML).not.toHaveLength(0);
  });

  test('renders the new poster button', () => {
    render(<InspirationalPosterGenerator />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('renders a different image, quote and author after clicking the new poster button', async () => {
    const user = userEvent.setup();

    render(<InspirationalPosterGenerator />);

    const originalImageAltText = (screen.getByRole('img') as HTMLImageElement).alt;
    const originalImageSource = (screen.getByRole('img') as HTMLImageElement).src;
    const originalQuote = screen.getByTestId('quote').innerHTML;
    const originalAuthor = screen.getByTestId('author').innerHTML;

    await user.click(screen.getByRole('button'));
    await act(async () => {
      // Allow the Fade transition to finish
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve('response');
        }, 2000),
      );
    });

    const secondImageAltText = (screen.getByRole('img') as HTMLImageElement).alt;
    const secondImageSource = (screen.getByRole('img') as HTMLImageElement).src;
    const secondQuote = screen.getByTestId('quote').innerHTML;
    const secondAuthor = screen.getByTestId('author').innerHTML;

    expect(originalImageAltText).not.toEqual(secondImageAltText);
    expect(originalImageSource).not.toEqual(secondImageSource);
    expect(originalQuote).not.toEqual(secondQuote);
    expect(originalAuthor).not.toEqual(secondAuthor);
  });
});
