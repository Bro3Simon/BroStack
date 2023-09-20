import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { NavBar } from 'src/components/NavBar/NavBar';
import { NAV_BAR_LINKS } from 'src/data/navBarLinks';
import { MUI_BREAKPOINTS, resizeScreenSize } from 'src/testUtilities';

describe('test NavBar', () => {
  function testLinksAreRendered(extraLinks = 0) {
    // There is one additional link because of the logo when the drawer isn't opened
    expect(screen.getAllByRole('link')).toHaveLength(NAV_BAR_LINKS.length + extraLinks);
  }

  test('renders the logo', () => {
    render(<NavBar />);

    expect(screen.getByAltText('BroStack')).toBeInTheDocument();
  });

  describe('test !mdAndUp screen size', () => {
    beforeEach(() => {
      resizeScreenSize(MUI_BREAKPOINTS.md - 1);
    });

    function testNoList() {
      expect(screen.queryByRole('list')).not.toBeInTheDocument();
    }

    test('renders the drawer button', () => {
      render(<NavBar />);

      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('renders the menu icon', () => {
      render(<NavBar />);

      expect(screen.queryByTestId('MenuIcon')).toBeInTheDocument();
    });

    describe('test the drawer functionality', () => {
      function clickDrawerButton(user: any) {
        return user.click(screen.getByRole('button'));
      }

      test('does not render a list of links initially', () => {
        render(<NavBar />);

        testNoList();
      });

      test('renders the links after clicking the drawer button', async () => {
        const user = userEvent.setup();

        render(<NavBar />);

        await clickDrawerButton(user);
        testLinksAreRendered();
      });

      test('does not render a list of links after clicking on a link', () => {
        const user = userEvent.setup();

        render(<NavBar />);

        NAV_BAR_LINKS.forEach(async ({ text }) => {
          await clickDrawerButton(user);

          await user.click(screen.getByText(text));
          testNoList();
        });
      });
    });
  });

  describe('test mdAndUp screen size', () => {
    beforeEach(() => {
      resizeScreenSize(MUI_BREAKPOINTS.md + 1);
    });

    test('does not render the drawer button', () => {
      render(<NavBar />);

      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    test('renders the links', () => {
      render(<NavBar />);

      testLinksAreRendered(1);
    });
  });
});
