import type { Metadata } from "next";
import { Instrument_Sans, Oswald } from "next/font/google";
import type { ReactNode } from "react";
import { designSystemRootVariables } from "./design-system/tokens";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Henri Maronen",
  description:
    "Creative engineer building full-stack web applications from idea to production.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${oswald.variable}`}
        style={designSystemRootVariables}
      >
        {children}
      </body>
    </html>
  );
}
