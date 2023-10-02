import { ReactNode } from "react";

import { ThemeRegistry } from "app/ThemeRegistry";

import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  description: "Creating online tech solutions to drive business goals.",
  title: "Simon - Frontend Developer",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
