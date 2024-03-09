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
