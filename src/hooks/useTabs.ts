import { SyntheticEvent, useState } from 'react';

export function useTabs() {
  const [tab, setTab] = useState(0);

  function handleChangeTab(event: SyntheticEvent<Element, Event>, tab: number) {
    setTab(tab);
  }

  return { handleChangeTab, tab };
}
