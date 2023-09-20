import { render, screen } from '@testing-library/react';

import { Photography } from 'src/components/Photography/Photography';
import { IMAGES } from 'src/data/images';
import { setupIntersectionObserverMock } from 'src/testUtilities';

describe('test Photography', () => {
  test('renders all of the correct text', () => {
    setupIntersectionObserverMock();
    render(<Photography />);

    expect(
      screen.getByText(
        'I enjoy expressing my artistic side from time to time through photography and video. Enjoy a few of my favorite photos below or check out my',
      ),
    ).toBeInTheDocument;
    expect(screen.getByRole('link', { name: 'video' })).toBeInTheDocument;
    expect(screen.getByText('on YouTube that has more than one million views!')).toBeInTheDocument;
  });

  test('renders all of the photos', () => {
    setupIntersectionObserverMock();
    render(<Photography />);

    expect(screen.getAllByRole('img')).toHaveLength(IMAGES.length);
  });

  test('each photo has the correct alt text and source', () => {
    setupIntersectionObserverMock();
    render(<Photography />);

    IMAGES.forEach(({ source, title }) => {
      const image = screen.getByRole('img', { name: title }) as HTMLImageElement;

      expect(image.src).toContain(source);
    });
  });
});
