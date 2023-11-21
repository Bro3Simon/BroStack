import { screen } from "@testing-library/react";
import mediaQuery from "css-mediaquery";

import { SKILLS } from "app/data/skills";

export const MUI_BREAKPOINTS = {
  lg: 1200,
  md: 900,
  sm: 600,
  xl: 1536,
};

function createMatchMedia(width: number) {
  return (query: string) => ({
    addEventListener: () => {},
    addListener: () => {},
    dispatchEvent: () => true,
    matches: mediaQuery.match(query, { width }),
    media: "",
    onchange: () => {},
    removeEventListener: () => {},
    removeListener: () => {},
  });
}

export function resizeScreenSize(width: number) {
  window.matchMedia = createMatchMedia(width);
}

export function setupIntersectionObserverMock({
  disconnect = () => null,
  observe = () => null,
  root = null,
  rootMargin = "",
  takeRecords = () => [],
  thresholds = [],
  unobserve = () => null,
} = {}): void {
  class MockIntersectionObserver implements IntersectionObserver {
    disconnect: () => void = disconnect;
    observe: (target: Element) => void = observe;
    readonly root: Element | null = root;
    readonly rootMargin: string = rootMargin;
    takeRecords: () => IntersectionObserverEntry[] = takeRecords;
    readonly thresholds: ReadonlyArray<number> = thresholds;
    unobserve: (target: Element) => void = unobserve;
  }

  Object.defineProperty(window, "IntersectionObserver", {
    configurable: true,
    value: MockIntersectionObserver,
    writable: true,
  });

  Object.defineProperty(global, "IntersectionObserver", {
    configurable: true,
    value: MockIntersectionObserver,
    writable: true,
  });
}

export function testCategoriesIsRendered() {
  const text =
    typeof SKILLS.categories[0].items[1] === "string"
      ? SKILLS.categories[0].items[1]
      : SKILLS.categories[0].items[1].text;

  expect(screen.getByText(text)).toBeInTheDocument();
}
