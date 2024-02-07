"use client";

import { Zoom as ZoomReactAwesomeReveal } from "react-awesome-reveal";

import { Children } from "app/types/commonProps";

type ZoomProps = { className?: string } & Children;

export function Zoom({ children, className = undefined }: ZoomProps) {
  return (
    <ZoomReactAwesomeReveal {...(className && { className: className })}>
      {children}
    </ZoomReactAwesomeReveal>
  );
}
