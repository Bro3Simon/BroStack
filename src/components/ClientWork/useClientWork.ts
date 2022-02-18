import { SyntheticEvent, useState } from 'react';

export function useClientWork() {
  const [tab, setTab] = useState(0);

  function handleChangeTab(event: SyntheticEvent<Element, Event>, tab: number) {
    setTab(tab);
  }

  return { handleChangeTab, tab };
}
