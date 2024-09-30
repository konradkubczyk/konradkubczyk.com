import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/app/fonts";

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
    <html lang="en">
      <body
        className={
          inter.className +
          " bg-neutral-200 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400"
        }
      >
        {children}
      </body>
    </html>
  );
}
