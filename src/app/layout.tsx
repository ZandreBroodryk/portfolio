import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Code from "@/components/icons/code";

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
        <a
          className="fixed bottom-2 right-3 flex gap-2 text-neutral-400"
          href="https://github.com/ZandreBroodryk/portfolio"
          target="_blank"
        >
          <Code />
          <p>source code</p>
        </a>
      </body>
    </html>
  );
}
