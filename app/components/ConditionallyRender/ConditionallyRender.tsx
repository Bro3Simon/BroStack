import { Children } from "app/types/commonProps";

type ConditionallyRenderProps = { shouldRender: boolean } & Children;

export function ConditionallyRender({
  children,
  shouldRender,
}: ConditionallyRenderProps) {
  return shouldRender ? children : null;
}
