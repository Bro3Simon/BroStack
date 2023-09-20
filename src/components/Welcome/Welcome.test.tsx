import { render, screen } from '@testing-library/react';

import { Welcome } from 'src/components/Welcome/Welcome';
import { setupIntersectionObserverMock } from 'src/testUtilities';

import welcome from 'src/images/welcome.jpg';

describe('test Welcome', () => {
  beforeEach(() => {
    setupIntersectionObserverMock();
    render(<Welcome />);
  });

  test('uses the image as the background', () => {
    expect(screen.getByTestId('welcome')).toHaveStyle(`background-image: url(${welcome})`);
  });

  test('renders all of the text', () => {
    expect(screen.getByText('My Name is')).toBeInTheDocument();
    expect(screen.getByText('Simon')).toBeInTheDocument();
    expect(screen.getByText('and I am a')).toBeInTheDocument();
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
  });
});
