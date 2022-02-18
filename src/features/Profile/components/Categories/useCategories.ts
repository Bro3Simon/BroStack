import { SyntheticEvent, useState } from 'react';

export function useCategories() {
  const [tab, setTab] = useState(0);

  function handleChangeTab(event: SyntheticEvent<Element, Event>, tab: any) {
    setTab(tab);
  }

  return { handleChangeTab, tab };
}
