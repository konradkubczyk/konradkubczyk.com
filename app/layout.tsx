import type { Metadata } from "next";

import { inter } from "@/app/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s - Konrad Kubczyk",
    default: "Konrad Kubczyk",
  },
  description:
    "Web developer, learning and exploring through creative innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-neutral-200 leading-7 text-neutral-600 dark:bg-neutral-950 dark:text-neutral-400`}
      >
        {children}
      </body>
    </html>
  );
}
