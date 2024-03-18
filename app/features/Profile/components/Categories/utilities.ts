import { CategoriesType } from "app/features/Profile/components/Categories/Categories";

type Item = CategoriesType[number]["items"][number];
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

export function extractKeyFromItem({ content }: Item) {
  return content.map(({ text }) => text).join(" ");
}
