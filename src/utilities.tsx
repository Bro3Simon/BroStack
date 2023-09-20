export function computeTabAndPanelProps(name: string, variant: 'tab' | 'panel') {
  const isTab = variant === 'tab';
  const accessibleName = name.replace(' ', '-');
  const panelAccessibleName = `panel-${accessibleName}`;
  const tabAccessibleName = `tab-${accessibleName}`;

  return {
    id: isTab ? tabAccessibleName : panelAccessibleName,
    label: name,
    ...(isTab && { 'aria-controls': panelAccessibleName }),
    ...(!isTab && { 'aria-labelledby': tabAccessibleName, role: 'tabpanel' }),
  };
}

export function arrayToCommaSeparatedString(array: number[]) {
  return array.join(', ');
}
