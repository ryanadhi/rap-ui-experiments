import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import "prismjs/themes/prism.css";
import Navbar from "./components/web-components/NavBar";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ryan | UI Experiments",
  description:
    "Discover my latest UI experiments and innovative design solutions. Explore my portfolio to see creativity in action.",
  keywords: [
    "UI",
    "UX",
    "design",
    "portfolio",
    "web development",
    "ryan adhi",
    "ryan",
    "adhi",
  ],
  openGraph: {
    title: "Ryan | UI Experiments",
    description:
      "Discover my latest UI experiments and innovative design solutions. Explore my portfolio to see creativity in action.",
    type: "website",
    url: "https://rap-ui-experiments.vercel.app/",
    images: [
      {
        url: "https://images.unsplash.com/photo-1673574263974-c609138eaafe?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Ryan's Website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ryanadhi",
    title: "Ryan | UI Experiments",
    description:
      "Discover my latest UI experiments and innovative design solutions. Explore my portfolio to see creativity in action.",
    images: [
      "https://images.unsplash.com/photo-1673574263974-c609138eaafe?q=80&w=1200&auto=format&fit=crop",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script async defer src="https://buttons.github.io/buttons.js" />
      <body className={inter.className}>
        <div>
          <Navbar />
          <div className="h-[calc(100vh-4rem)]">{children}</div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
