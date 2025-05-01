import type { Metadata } from "next";
import { ReactNode } from "react";
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

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => (
  <html lang="en" className="scroll-smooth scroll-pt-32">
    <body
      className={`${inter.className} bg-neutral-200 leading-7 text-neutral-600 dark:bg-neutral-950 dark:text-neutral-400`}
    >
      {children}
    </body>
  </html>
);

export default RootLayout;
