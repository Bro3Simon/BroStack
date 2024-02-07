import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import { render, screen } from "@testing-library/react";
// eslint-disable-next-line import/named
import { UserEvent, userEvent } from "@testing-library/user-event";

import { NAV_BAR_LINKS } from "app/data/navBarLinks";
import { FunctionalityWrapper } from "app/features/NavBar/components/FunctionalityWrapper";
import { OPEN_MENU_LABEL } from "app/features/NavBar/components/FunctionalityWrapper/FunctionalityWrapper";
import { NavElement } from "app/features/NavBar/components/NavElement";
import { MUI_BREAKPOINTS, resizeScreenSize } from "app/testUtilities";
import { WEB_SITE_NAME } from "app/utilities";

describe("test FunctionalityWrapper", () => {
  test("renders the supplied logo button", () => {
    render(
      <FunctionalityWrapper
        fullSizeNav={<nav></nav>}
        logoButton={<Button>{WEB_SITE_NAME}</Button>}
        mobileMenuIcon={<MenuIcon />}
        mobileNav={<nav></nav>}
      />,
    );

    expect(
      screen.getByRole("button", { name: WEB_SITE_NAME }),
    ).toBeInTheDocument();
  });

  function testLinksAreRendered() {
    expect(screen.getAllByRole("link")).toHaveLength(NAV_BAR_LINKS.length);
  }

  describe("test !mdAndUp screen size", () => {
    beforeEach(() => {
      resizeScreenSize(MUI_BREAKPOINTS.md - 1);
    });

    test("renders the drawer button", () => {
      render(
        <FunctionalityWrapper
          fullSizeNav={<nav></nav>}
          logoButton={<div></div>}
          mobileMenuIcon={<MenuIcon />}
          mobileNav={<nav></nav>}
        />,
      );

      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    test("renders the menu icon", () => {
      render(
        <FunctionalityWrapper
          fullSizeNav={<nav></nav>}
          logoButton={<div></div>}
          mobileMenuIcon={<MenuIcon />}
          mobileNav={<nav></nav>}
        />,
      );

      expect(screen.queryByTestId("MenuIcon")).toBeInTheDocument();
    });

    describe("test the drawer functionality", () => {
      function clickDrawerButton(user: UserEvent) {
        return user.click(screen.getByRole("button"));
      }

      function testNoList() {
        expect(screen.queryByRole("list")).not.toBeInTheDocument();
      }

      test("mobile menu button has the correct initial label", () => {
        render(
          <FunctionalityWrapper
            fullSizeNav={<NavElement />}
            logoButton={<div></div>}
            mobileMenuIcon={<MenuIcon />}
            mobileNav={<NavElement isMobile />}
          />,
        );

        expect(
          screen.getByRole("button", { name: OPEN_MENU_LABEL }),
        ).toBeInTheDocument();
      });

      test("does not render a list of links initially", () => {
        render(
          <FunctionalityWrapper
            fullSizeNav={<NavElement />}
            logoButton={<div></div>}
            mobileMenuIcon={<MenuIcon />}
            mobileNav={<NavElement isMobile />}
          />,
        );

        testNoList();
      });

      test("renders the links after clicking the drawer button", async () => {
        const user = userEvent.setup();

        render(
          <FunctionalityWrapper
            fullSizeNav={<NavElement />}
            logoButton={<div></div>}
            mobileMenuIcon={<MenuIcon />}
            mobileNav={<NavElement isMobile />}
          />,
        );

        await clickDrawerButton(user);
        testLinksAreRendered();
      });

      test("does not render a list of links after clicking on a link", () => {
        const user = userEvent.setup();

        render(
          <FunctionalityWrapper
            fullSizeNav={<NavElement />}
            logoButton={<div></div>}
            mobileMenuIcon={<MenuIcon />}
            mobileNav={<NavElement isMobile />}
          />,
        );

        NAV_BAR_LINKS.forEach(async ({ text }) => {
          await clickDrawerButton(user);
          await user.click(screen.getByText(text));

          testNoList();
        });
      });
    });
  });

  describe("test mdAndUp screen size", () => {
    beforeEach(() => {
      resizeScreenSize(MUI_BREAKPOINTS.md + 1);
    });

    test("does not render the drawer button", () => {
      render(
        <FunctionalityWrapper
          fullSizeNav={<nav></nav>}
          logoButton={<div></div>}
          mobileMenuIcon={<MenuIcon />}
          mobileNav={<nav></nav>}
        />,
      );

      expect(screen.queryByRole("button")).not.toBeInTheDocument();
    });

    test("renders the links", () => {
      render(
        <FunctionalityWrapper
          fullSizeNav={<NavElement />}
          logoButton={<div></div>}
          mobileMenuIcon={<MenuIcon />}
          mobileNav={<NavElement isMobile />}
        />,
      );

      testLinksAreRendered();
    });
  });
});
