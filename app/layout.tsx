import { ThemeRegistry } from "app/ThemeRegistry";
import { JOB_TITLE } from "app/data/general";
import { Children } from "app/types/commonProps";

import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  description: "Creating online tech solutions to drive business goals.",
  title: `Simon - ${JOB_TITLE}`,
};

export default function RootLayout({ children }: Children) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
