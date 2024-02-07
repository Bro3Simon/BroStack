export const JOB_TITLE = "Fullstack Developer";
export const WEB_SITE_NAME = "BroStack";

export const REQUIRED_ERROR_MESSAGE = "Required";
export const REQUIRED_RULE = {
  required: { message: REQUIRED_ERROR_MESSAGE, value: true },
};

export function computeTabAndPanelProps(
  name: string,
  variant: "tab" | "panel",
) {
  const isTab = variant === "tab";
  const accessibleName = name.replace(" ", "-");
  const panelAccessibleName = `panel-${accessibleName}`;
  const tabAccessibleName = `tab-${accessibleName}`;

  return {
    id: isTab ? tabAccessibleName : panelAccessibleName,
    label: name,
    ...(isTab && { "aria-controls": panelAccessibleName }),
    ...(!isTab && {
      "aria-labelledby": tabAccessibleName,
      role: "tabpanel" as const,
    }),
  };
}

export function arrayToCommaSeparatedString(array: string[]) {
  return new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction",
  }).format(array);
}
