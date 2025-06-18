import type { Metadata } from "next";
import { Ubuntu, Ubuntu_Mono } from "next/font/google";
import "./globals.css";
import Code from "@/icons/code";
import AboutMe from "@/components/about-me/about-me";
import Content from "@/components/content";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
  subsets: ["latin"],
});

const ubuntuMono = Ubuntu_Mono({
  weight: ["400", "700"],
  variable: "--font-ubuntu-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zandré Broodryk",
  description: "Portfolio Page",
  icons: {
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.variable} ${ubuntuMono.variable} ${ubuntu.className} bg-[url('/cozy-city.jpg')] bg-cover bg-fixed antialiased before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:bg-neutral-800 before:backdrop-blur-xs`}
      >
        <main className="sm:max-h-screen sm:overflow-auto">
          <AboutMe
            name="Zandré Broodryk"
            profilePictureUrl="/avatar.jpg"
            title="Software Engineer"
            email="z.broodryk@gmail.com"
            location={{
              name: "George South Africa",
              coordinates: {
                latitude: -33.97777623294162,
                longitude: 22.495308950756026,
              },
            }}
            phone="072 570 7488"
          />
          <Content>{children}</Content>
        </main>
        <a
          className="fixed right-3 bottom-2 flex gap-2 text-neutral-400"
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
