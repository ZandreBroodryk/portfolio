import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const font = Ubuntu({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zandré Broodryk",
  description: "Portfolio Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-neutral-900 text-white ${font.className}`}>
        {children}
      </body>
    </html>
  );
}
