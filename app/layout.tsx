import type { Metadata } from "next";
import { Funnel_Display, Geist, Geist_Mono } from "next/font/google";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const sans = Geist({
  variable: "--sans",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--mono",
  subsets: ["latin"],
});

const display = Funnel_Display({
  variable: "--display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s - Konrad Kubczyk",
    default: "Konrad Kubczyk",
  },
  description:
    "Web developer, learning and exploring through creative innovation.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => (
  <html lang="en" suppressHydrationWarning>
    <body
      className={`${sans.variable} ${mono.variable} ${display.variable} antialiased`}
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
