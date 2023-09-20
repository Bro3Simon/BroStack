import { render, screen } from '@testing-library/react';

import { App } from 'src/App';
import * as useNavBar from 'src/components/NavBar/useNavBar';
import { IMAGES } from 'src/data/images';
import { PROJECTS } from 'src/data/projects';
import { setupIntersectionObserverMock, testCategoriesIsRendered } from 'src/testUtilities';

describe('test App', () => {
  test('renders all of the project titles', () => {
    setupIntersectionObserverMock();
    render(<App />);

    PROJECTS.forEach(({ title }) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  describe('renders dependent components', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('renders NavBar', () => {
      const useNavBarSpy = jest.spyOn(useNavBar, 'useNavBar');

      render(<App />);

      expect(useNavBarSpy).toHaveBeenCalled();
    });

    test('renders Welcome', () => {
      render(<App />);

      expect(screen.getByTestId('welcome')).toBeInTheDocument();
    });

    test('renders Section three times', () => {
      render(<App />);

      expect(screen.getAllByRole('heading', { level: 2 }).length).toEqual(3);
    });

    test('renders Profile', () => {
      render(<App />);

      // Categories is rendered by Profile,
      // So if at least one category item is rendered
      // Then we know Profile is rendered
      testCategoriesIsRendered();
    });

    test('renders photography', () => {
      // If at least one image is rendered then we know Photography was rendered
      const { source, title } = IMAGES[0];

      render(<App />);

      expect((screen.getAllByRole('img', { name: title })[0] as HTMLImageElement).src).toContain(
        source,
      );
    });
  });
});
