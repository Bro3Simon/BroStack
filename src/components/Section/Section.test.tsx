import { render, screen } from '@testing-library/react';

import { Section } from 'src/components/Section/Section';
import { setupIntersectionObserverMock } from 'src/testUtilities';

describe('test Section', () => {
  test('renders all the content', () => {
    setupIntersectionObserverMock();

    const { container } = render(
      <Section id="test" sectionTitle="Title Test">
        <div>children test</div>
      </Section>,
    );

    expect(container.querySelector('#test')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Title Test' })).toBeInTheDocument();
    expect(screen.getByText('children test')).toBeInTheDocument();
  });
});
