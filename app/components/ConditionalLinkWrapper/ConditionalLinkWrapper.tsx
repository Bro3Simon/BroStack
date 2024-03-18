import { ComponentProps } from "react";

import { Link } from "@mui/material";

import { Children } from "app/types/commonProps";

type ConditionalLinkWrapperOwnProps = {
  shouldRenderLink: boolean;
} & Children;
type ConditionalLinkWrapperProps = ComponentProps<typeof Link> &
  ConditionalLinkWrapperOwnProps;

export function ConditionalLinkWrapper({
  children,
  shouldRenderLink,
  ...props
}: ConditionalLinkWrapperProps) {
  return shouldRenderLink ? (
    <Link {...props}>{children}</Link>
  ) : (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{children}</>
  );
}
